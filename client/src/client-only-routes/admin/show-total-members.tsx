import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { createFlashMessage } from '../../components/Flash/redux';
import { Member } from '../../redux/prop-types';
import { getMembers } from './all-server-request-members';
import './admin-global.css';
import './modern-admin.css';

const mapStateToProps = createSelector(() => ({}));

const mapDispatchToProps = {
  createFlashMessage
};

interface ShowTotalMembersProps {
  createFlashMessage: typeof createFlashMessage;
  path?: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function ShowTotalMembers(_props: ShowTotalMembersProps): JSX.Element {
  const [allMembers, setAllMembers] = useState<Member[]>([]);
  const [countUsers, setCountUsers] = useState<number>(0);

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
          setCountUsers,
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
        setCountUsers(0);
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

  return (
    <>
      <Helmet title={`Total Membres | Kadea Online`} />
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
          <h1 className='modern-admin-title'>Total Membres</h1>
        </div>

        <div className='modern-admin-content'>
          <p style={{ marginBottom: '1.5rem', color: '#6c757d' }}>
            {countUsers} membre(s) au total (tous groupes confondus)
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
                  <th>Groupe(s)</th>
                </tr>
              </thead>
              <tbody>
                {allMembers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      style={{ textAlign: 'center', padding: '2rem' }}
                    >
                      Aucun membre trouvé
                    </td>
                  </tr>
                ) : (
                  allMembers.map(member => {
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
                        <td>
                          {member.groups &&
                          Array.isArray(member.groups) &&
                          member.groups.length > 0
                            ? member.groups.join(', ')
                            : 'Aucun'}
                        </td>
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

ShowTotalMembers.displayName = 'ShowTotalMembers';

export default connect(mapStateToProps, mapDispatchToProps)(ShowTotalMembers);
