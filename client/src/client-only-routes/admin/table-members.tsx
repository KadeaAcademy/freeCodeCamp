import React, { useState, useEffect } from 'react';

import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faXmark,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faInfoCircle,
  faArrowUp,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

import { mkConfig, generateCsv, download } from 'export-to-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Member, Group, UserList } from '../../redux/prop-types';
import { getDatabaseResource } from '../../utils/ajax';
import './modern-admin.css';

interface TableMembersProps {
  members?: Member[];
  groups: Group[];
  allListMembers?: Member[];
  countUsers?: number;
  currentPage: number;
  totalPages: number;
  currentGroupMembers: string;
  showMemberDetails: (member: Member) => void;
  navigateToPage: (forwardOrBackward: boolean | number) => void;
  handleChangeGroup: (event: React.ChangeEvent<HTMLInputElement>) => void;

  searchMember: (memberName: string) => void;
  addUsers: (
    event: React.ChangeEvent<HTMLInputElement>,
    groupName: string,
    userId: string[]
  ) => void;
  removeUsers: (
    event: React.ChangeEvent<HTMLInputElement>,
    userIds: string[],
    groupName: string
  ) => void;
  updatingMembersGroup?: { isAddedStatus: boolean; message: string };

  isLoadingMemberState: boolean;
}

