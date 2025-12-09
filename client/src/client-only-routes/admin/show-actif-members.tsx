import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Helmet from 'react-helmet';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import validator from 'validator';
// eslint-disable-next-line import/no-unresolved
import envData from '../../../../config/env.json';
import { createFlashMessage } from '../../components/Flash/redux';
import { Loader } from '../../components/helpers';
import { Member, User } from '../../redux/prop-types';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector
} from '../../redux';
import { getMembers } from './all-server-request-members';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const { apiLocation, homeLocation } = envData;

// Types pour les filtres de période
type PeriodFilter =
  | '30days'
  | '2months'
  | '3months'
  | '4months'
  | '6months'
  | '1year'
  | 'all';

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn: boolean) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage
};

interface ShowActifMembersProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  showLoading: boolean;
  user: User;
  period?: string;
  path?: string;
  location?: { search: string };
}

// Fonction utilitaire pour obtenir la date à partir de la période
const getDateFromPeriod = (period: PeriodFilter): Date => {
  const now = new Date();
  const date = new Date();

  switch (period) {
    case '30days':
      date.setDate(now.getDate() - 30);
      break;
    case '2months':
      date.setMonth(now.getMonth() - 2);
      break;
    case '3months':
      date.setMonth(now.getMonth() - 3);
      break;
    case '4months':
      date.setMonth(now.getMonth() - 4);
      break;
    case '6months':
      date.setMonth(now.getMonth() - 6);
      break;
    case '1year':
      date.setFullYear(now.getFullYear() - 1);
      break;
    case 'all':
      return new Date(0);
    default:
      date.setDate(now.getDate() - 30);
  }
  return date;
};

export function ShowActifMembers(props: ShowActifMembersProps): JSX.Element {
  const { showLoading, isSignedIn, user, period, location } = props;
  const [allMembers, setAllMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Extraire le paramètre period de l'URL si présent
  const urlParams = new URLSearchParams(location?.search || '');
  const periodFromUrl = urlParams.get('period') as PeriodFilter | null;
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>(
    periodFromUrl || (period as PeriodFilter) || '30days'
  );

  // Vérifier si un membre est actif dans une période donnée
  const isMemberActiveInPeriod = useCallback(
    (member: Member, periodFilter: PeriodFilter): boolean => {
      const periodDate = getDateFromPeriod(periodFilter);
      const memberCreateDate = member.createAt
        ? new Date(member.createAt)
        : null;

      if (!memberCreateDate) return false;

      const hasCompletedChallenges = member.currentsSuperBlock.some(
        superBlock =>
          superBlock.totalCompletedChallenges &&
          superBlock.totalCompletedChallenges > 0
      );

      if (periodFilter === 'all') {
        return hasCompletedChallenges;
      }

      return (
        hasCompletedChallenges &&
        (memberCreateDate >= periodDate ||
          member.currentsSuperBlock.some(
            superBlock =>
              superBlock.totalCompletedChallenges &&
              superBlock.totalCompletedChallenges > 0
          ))
      );
    },
    []
  );

  // Filtrer les membres actifs
  const activeMembers = useMemo(() => {
    return allMembers.filter(m => isMemberActiveInPeriod(m, selectedPeriod));
  }, [allMembers, selectedPeriod, isMemberActiveInPeriod]);

  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
        setIsLoading(true);
        await getMembers({
          currentPage: 1,
          groupMembers: 'all',
          memberNameToSearch: '',
          setMembers: () => {
            // Not used in this component
          },
          setAllDataMembers: setAllMembers,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setCountUsers: () => {},
          setIsLoadingMember: setIsLoading,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setTotalPages: () => {},
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setCurrentPage: () => {},
          totalPages: 1
        });
      } catch (error) {
        console.error('Error fetching members:', error);
        setAllMembers([]);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchAllMembers();
  }, []);

  if (showLoading || isLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call
    void navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  const isSuperAdmin = validator.equals(user.role, 'Super-admin');
  const isAdmin = validator.equals(user.role, 'Admin');
  const isJudahEmail = user.email === 'judah@kadea.co';

  if (!isSuperAdmin && !isAdmin && !isJudahEmail) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-call
    void navigate(`${homeLocation}`);
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      <Helmet title={`Membres Actifs | Kadea Online`} />
      <div className='modern-admin-container'>
        <div className='modern-admin-header'>
          <button
            className='modern-btn modern-btn-secondary'
            onClick={() => {
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              void navigate('/admin/all-members');
            }}
            style={{ marginBottom: '1rem' }}
          >
            ← Retour à la liste
          </button>
          <h1 className='modern-admin-title'>Membres Actifs</h1>
          <div className='modern-filter-buttons' style={{ marginTop: '1rem' }}>
            <select
              value={selectedPeriod}
              onChange={e => {
                const newPeriod = e.target.value as PeriodFilter;
                setSelectedPeriod(newPeriod);
                // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                void navigate(
                  `/admin/all-members/actif-members?period=${newPeriod}`
                );
              }}
              className='modern-filter-btn'
              style={{ padding: '0.5rem 1rem' }}
            >
              <option value='30days'>30 jours</option>
              <option value='2months'>2 mois</option>
              <option value='3months'>3 mois</option>
              <option value='4months'>4 mois</option>
              <option value='6months'>6 mois</option>
              <option value='1year'>1 an</option>
              <option value='all'>Tout</option>
            </select>
          </div>
        </div>

        <div className='modern-admin-content'>
          <p style={{ marginBottom: '1.5rem', color: '#6c757d' }}>
            {activeMembers.length} membre(s) actif(s) sur {allMembers.length}{' '}
            total
          </p>

          <div className='modern-table-container'>
            <table className='modern-table'>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Date d&apos;inscription</th>
                  <th>Défis complétés</th>
                  <th>Cours suivis</th>
                </tr>
              </thead>
              <tbody>
                {activeMembers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      style={{ textAlign: 'center', padding: '2rem' }}
                    >
                      Aucun membre actif trouvé pour cette période
                    </td>
                  </tr>
                ) : (
                  activeMembers.map(member => {
                    const totalCompleted = member.currentsSuperBlock.reduce(
                      (sum, sb) => sum + (sb.totalCompletedChallenges || 0),
                      0
                    );
                    const coursesFollowed = member.currentsSuperBlock.filter(
                      sb =>
                        sb.totalCompletedChallenges &&
                        sb.totalCompletedChallenges > 0
                    ).length;

                    return (
                      <tr key={member.id}>
                        <td>{member.name || 'N/A'}</td>
                        <td>{member.email}</td>
                        <td>
                          {member.createAt
                            ? new Date(member.createAt).toLocaleDateString(
                                'fr-FR'
                              )
                            : 'N/A'}
                        </td>
                        <td>{totalCompleted}</td>
                        <td>{coursesFollowed}</td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

ShowActifMembers.displayName = 'ShowActifMembers';

export default connect(mapStateToProps, mapDispatchToProps)(ShowActifMembers);
