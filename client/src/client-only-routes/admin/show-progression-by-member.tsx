import React, { useState, useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { navigate } from '@reach/router';
import { createFlashMessage } from '../../components/Flash/redux';
import { Member } from '../../redux/prop-types';
import { getMembers } from './all-server-request-members';
import './admin-global.css';
import './modern-admin.css';

// Types pour les filtres de période
type PeriodFilter =
  | '30days'
  | '2months'
  | '3months'
  | '4months'
  | '6months'
  | '1year'
  | 'all';

const mapStateToProps = createSelector(() => ({}));

const mapDispatchToProps = {
  createFlashMessage
};

interface ShowProgressionByMemberProps {
  createFlashMessage: typeof createFlashMessage;
  period?: string;
  path?: string;
  location?: { search: string };
}

// Vérifier si un membre a au moins 50% de progression
const hasProgress50Plus = (member: Member): boolean => {
  return member.currentsSuperBlock.some(superBlock => {
    if (superBlock.totalChallenges && superBlock.totalCompletedChallenges) {
      const progress =
        (superBlock.totalCompletedChallenges / superBlock.totalChallenges) *
        100;
      return progress >= 50;
    }
    return false;
  });
};

export function ShowProgressionByMember(
  props: ShowProgressionByMemberProps
): JSX.Element {
  const { period, location } = props;
  const [allMembers, setAllMembers] = useState<Member[]>([]);

  // Extraire le paramètre period de l'URL si présent
  const urlParams = new URLSearchParams(location?.search || '');
  const periodFromUrl = urlParams.get('period') as PeriodFilter | null;
  const [selectedPeriod, setSelectedPeriod] = useState<PeriodFilter>(
    periodFromUrl || (period as PeriodFilter) || '30days'
  );

  // Filtrer les membres avec progression 50%+
  const membersWithProgress = useMemo(() => {
    return allMembers.filter(m => hasProgress50Plus(m));
  }, [allMembers]);

  useEffect(() => {
    const fetchAllMembers = async () => {
      try {
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
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setIsLoadingMember: () => {},
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setTotalPages: () => {},
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          setCurrentPage: () => {},
          totalPages: 1
        });
      } catch (error) {
        console.error('Error fetching members:', error);
        setAllMembers([]);
      }
    };
    void fetchAllMembers();
  }, []);

  // TEMPORAIRE : Toutes les restrictions d'accès désactivées pour le développement
  // TODO: Réactiver les restrictions avant le passage en staging

  // if (showLoading || isLoading) {
  //   return <Loader fullScreen={true} />;
  // }

  // DÉSACTIVÉ : Permettre l'accès même pendant le chargement
  // if (isLoading) {
  //   return <Loader fullScreen={true} />;
  // }

  // if (!isSignedIn) {
  //   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //   void navigate(`${apiLocation}/signin`);
  //   return <Loader fullScreen={true} />;
  // }

  // const isSuperAdmin = validator.equals(user.role, 'Super-admin');
  // const isAdmin = validator.equals(user.role, 'Admin');
  // const isJudahEmail = user.email === 'judah@kadea.co';

  // if (!isSuperAdmin && !isAdmin && !isJudahEmail) {
  //   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //   void navigate(`${homeLocation}`);
  //   return <Loader fullScreen={true} />;
  // }

  // Calculer le pourcentage de progression pour chaque membre
  const getMemberProgress = (member: Member): number => {
    let totalChallenges = 0;
    let totalCompleted = 0;

    member.currentsSuperBlock.forEach(superBlock => {
      if (superBlock.totalChallenges) {
        totalChallenges += superBlock.totalChallenges;
      }
      if (superBlock.totalCompletedChallenges) {
        totalCompleted += superBlock.totalCompletedChallenges;
      }
    });

    if (totalChallenges === 0) return 0;
    return Math.round((totalCompleted / totalChallenges) * 100);
  };

  return (
    <>
      <Helmet title={`Progression par Membre | Kadea Online`} />
      <div className='modern-admin-container'>
        <div className='modern-admin-header'>
          <button
            className='modern-btn modern-btn-secondary'
            onClick={() => {
              void navigate('/admin/all-members');
            }}
            style={{ marginBottom: '1rem' }}
          >
            ← Retour à la liste
          </button>
          <h1 className='modern-admin-title'>Progression 50%+</h1>
          <div className='modern-filter-buttons' style={{ marginTop: '1rem' }}>
            <select
              value={selectedPeriod}
              onChange={e => {
                const newPeriod = e.target.value as PeriodFilter;
                setSelectedPeriod(newPeriod);
                void navigate(
                  `/admin/all-members/progression-by-member?period=${newPeriod}`
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
            {membersWithProgress.length} membre(s) avec au moins 50% de
            progression sur {allMembers.length} total
          </p>

          <div className='modern-table-container'>
            <table className='modern-table'>
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Progression</th>
                  <th>Défis complétés</th>
                  <th>Cours avec 50%+</th>
                </tr>
              </thead>
              <tbody>
                {membersWithProgress.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      style={{ textAlign: 'center', padding: '2rem' }}
                    >
                      Aucun membre avec 50%+ de progression trouvé
                    </td>
                  </tr>
                ) : (
                  membersWithProgress.map(member => {
                    const progress = getMemberProgress(member);
                    const coursesWith50Plus = member.currentsSuperBlock.filter(
                      sb => {
                        if (sb.totalChallenges && sb.totalCompletedChallenges) {
                          const courseProgress =
                            (sb.totalCompletedChallenges / sb.totalChallenges) *
                            100;
                          return courseProgress >= 50;
                        }
                        return false;
                      }
                    ).length;

                    const totalCompleted = member.currentsSuperBlock.reduce(
                      (sum, sb) => sum + (sb.totalCompletedChallenges || 0),
                      0
                    );

                    return (
                      <tr key={member.id}>
                        <td>{member.name || 'N/A'}</td>
                        <td>{member.email}</td>
                        <td>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            <div
                              style={{
                                width: '100px',
                                height: '8px',
                                background: '#e0e0e0',
                                borderRadius: '4px',
                                overflow: 'hidden'
                              }}
                            >
                              <div
                                style={{
                                  width: `${progress}%`,
                                  height: '100%',
                                  background:
                                    progress >= 50 ? '#28a745' : '#ffc107',
                                  transition: 'width 0.3s ease'
                                }}
                              />
                            </div>
                            <span>{progress}%</span>
                          </div>
                        </td>
                        <td>{totalCompleted}</td>
                        <td>{coursesWith50Plus}</td>
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

ShowProgressionByMember.displayName = 'ShowProgressionByMember';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowProgressionByMember);
