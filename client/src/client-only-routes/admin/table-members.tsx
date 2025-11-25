import React, { useState, useEffect, useMemo, useCallback } from 'react';

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
import {
  getDatabaseResource,
  getKadeaCourses,
  getMoodleCourses,
  getAwsPath
} from '../../utils/ajax';
import { hardGoTo } from '../../redux';
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

// Types pour les filtres de cours
type CourseFilter = 'all' | 'kadea' | 'moodle' | 'aws';

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
  const [activeMembersPeriod, setActiveMembersPeriod] =
    useState<PeriodFilter>('30days');
  const [progressMembersPeriod, setProgressMembersPeriod] =
    useState<PeriodFilter>('30days');
  const [courseFilter, setCourseFilter] = useState<CourseFilter>('all');
  const [coursesData, setCoursesData] = useState<{
    kadea: number;
    moodle: number;
    aws: number;
    total: number;
  }>({ kadea: 0, moodle: 0, aws: 0, total: 0 });

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
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const groupMembersInput = event.target.value;
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
    try {
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
    } catch (error) {
      console.error('Error fetching members for export:', error);
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

  // Fonctions utilitaires pour les calculs de dates
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
        return new Date(0); // Date très ancienne pour inclure tout
      default:
        date.setDate(now.getDate() - 30);
    }
    return date;
  };

  // Vérifier si un membre est actif dans une période donnée
  const isMemberActiveInPeriod = useCallback(
    (member: Member, period: PeriodFilter): boolean => {
      const periodDate = getDateFromPeriod(period);
      const memberCreateDate = member.createAt
        ? new Date(member.createAt)
        : null;

      if (!memberCreateDate) return false;

      // Un membre est considéré actif s'il a complété au moins un défi
      const hasCompletedChallenges = member.currentsSuperBlock.some(
        superBlock =>
          superBlock.totalCompletedChallenges &&
          superBlock.totalCompletedChallenges > 0
      );

      // Si la période est "all", retourner tous les membres actifs
      if (period === 'all') {
        return hasCompletedChallenges;
      }

      // Sinon, vérifier si le membre a été créé dans la période
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

  // Vérifier si un membre a au moins 50% de progression
  const hasProgress50Plus = useCallback((member: Member): boolean => {
    return member.currentsSuperBlock.some(superBlock => {
      if (superBlock.totalChallenges && superBlock.totalCompletedChallenges) {
        const progress =
          (superBlock.totalCompletedChallenges / superBlock.totalChallenges) *
          100;
        return progress >= 50;
      }
      return false;
    });
  }, []);

  // Récupérer les cours
  const fetchCoursesData = async () => {
    try {
      const [kadeaCourses, moodleCourses, awsCourses] = await Promise.all([
        getKadeaCourses().catch(() => []),
        getMoodleCourses().catch(() => []),
        getAwsPath().catch(() => [])
      ]);

      const kadeaCount = Array.isArray(kadeaCourses) ? kadeaCourses.length : 0;
      const moodleCount = Array.isArray(moodleCourses)
        ? moodleCourses.length
        : 0;
      const awsCount = Array.isArray(awsCourses) ? awsCourses.length : 0;

      setCoursesData({
        kadea: kadeaCount,
        moodle: moodleCount,
        aws: awsCount,
        total: kadeaCount + moodleCount + awsCount
      });
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    void getAllMembersForExport();
    void fetchCoursesData();
  }, []);

  useEffect(() => {
    return;
  }, [selectedGroupMembers]);

  useEffect(() => {
    setSelectedGroupMembers([]);
    setSelectedGroupName('');
  }, [currentGroupMembers, updatingMembersGroup]);

  // Calculate statistics for indicator cards
  const stats = useMemo(() => {
    const totalMembers = countUsers || 0;

    // Carte 2: Membres actifs dans la période sélectionnée (tous cours confondus)
    const activeMembers =
      members?.filter(m => isMemberActiveInPeriod(m, activeMembersPeriod))
        .length || 0;

    // Carte 3: Membres avec au moins 50% de progression pour n'importe quel cours
    const membersWithProgress50Plus =
      members?.filter(m => hasProgress50Plus(m)).length || 0;

    // Carte 4: Total des cours selon le filtre
    let totalCourses = 0;
    switch (courseFilter) {
      case 'kadea':
        totalCourses = coursesData.kadea;
        break;
      case 'moodle':
        totalCourses = coursesData.moodle;
        break;
      case 'aws':
        totalCourses = coursesData.aws;
        break;
      case 'all':
      default:
        totalCourses = coursesData.total;
    }

    return {
      totalMembers,
      activeMembers,
      membersWithProgress50Plus,
      totalCourses,
      kadeaCourses: coursesData.kadea,
      moodleCourses: coursesData.moodle,
      awsCourses: coursesData.aws
    };
  }, [
    countUsers,
    members,
    activeMembersPeriod,
    courseFilter,
    coursesData,
    isMemberActiveInPeriod,
    hasProgress50Plus
  ]);

  // Navigation vers les pages de détails
  const handleCardClick = (cardType: string) => {
    const basePath = '/admin/members';
    switch (cardType) {
      case 'total':
        hardGoTo(`${basePath}/details/total`);
        break;
      case 'active':
        hardGoTo(`${basePath}/details/active?period=${activeMembersPeriod}`);
        break;
      case 'progress':
        hardGoTo(
          `${basePath}/details/progress?period=${progressMembersPeriod}`
        );
        break;
      case 'courses':
        hardGoTo(`${basePath}/details/courses?filter=${courseFilter}`);
        break;
      default:
        break;
    }
  };

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
              target: { value: 'all' },
              preventDefault: (): void => {
                // Prevent default behavior
              }
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
                  target: { value: group.userGroupName },
                  preventDefault: (): void => {
                    // Prevent default behavior
                  }
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
        {/* Carte 1: Total Membres */}
        <div
          className='modern-indicator-card blue'
          onClick={() => handleCardClick('total')}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCardClick('total');
            }
          }}
          role='button'
          tabIndex={0}
          style={{ cursor: 'pointer' }}
        >
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

        {/* Carte 2: Membres Actifs */}
        <div
          className='modern-indicator-card green'
          onClick={() => handleCardClick('active')}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCardClick('active');
            }
          }}
          role='button'
          tabIndex={0}
          style={{ cursor: 'pointer' }}
        >
          <div className='modern-indicator-header'>
            <div className='modern-indicator-title'>
              Membres Actifs
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='modern-indicator-icon'
              />
            </div>
            <div className='modern-indicator-filter'>
              <select
                value={activeMembersPeriod}
                onChange={e =>
                  setActiveMembersPeriod(e.target.value as PeriodFilter)
                }
                onClick={e => e.stopPropagation()}
                className='modern-period-filter'
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

        {/* Carte 3: Progrès 50%+ */}
        <div
          className='modern-indicator-card yellow'
          onClick={() => handleCardClick('progress')}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCardClick('progress');
            }
          }}
          role='button'
          tabIndex={0}
          style={{ cursor: 'pointer' }}
        >
          <div className='modern-indicator-header'>
            <div className='modern-indicator-title'>
              Progrès 50%+
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='modern-indicator-icon'
              />
            </div>
            <div className='modern-indicator-filter'>
              <select
                value={progressMembersPeriod}
                onChange={e =>
                  setProgressMembersPeriod(e.target.value as PeriodFilter)
                }
                onClick={e => e.stopPropagation()}
                className='modern-period-filter'
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
          <div className='modern-indicator-value'>
            {stats.membersWithProgress50Plus}
          </div>
          <div className='modern-indicator-change neutral'>
            <FontAwesomeIcon
              icon={faArrowRight}
              className='modern-indicator-change-arrow'
            />
            <span>Au moins 50% progression</span>
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

        {/* Carte 4: Total Cours */}
        <div
          className='modern-indicator-card pink'
          onClick={() => handleCardClick('courses')}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCardClick('courses');
            }
          }}
          role='button'
          tabIndex={0}
          style={{ cursor: 'pointer' }}
        >
          <div className='modern-indicator-header'>
            <div className='modern-indicator-title'>
              Total Cours
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='modern-indicator-icon'
              />
            </div>
            <div className='modern-indicator-filter'>
              <select
                value={courseFilter}
                onChange={e => setCourseFilter(e.target.value as CourseFilter)}
                onClick={e => e.stopPropagation()}
                className='modern-period-filter'
              >
                <option value='all'>Tous</option>
                <option value='kadea'>Kadea</option>
                <option value='moodle'>Moodle</option>
                <option value='aws'>AWS</option>
              </select>
            </div>
          </div>
          <div className='modern-indicator-value'>{stats.totalCourses}</div>
          <div className='modern-indicator-change positive'>
            <FontAwesomeIcon
              icon={faArrowUp}
              className='modern-indicator-change-arrow'
            />
            <span>
              {courseFilter === 'all' && (
                <>
                  K: {stats.kadeaCourses} | M: {stats.moodleCourses} | A:{' '}
                  {stats.awsCourses}
                </>
              )}
              {courseFilter === 'kadea' && 'Cours Kadea'}
              {courseFilter === 'moodle' && 'Cours Moodle'}
              {courseFilter === 'aws' && 'Cours AWS'}
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
                onChange={handleChangeGroupName}
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
                try {
                  if (membersForExpot && membersForExpot.length > 0) {
                    exportUsers(membersForExpot);
                  } else {
                    console.warn('Aucun membre à exporter');
                  }
                } catch (error) {
                  console.error('Error exporting members:', error);
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