export function TableMembers(props: TableMembersProps): JSX.Element {
  const {
    members,
    countUsers,
    groups,
    navigateToPage,
    currentPage,
    totalPages,
    currentGroupMembers,
    showMemberDetails,
    handleChangeGroup,
    searchMember,
    addUsers,
    removeUsers,
    updatingMembersGroup,

    isLoadingMemberState
  } = props;

  const [memberName, setMemberName] = useState<string>('');
  const [selectedGroupMembers, setSelectedGroupMembers] = useState<string[]>(
    []
  );

  const [selectedGroupName, setSelectedGroupName] = useState<string>('');

  const handleSearchMember = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchMember(memberName);
  };

  const [membersForExpot, setMembersForExpot] = useState<Member[]>();

  const handleClearSearchMemberInput = () => {
    setMemberName('');
    searchMember('');
  };

  const handleChangeSearchMemberInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const memberNameInputValue = event.target.value;
    setMemberName(memberNameInputValue);
  };

  const handleChangeGroupName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const groupMembersInput = event.target.value.slice();
    setSelectedGroupName(groupMembersInput);
  };
  const handleSelectedGroupMembers = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const isMemberCheked = selectedGroupMembers.find(
      selectedGroupMemberId =>
        selectedGroupMemberId == event.target.value.slice()
    );
    if (isMemberCheked) {
      const selectedGroupMembersFiltered = selectedGroupMembers.filter(
        selectedGroupMember => {
          return selectedGroupMember != event.target.value.slice();
        }
      );
      setSelectedGroupMembers([...selectedGroupMembersFiltered]);
    } else {
      setSelectedGroupMembers([
        ...selectedGroupMembers,
        event.target.value.slice()
      ]);
    }
  };

  const isMemberCheked = (memberId: string): boolean => {
    const isMemberCheked = selectedGroupMembers.find(
      selectedGroupMemberId => selectedGroupMemberId == memberId
    );
    return isMemberCheked ? true : false;
  };

  const getAllMembersForExport = async () => {
    const memberList = await getDatabaseResource<UserList>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/all-users?limit=100000`
    );
    if (memberList != null && !('error' in memberList)) {
      const inverseMemberList = memberList.userList.reverse();

      setMembersForExpot([...inverseMemberList]);
    } else {
      setMembersForExpot([]);
    }
  };

  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const exportUsers = (members: Member[]) => {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const mockData = members.map(member => {
      return {
        Email: member.email,
        Nom: member.name,
        Telephone: member.phone,
        Whatsapp: member.whatsapp,
        Genre: member.gender,
        Ville: member.location,
        DateInscription:
          new Date(member.createAt) > new Date(new Date().getTime() - 120000)
            ? ''
            : dateFormat(member.createAt),
        coursSuivis:
          member.currentsSuperBlock.length > 0
            ? member.currentsSuperBlock
                .map(currentSuperBlock => {
                  return currentSuperBlock.superBlockName;
                })
                .join(',')
            : 'Aucun'
      };
    });

    const csv = generateCsv(csvConfig)(mockData);
    download(csvConfig)(csv);
  };

  useEffect(() => {
    void getAllMembersForExport();
  }, []);

  useEffect(() => {
    return;
  }, [selectedGroupMembers]);

  useEffect(() => {
    setSelectedGroupMembers([]);
    setSelectedGroupName('');
  }, [currentGroupMembers, updatingMembersGroup]);

  // Calculate statistics for indicator cards
  const calculateStats = () => {
    const totalMembers = countUsers || 0;
    const activeMembers =
      members?.filter(m => {
        const responsiveWebDesignBlock = m.currentsSuperBlock.find(
          sb => sb.superBlockDashedName === 'responsive-web-design'
        );
        return (
          responsiveWebDesignBlock &&
          responsiveWebDesignBlock.totalCompletedChallenges &&
          responsiveWebDesignBlock.totalCompletedChallenges > 0
        );
      }).length || 0;

    const avgProgress =
      members?.reduce((acc, m) => {
        const responsiveWebDesignBlock = m.currentsSuperBlock.find(
          sb => sb.superBlockDashedName === 'responsive-web-design'
        );
        if (
          responsiveWebDesignBlock &&
          responsiveWebDesignBlock.totalChallenges &&
          responsiveWebDesignBlock.totalCompletedChallenges
        ) {
          const progress = Math.floor(
            (responsiveWebDesignBlock.totalCompletedChallenges /
              responsiveWebDesignBlock.totalChallenges) *
              100
          );
          return acc + progress;
        }
        return acc;
      }, 0) || 0;

    const avgProgressPercentage =
      members && members.length > 0
        ? Math.floor(avgProgress / members.length)
        : 0;

    const membersWithGroups =
      members?.filter(m => m.groups && m.groups.length > 0).length || 0;
    const membersWithoutGroups = totalMembers - membersWithGroups;

    return {
      totalMembers,
      activeMembers,
      avgProgressPercentage,
      membersWithGroups,
      membersWithoutGroups
    };
  };

  const stats = calculateStats();

  return (
    <div className='modern-admin-container'>
      {/* Header Section */}
      <div className='modern-admin-header'>
        <h1 className='modern-admin-title'>Membres</h1>
        <p className='modern-admin-subtitle'>
          Gérez tous les membres de la plateforme
        </p>
      </div>

      {/* Filter Buttons */}
      <div className='modern-filter-buttons'>
        <button
          className={`modern-filter-btn ${
            currentGroupMembers === 'all' ? 'active' : ''
          }`}
          onClick={() => {
            const event = {
              target: { value: 'all' }
            } as React.ChangeEvent<HTMLInputElement>;
            handleChangeGroup(event);
          }}
        >
          Tous les membres
        </button>
        {groups
          .filter(g => g.userGroupName !== 'all')
          .map(group => (
            <button
              key={group.userGroupName}
              className={`modern-filter-btn ${
                currentGroupMembers === group.userGroupName ? 'active' : ''
              }`}
              onClick={() => {
                const event = {
                  target: { value: group.userGroupName }
                } as React.ChangeEvent<HTMLInputElement>;
                handleChangeGroup(event);
              }}
            >
              {group.userGroupName}
            </button>
          ))}
      </div>

      {/* Indicator Cards */}
      <div className='modern-indicators-grid'>
        <div className='modern-indicator-card blue'>
          <div className='modern-indicator-header'>
            <div className='modern-indicator-title'>
              Total Membres
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='modern-indicator-icon'
              />
            </div>
          </div>
          <div className='modern-indicator-value'>{stats.totalMembers}</div>
          <div className='modern-indicator-change neutral'>
            <span>Tous les groupes</span>
          </div>
          <div className='modern-indicator-graph'>
            {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
              <div
                key={i}
                className='modern-indicator-graph-bar'
                style={{
                  height: `${Math.random() * 60 + 20}%`,
                  background: 'rgba(26, 26, 26, 0.2)'
                }}
              />
            ))}
          </div>
        </div>

        <div className='modern-indicator-card green'>
          <div className='modern-indicator-header'>
            <div className='modern-indicator-title'>
              Membres Actifs
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='modern-indicator-icon'
              />
            </div>
          </div>
          <div className='modern-indicator-value'>{stats.activeMembers}</div>
          <div className='modern-indicator-change positive'>
            <FontAwesomeIcon
              icon={faArrowUp}
              className='modern-indicator-change-arrow'
            />
            <span>
              {stats.totalMembers > 0
                ? Math.floor((stats.activeMembers / stats.totalMembers) * 100)
                : 0}
              % du total
            </span>
          </div>
          <div className='modern-indicator-graph'>
            {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
              <div
                key={i}
                className='modern-indicator-graph-bar'
                style={{
                  height: `${Math.random() * 60 + 20}%`,
                  background: 'rgba(25, 135, 84, 0.3)'
                }}
              />
            ))}
          </div>
        </div>

        <div className='modern-indicator-card yellow'>
          <div className='modern-indicator-header'>
            <div className='modern-indicator-title'>
              Progrès Moyen
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='modern-indicator-icon'
              />
            </div>
          </div>
          <div className='modern-indicator-value'>
            {stats.avgProgressPercentage}%
          </div>
          <div className='modern-indicator-change neutral'>
            <FontAwesomeIcon
              icon={faArrowRight}
              className='modern-indicator-change-arrow'
            />
            <span>Responsive Web Design</span>
          </div>
          <div className='modern-indicator-graph'>
            {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
              <div
                key={i}
                className='modern-indicator-graph-bar'
                style={{
                  height: `${Math.random() * 60 + 20}%`,
                  background: 'rgba(255, 193, 7, 0.3)'
                }}
              />
            ))}
          </div>
        </div>

        <div className='modern-indicator-card pink'>
          <div className='modern-indicator-header'>
            <div className='modern-indicator-title'>
              Avec Groupe
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='modern-indicator-icon'
              />
            </div>
          </div>
          <div className='modern-indicator-value'>
            {stats.membersWithGroups}
          </div>
          <div className='modern-indicator-change positive'>
            <FontAwesomeIcon
              icon={faArrowUp}
              className='modern-indicator-change-arrow'
            />
            <span>
              {stats.totalMembers > 0
                ? Math.floor(
                    (stats.membersWithGroups / stats.totalMembers) * 100
                  )
                : 0}
              % assignés
            </span>
          </div>
          <div className='modern-indicator-graph'>
            {[1, 2, 3, 4, 5, 6, 7].map((_, i) => (
              <div
                key={i}
                className='modern-indicator-graph-bar'
                style={{
                  height: `${Math.random() * 60 + 20}%`,
                  background: 'rgba(220, 53, 69, 0.2)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Search and Filter Section */}
      <div className='modern-search-filter-section'>
        <div className='modern-search-filter-grid'>
          <div className='modern-form-group'>
            <label htmlFor='member-search' className='modern-form-label'>
              Rechercher un membre
            </label>
            <form
              onSubmit={handleSearchMember}
              className='modern-search-input-group'
            >
              <input
                id='member-search'
                type='search'
                placeholder='Nom ou email...'
                className='modern-form-input modern-search-input'
                value={memberName}
                onChange={handleChangeSearchMemberInput}
              />
              <button type='submit' className='modern-btn modern-btn-primary'>
                <FontAwesomeIcon icon={faSearch} />
              </button>
              {memberName && (
                <button
                  type='button'
                  className='modern-btn modern-btn-secondary'
                  onClick={handleClearSearchMemberInput}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              )}
            </form>
          </div>

          <div className='modern-form-group'>
            <label htmlFor='group-select' className='modern-form-label'>
              Gestion des groupes
            </label>
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexDirection: 'column'
              }}
            >
              <select
                id='group-select'
                className='modern-form-select'
                onChange={e => {
                  const event = {
                    target: { value: e.target.value }
                  } as React.ChangeEvent<HTMLInputElement>;
                  handleChangeGroupName(event);
                }}
                value={selectedGroupName}
                disabled={selectedGroupMembers.length === 0}
              >
                <option value=''>Sélectionnez un groupe</option>
                {groups
                  .filter(g => g.userGroupName !== 'all')
                  .map(group => (
                    <option
                      key={group.userGroupName}
                      value={group.userGroupName}
                    >
                      {group.userGroupName}
                    </option>
                  ))}
              </select>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  className='modern-btn modern-btn-success'
                  disabled={
                    selectedGroupMembers.length === 0 ||
                    selectedGroupName === '' ||
                    currentGroupMembers === selectedGroupName
                  }
                  onClick={() => {
                    const inputEvent = {
                      target: { value: '' },
                      preventDefault: (): void => {
                        // Prevent default behavior
                      }
                    } as React.ChangeEvent<HTMLInputElement>;
                    addUsers(
                      inputEvent,
                      selectedGroupName,
                      selectedGroupMembers
                    );
                  }}
                >
                  Ajouter
                </button>
                <button
                  className='modern-btn modern-btn-danger'
                  disabled={
                    selectedGroupMembers.length === 0 ||
                    groups.length <= 1 ||
                    currentGroupMembers === 'all'
                  }
                  onClick={() => {
                    const inputEvent = {
                      target: { value: '' },
                      preventDefault: (): void => {
                        // Prevent default behavior
                      }
                    } as React.ChangeEvent<HTMLInputElement>;
                    removeUsers(
                      inputEvent,
                      selectedGroupMembers,
                      currentGroupMembers
                    );
                  }}
                >
                  Retirer
                </button>
              </div>
              {updatingMembersGroup?.message && (
                <div
                  className={
                    updatingMembersGroup.isAddedStatus
                      ? 'text-success'
                      : 'text-error'
                  }
                  style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}
                >
                  {updatingMembersGroup.message}
                </div>
              )}
            </div>
          </div>

          <div className='modern-form-group'>
            <label htmlFor='export-btn' className='modern-form-label'>
              Export
            </label>
            <button
              id='export-btn'
              className='modern-btn modern-btn-primary'
              disabled={!membersForExpot || membersForExpot.length === 0}
              onClick={() => {
                if (membersForExpot) {
                  exportUsers(membersForExpot);
                }
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
              Exporter les utilisateurs
            </button>
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className='modern-table-container'>
        {isLoadingMemberState ? (
          <div className='modern-loading'>
            <p>Chargement des utilisateurs en cours...</p>
          </div>
        ) : members && members.length > 0 ? (
          <>
            <table className='modern-table'>
              <thead>
                <tr>
                  <th>
                    <input
                      type='checkbox'
                      onChange={e => {
                        if (e.target.checked) {
                          setSelectedGroupMembers(members.map(m => m.id));
                        } else {
                          setSelectedGroupMembers([]);
                        }
                      }}
                      checked={
                        selectedGroupMembers.length === members.length &&
                        members.length > 0
                      }
                    />
                  </th>
                  <th>Email</th>
                  <th>Nom</th>
                  <th>Progrès RWD</th>
                  <th>Date d&apos;inscription</th>
                  <th>Groupe(s)</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member, index) => {
                  const responsiveWebDesignBlock =
                    member.currentsSuperBlock.find(
                      superBlock =>
                        superBlock.superBlockDashedName ===
                        'responsive-web-design'
                    );

                  const percentageCompleted: number =
                    responsiveWebDesignBlock &&
                    responsiveWebDesignBlock.totalCompletedChallenges &&
                    responsiveWebDesignBlock.totalChallenges
                      ? Math.floor(
                          (responsiveWebDesignBlock.totalCompletedChallenges /
                            responsiveWebDesignBlock.totalChallenges) *
                            100
                        )
                      : 0;

                  return (
                    <tr key={index}>
                      <td>
                        <input
                          type='checkbox'
                          checked={isMemberCheked(member.id)}
                          value={member.id}
                          onChange={handleSelectedGroupMembers}
                        />
                      </td>
                      <td>{member.email}</td>
                      <td>{member.name || 'N/A'}</td>
                      <td>
                        <div className='modern-progress-bar'>
                          <div
                            className='modern-progress-fill'
                            style={{ width: `${percentageCompleted}%` }}
                          >
                            {percentageCompleted > 10
                              ? `${percentageCompleted}%`
                              : ''}
                          </div>
                        </div>
                      </td>
                      <td>
                        {member.createAt ? dateFormat(member.createAt) : 'N/A'}
                      </td>
                      <td>
                        {member.groups && member.groups.length > 0 ? (
                          <div
                            style={{
                              display: 'flex',
                              gap: '0.5rem',
                              flexWrap: 'wrap'
                            }}
                          >
                            {member.groups.map((group, idx) => (
                              <span
                                key={idx}
                                className='modern-badge modern-badge-primary'
                              >
                                {group}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className='modern-badge'>Aucun</span>
                        )}
                      </td>
                      <td>
                        <button
                          className='modern-action-btn modern-action-btn-link'
                          onClick={() => showMemberDetails(member)}
                        >
                          Voir plus
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination */}
            <div className='modern-pagination'>
              <button
                className='modern-pagination-btn'
                disabled={currentPage === 1}
                onClick={() => navigateToPage(1)}
              >
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
              </button>
              <button
                className='modern-pagination-btn'
                disabled={currentPage === 1}
                onClick={() => navigateToPage(currentPage - 1)}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <span className='modern-pagination-info'>
                {currentPage} sur {totalPages}
              </span>
              <button
                className='modern-pagination-btn'
                disabled={currentPage === totalPages}
                onClick={() => navigateToPage(currentPage + 1)}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <button
                className='modern-pagination-btn'
                disabled={currentPage === totalPages}
                onClick={() => navigateToPage(totalPages)}
              >
                <FontAwesomeIcon icon={faAngleDoubleRight} />
              </button>
            </div>
          </>
        ) : (
          <div className='modern-empty-state'>
            <p>Aucun utilisateur trouvé</p>
          </div>
        )}
      </div>
    </div>
  );
}
