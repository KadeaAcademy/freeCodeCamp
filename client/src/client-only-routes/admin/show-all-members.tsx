import {
  Row,
  Col,
  Table,
  FormGroup,
  FormControl,
  HelpBlock,
  Button
  // InputGroup
} from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faSearch,
  faCircleInfo
} from '@fortawesome/free-solid-svg-icons';
import validator from 'validator';
import {
  addUserInRole,
  getDatabaseResource,
  getExternalResource,
  getAwsCourses
} from '../../utils/ajax';
import envData from '../../../../config/env.json';
import { createFlashMessage } from '../../components/Flash/redux';
import { Loader, Spacer } from '../../components/helpers';
import { CourseProgressBar } from '../../components/AdminComponents/course-progress-bar';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../../redux';

import { CurrentSuperBlock, User } from '../../redux/prop-types';
import './admin-global.css';
import './admin-dashboard.css';
const { apiLocation, homeLocation, moodleApiBaseUrl, moodleApiToken } = envData;

// TODO: update types for actions
interface ShowAllMembersProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

type Member = {
  id: string;
  email: string;
  name: string;
  gender: string;
  currentsSuperBlock: CurrentSuperBlock[];
  groups: string[];
  createAt: string;
  phone: string;
  whatsapp: string;
  location: string;
  role: string;
};

type UserList = {
  userList: Member[];
  totalPages: number;
  currentPage: number;
  countUsers: number;
};
type Group = {
  id: string;
  userGroupName: string;
};
type GroupList = {
  userGroupList: Group[];
  totalPages: number;
  currentPage: number;
  countUsers: number;
};

export function ShowAllMembers(props: ShowAllMembersProps): JSX.Element {
  const { isSignedIn, navigate, showLoading, user } = props;

  const [members, setMembers] = useState<Member[]>();
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [countUsers, setCountUsers] = useState<number>();
  const [memberNameToSearch, setMemberNameToSearch] = useState<string>('');
  const [groupMembers, setGroupMembers] = useState<string>('all');
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoadingMember, setIsLoadingMember] = useState<boolean>(false);
  // const data={
  //   id:"64d39b958b1fd17adc0e8f28",
  //   userGroup:"C3"
  // }

  const getMembers = async () => {
    setIsLoadingMember(true);
    const memberList = await getDatabaseResource<UserList>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/all-users?page=${currentPage}&limit=10&classRoom=${groupMembers}&memberName=${memberNameToSearch}`
    );
    if (memberList != null && !('error' in memberList)) {
      setMembers(memberList.userList);
      setCountUsers(memberList.countUsers);
      setIsLoadingMember(false);

      if (totalPages == 1) {
        setTotalPages(Number(memberList.totalPages));
        setCurrentPage(Number(memberList.currentPage));
      }
    } else {
      setMembers([]);
      setCountUsers(0);
      setIsLoadingMember(false);
    }
  };

  const getAllGroups = async () => {
    const allGroups = await getDatabaseResource<GroupList>(
      `/all-users-group?page=${currentPage}`
    );
    if (allGroups?.userGroupList != null) {
      setGroups([
        { id: '0', userGroupName: 'all' },
        ...allGroups.userGroupList
      ]);
    } else {
      setGroups([{ id: '0', userGroupName: 'all' }]);
    }
  };

  const showMemberDetails = (member: Member | null) => {
    setSelectedMember(member);
  };

  const returnToTable = () => {
    setSelectedMember(null);
  };

  const navigateToPage = (forwardOrBackward: boolean) => {
    if (forwardOrBackward) {
      if (currentPage < totalPages) {
        setCurrentPage(Number(currentPage + 1));
      }
    } else {
      if (currentPage > 1) {
        setCurrentPage(Number(currentPage - 1));
      }
    }
  };

  const handleChangeGroupMembers = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const groupMembersInput = event.target.value.slice();
    setGroupMembers(groupMembersInput);
    setCurrentPage(1);
    setTotalPages(1);
  };

  const searchMember = (memberNameInput = '') => {
    const memberName = memberNameInput;
    setMemberNameToSearch(memberName);
  };
  // const handleChangeGroupName = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ): void => {
  //   event.preventDefault();
  //   const groupMembersInput = event.target.value.slice();
  //   setSelectedGroupName(groupMembersInput);

  // };

  useEffect(() => {
    void getAllGroups();

    void getMembers();
    return () => {
      setMembers([]); // cleanup useEffect to perform a React state update
      // setGroupMembers('all');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, groupMembers, memberNameToSearch]);

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  if (!validator.equals(user.role, 'Super-admin')) {
    if (!validator.equals(user.role, 'Admin')) {
      navigate(`${homeLocation}`);
      return <Loader fullScreen={true} />;
    }
  }

  return (
    <>
      <Helmet title={`Tableau de bord - Membres | Kadea Online`} />

      <div className=''>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className=''>
              <h1
                className='big-subheading'
                style={{ overflowWrap: 'break-word', marginTop: '2rem' }}
              >
                {!selectedMember ? 'Membres' : 'Détail membre'}
              </h1>
            </div>
          </Col>
        </Row>
        <Spacer size={1} />
        {!selectedMember ? (
          <TableMembers
            members={members}
            groups={groups}
            countUsers={countUsers}
            currentPage={currentPage}
            totalPages={totalPages}
            navigateToPage={navigateToPage}
            showMemberDetails={showMemberDetails}
            handleChangeGroup={handleChangeGroupMembers}
            searchMember={searchMember}
            currentGroupMembers={groupMembers}
            isLoadingMemberState={isLoadingMember}
          />
        ) : (
          <DetailMember member={selectedMember} returnToTable={returnToTable} />
        )}
        <Spacer size={1} />
      </div>
    </>
  );
}

interface TableMembersProps {
  members?: Member[];
  groups: Group[];
  countUsers?: number;
  currentPage: number;
  totalPages: number;
  currentGroupMembers: string;
  showMemberDetails: (member: Member) => void;
  navigateToPage: (forwardOrBackward: boolean) => void;
  handleChangeGroup: (event: React.ChangeEvent<HTMLInputElement>) => void;

  searchMember: (memberName: string) => void;

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
    isLoadingMemberState
  } = props;

  const [memberName, setMemberName] = useState<string>('');

  const [timeRange, setTimeRange] = useState<'4weeks' | 'alltime'>('4weeks');
  const [courseSource, setCourseSource] = useState<
    'all' | 'kadea' | 'moodle' | 'aws'
  >('all');
  // groupSelectRef removed: the inline chooser/select handles selection now
  const [rolesList, setRolesList] = useState<UserRole[]>([]);
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const [sortOption, setSortOption] = useState<
    | 'name-asc'
    | 'name-desc'
    | 'role-asc'
    | 'role-desc'
    | 'date-asc'
    | 'date-desc'
  >('name-asc');

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      // Parse CSV/Excel file
      const text = await file.text();
      const lines = text.split('\n');

      if (lines.length < 2) {
        console.error('File is empty or has no data');
        return;
      }

      // Parse header row
      const header = lines[0].split(',').map(h => h.trim().toLowerCase());
      const emailIndex = header.indexOf('email');

      if (emailIndex === -1) {
        console.error('Email column is required');
        return;
      }

      // Parse data rows
      const userIds: string[] = [];
      const userRole = 'user';

      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const values = line.split(',').map(v => v.trim());
        const email = values[emailIndex];

        if (!email || !validator.isEmail(email)) continue;

        userIds.push(email);
      }

      // Send users to server
      if (userIds.length > 0) {
        const data = {
          ids: userIds,
          userRole: userRole
        };
        try {
          const res = await addUserInRole(data);
          if (res && res.isAdded) {
            searchMember('');
          }
        } catch (err) {
          console.error('Error adding users:', err);
        }
      }
    } catch (err) {
      console.error('Error processing file:', err);
    }

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSearchMember = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchMember(memberName);
  };

  const [membersForExpot, setMembersForExpot] = useState<Member[]>();
  const [dashboardStats, setDashboardStats] = useState<{
    totalUsers: number;
    monthMax: { month: string; count: number } | null;
    monthMin: { month: string; count: number } | null;
    usersWithAtLeastOneCourse: number;
    usersWithProgressGE50: number;
    totalCourses: number;
    series?: {
      totalUsers: number[];
      usersWithAtLeastOneCourse: number[];
      usersWithProgressGE50: number[];
      totalCourses: number[];
    };
  }>({
    totalUsers: 0,
    monthMax: null,
    monthMin: null,
    usersWithAtLeastOneCourse: 0,
    usersWithProgressGE50: 0,
    totalCourses: 0
  });

  const [dashboardTrend, setDashboardTrend] = useState<{
    totalUsers?: { dir: 'up' | 'down' | 'flat'; pct: number };
    usersWithAtLeastOneCourse?: { dir: 'up' | 'down' | 'flat'; pct: number };
    usersWithProgressGE50?: { dir: 'up' | 'down' | 'flat'; pct: number };
    totalCourses?: { dir: 'up' | 'down' | 'flat'; pct: number };
  }>({});

  type Trend = { dir: 'up' | 'down' | 'flat'; pct: number };

  const handleChangeSearchMemberInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const memberNameInputValue = event.target.value;
    setMemberName(memberNameInputValue);
    searchMember(memberNameInputValue);
  };

  const getAllMembersForExport = async () => {
    const memberList = await getDatabaseResource<UserList>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/all-users?limit=100000`
    );
    if (memberList != null && !('error' in memberList)) {
      setMembersForExpot(memberList.userList);
    } else {
      setMembersForExpot([]);
    }
  };
  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  useEffect(() => {
    void getAllMembersForExport();
    // fetch AWS/Raven courses catalog once and store count for dashboard totals
    void (async () => {
      try {
        const awsc = await getAwsCourses();
        if (awsc && Array.isArray(awsc)) {
          setDashboardStats(prev => ({
            ...prev,
            totalCourses: (prev.totalCourses || 0) + awsc.length
          }));
        }
      } catch (e) {
        // ignore failures; this is best-effort
      }
    })();
    // preload roles when the component mounts so chooser opens instantly
    void (async () => {
      try {
        const rolesResp = await getDatabaseResource<RoleList>(
          `/all-users-roles?page=1&limit=100`
        );
        if (rolesResp && rolesResp.userRoleList) {
          setRolesList(rolesResp.userRoleList);
        }
      } catch (e) {
        // ignore
      }
    })();
  }, []);

  useEffect(() => {
    if (!membersForExpot || membersForExpot.length === 0) {
      setDashboardStats({
        totalUsers: 0,
        monthMax: null,
        monthMin: null,
        usersWithAtLeastOneCourse: 0,
        usersWithProgressGE50: 0,
        totalCourses: 0
      });
      return;
    }

    // Apply UI filters: group, course source and time range
    const baseMembers = membersForExpot || [];
    const filteredMembers = baseMembers.filter(member => {
      // Group filter
      if (currentGroupMembers && currentGroupMembers !== 'all') {
        if (!member.groups || !member.groups.includes(currentGroupMembers)) {
          return false;
        }
      }

      // Course source filter - heuristic:
      // - 'kadea' => has local currentsSuperBlock data
      // - 'moodle' or 'aws' => treated as 'external' (no local currentsSuperBlock)
      if (courseSource === 'kadea') {
        if (
          !member.currentsSuperBlock ||
          member.currentsSuperBlock.length === 0
        )
          return false;
      }
      if (courseSource === 'moodle' || courseSource === 'aws') {
        if (member.currentsSuperBlock && member.currentsSuperBlock.length > 0)
          return false;
      }

      // Time range filter for membership creation: if '4weeks', only include
      // members created within the last 4 weeks for the purposes of the KPI set.
      if (timeRange === '4weeks') {
        if (!member.createAt) return false;
        const created = new Date(member.createAt);
        if (isNaN(created.getTime())) return false;
        const fourWeeksAgo = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000);
        if (created.getTime() < fourWeeksAgo.getTime()) return false;
      }

      return true;
    });

    const nowYear = new Date().getFullYear();
    const monthCounts: Record<string, number> = {};
    const courseSet = new Set<string>();

    let usersWithAtLeastOneCourse = 0;
    let usersWithProgressGE50 = 0;

    filteredMembers.forEach(member => {
      // Count by month for the current year first; fallback to any year if none
      if (member.createAt) {
        const d = new Date(member.createAt);
        if (!Number.isNaN(d.getTime())) {
          if (d.getFullYear() === nowYear) {
            const month = d.toLocaleString(undefined, {
              month: 'short',
              year: 'numeric'
            });
            monthCounts[month] = (monthCounts[month] || 0) + 1;
          }
        }
      }

      if (member.currentsSuperBlock && member.currentsSuperBlock.length > 0) {
        usersWithAtLeastOneCourse += 1;
        member.currentsSuperBlock.forEach(sb => {
          if (sb.superBlockName) courseSet.add(sb.superBlockName);
          if (
            sb.totalChallenges &&
            sb.totalCompletedChallenges &&
            sb.totalChallenges > 0
          ) {
            const pct = sb.totalCompletedChallenges / sb.totalChallenges;
            if (pct >= 0.5) {
              usersWithProgressGE50 += 1;
              // break out: count member once only
              return;
            }
          }
        });
      }
    });

    // If no counts for current year, compute overall month counts from filtered set
    if (Object.keys(monthCounts).length === 0) {
      filteredMembers.forEach(member => {
        if (member.createAt) {
          const d = new Date(member.createAt);
          if (!Number.isNaN(d.getTime())) {
            const month = d.toLocaleString(undefined, {
              month: 'short',
              year: 'numeric'
            });
            monthCounts[month] = (monthCounts[month] || 0) + 1;
          }
        }
      });
    }

    // Determine max/min months
    let monthMax: { month: string; count: number } | null = null;
    let monthMin: { month: string; count: number } | null = null;
    Object.keys(monthCounts).forEach(m => {
      const c = monthCounts[m];
      if (!monthMax || c > monthMax.count) monthMax = { month: m, count: c };
      if (!monthMin || c < monthMin.count) monthMin = { month: m, count: c };
    });

    setDashboardStats({
      totalUsers: membersForExpot.length,
      monthMax,
      monthMin,
      usersWithAtLeastOneCourse,
      usersWithProgressGE50,
      totalCourses: courseSet.size
    });

    // compute last 4 weeks series (cumulative snapshot at week end)
    const now = new Date();
    const seriesWeeks: Date[] = [];
    for (let i = 3; i >= 0; i--) {
      const d = new Date(now.getTime() - i * 7 * 24 * 60 * 60 * 1000);
      seriesWeeks.push(d);
    }

    const totalUsersSeries: number[] = [];
    const usersWithAtLeastOneCourseSeries: number[] = [];
    const usersWithProgressGE50Series: number[] = [];
    const totalCoursesSeries: number[] = [];

    seriesWeeks.forEach(weekEnd => {
      let total = 0;
      const courseSetWeek = new Set<string>();
      let usersWithCourse = 0;
      let usersWithProg50 = 0;

      // iterate over the filtered members only
      filteredMembers.forEach(member => {
        if (!member.createAt) return;
        const d = new Date(member.createAt);
        if (isNaN(d.getTime())) return;
        if (d.getTime() <= weekEnd.getTime()) {
          total += 1;
          if (
            member.currentsSuperBlock &&
            member.currentsSuperBlock.length > 0
          ) {
            usersWithCourse += 1;
            member.currentsSuperBlock.forEach(sb => {
              if (sb.superBlockName) courseSetWeek.add(sb.superBlockName);
              if (
                sb.totalChallenges &&
                sb.totalCompletedChallenges &&
                sb.totalChallenges > 0
              ) {
                const pct = sb.totalCompletedChallenges / sb.totalChallenges;
                if (pct >= 0.5) usersWithProg50 += 1;
              }
            });
          }
        }
      });

      totalUsersSeries.push(total);
      usersWithAtLeastOneCourseSeries.push(usersWithCourse);
      usersWithProgressGE50Series.push(usersWithProg50);
      // include any AWS/Raven courses as part of the total courses metric for the week
      // (best-effort: AWS courses are global, so we add their count to the last week's bucket)
      totalCoursesSeries.push(courseSetWeek.size);
    });

    setDashboardStats(prev => ({
      ...prev,
      series: {
        totalUsers: totalUsersSeries,
        usersWithAtLeastOneCourse: usersWithAtLeastOneCourseSeries,
        usersWithProgressGE50: usersWithProgressGE50Series,
        totalCourses: totalCoursesSeries
      }
    }));

    const computeTrend = (arr: number[]): Trend => {
      if (arr.length < 2) return { dir: 'flat', pct: 0 };
      const last = arr[arr.length - 1];
      const prev = arr[arr.length - 2];
      if (prev === 0) {
        return { dir: last > 0 ? 'up' : 'flat', pct: last === 0 ? 0 : 100 };
      }
      const pct = Math.round(((last - prev) / prev) * 100);
      if (last > prev) return { dir: 'up', pct };
      if (last < prev) return { dir: 'down', pct };
      return { dir: 'flat', pct: 0 };
    };

    setDashboardTrend({
      totalUsers: computeTrend(totalUsersSeries),
      usersWithAtLeastOneCourse: computeTrend(usersWithAtLeastOneCourseSeries),
      usersWithProgressGE50: computeTrend(usersWithProgressGE50Series),
      totalCourses: computeTrend(totalCoursesSeries)
    });
  }, [membersForExpot, timeRange, courseSource, currentGroupMembers]);

  const renderSparkline = (data: number[] | undefined, color = '#10b981') => {
    if (!data || data.length === 0) return null;
    const w = 80;
    const h = 28;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const points = data.map((v, i) => {
      const x = (i / (data.length - 1)) * w;
      const y = h - ((v - min) / range) * h;
      return `${x},${y}`;
    });
    const path = `M${points.join(' L ')}`;
    return (
      <svg width={w} height={h} className='sparkline' aria-hidden='true'>
        <path
          d={path}
          fill='none'
          stroke={color}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  };

  const renderTrendArrow = (
    trend: { dir: 'up' | 'down' | 'flat'; pct: number } | undefined
  ) => {
    if (!trend) return null;
    const { dir, pct } = trend;
    let color = '#f97316';
    if (dir === 'up') color = '#10b981';
    if (dir === 'down') color = '#ef4444';
    const rotate = dir === 'up' ? '0' : dir === 'down' ? '180' : '90';
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        <svg
          width='12'
          height='12'
          viewBox='0 0 24 24'
          style={{ transform: `rotate(${rotate}deg)`, color }}
        >
          <path d='M12 5l7 7H5z' fill={color} />
        </svg>
        <small style={{ color }}>{dir === 'flat' ? '0%' : `${pct}%`}</small>
      </span>
    );
  };

  const displayedMembers = useMemo(() => {
    if (!members) return [];
    let list = [...members];
    if (roleFilter !== 'all') {
      list = list.filter(
        m => (m.role || '').toLowerCase() === roleFilter.toLowerCase()
      );
    }
    const cmpStr = (a: string, b: string) =>
      (a || '').localeCompare(b || '', undefined, { sensitivity: 'base' });
    const cmpDate = (a?: string, b?: string) => {
      const da = a ? new Date(a).getTime() : 0;
      const db = b ? new Date(b).getTime() : 0;
      return da - db;
    };
    switch (sortOption) {
      case 'name-asc':
        list.sort((a, b) => cmpStr(a.name, b.name));
        break;
      case 'name-desc':
        list.sort((a, b) => cmpStr(b.name, a.name));
        break;
      case 'role-asc':
        list.sort((a, b) => cmpStr(a.role, b.role));
        break;
      case 'role-desc':
        list.sort((a, b) => cmpStr(b.role, a.role));
        break;
      case 'date-asc':
        list.sort((a, b) => cmpDate(a.createAt, b.createAt));
        break;
      case 'date-desc':
        list.sort((a, b) => cmpDate(b.createAt, a.createAt));
        break;
      default:
        break;
    }
    return list;
  }, [members, roleFilter, sortOption]);
  return (
    <>
      <div className='filters-header' style={{ marginBottom: 12 }}>
        <div className='indicators-title'>
          <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700 }}>
            Indicators
          </h2>
        </div>
        <div className='filters-right'>
          <div
            className='filter-buttons'
            style={{ display: 'flex', gap: 8, alignItems: 'center' }}
          >
            <div className='filter-group'>
              <Button
                className={timeRange === '4weeks' ? 'btn-black' : 'btn-light'}
                onClick={() => setTimeRange('4weeks')}
              >
                {'Last 4 weeks'}
              </Button>
              <Button
                className={timeRange === 'alltime' ? 'btn-black' : 'btn-light'}
                onClick={() => setTimeRange('alltime')}
              >
                {'All-time'}
              </Button>
              <Button
                className={'btn-light'}
                onClick={() => {
                  try {
                    handleChangeGroup({
                      target: { value: 'all' }
                    } as unknown as React.ChangeEvent<HTMLInputElement>);
                  } catch (e) {
                    /* ignore */
                  }
                }}
              >
                {'All groups'}
              </Button>

              <div style={{ minWidth: 160 }}>
                <FormControl
                  componentClass='select'
                  className='standard-radius-5'
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    const val = e.target.value;
                    if (val) {
                      handleChangeGroup({
                        target: { value: val }
                      } as unknown as React.ChangeEvent<HTMLInputElement>);
                    }
                  }}
                  style={{ background: '#f5f5f5', padding: '6px 8px' }}
                >
                  <option value=''>{'Choose group'}</option>
                  {groups && groups.length > 0 && (
                    <optgroup label='Groupes'>
                      {groups.map(g => (
                        <option
                          key={`group-${g.userGroupName}`}
                          value={g.userGroupName}
                        >
                          {g.userGroupName}
                        </option>
                      ))}
                    </optgroup>
                  )}
                  {rolesList && rolesList.length > 0 && (
                    <optgroup label='Rôles'>
                      {rolesList.map(r => (
                        <option
                          key={`role-${r.userRoleName}`}
                          value={r.userRoleName}
                        >
                          {r.userRoleName}
                        </option>
                      ))}
                    </optgroup>
                  )}
                </FormControl>
              </div>
            </div>

            <div style={{ width: 12 }} />

            <div className='filter-group'>
              <Button
                className={courseSource === 'all' ? 'btn-black' : 'btn-light'}
                onClick={() => setCourseSource('all')}
              >
                {'All courses'}
              </Button>
              <Button
                className={courseSource === 'kadea' ? 'btn-black' : 'btn-light'}
                onClick={() => setCourseSource('kadea')}
              >
                {'Kadea'}
              </Button>
              <Button
                className={
                  courseSource === 'moodle' ? 'btn-black' : 'btn-light'
                }
                onClick={() => setCourseSource('moodle')}
              >
                {'Moodle'}
              </Button>
              <Button
                className={courseSource === 'aws' ? 'btn-black' : 'btn-light'}
                onClick={() => setCourseSource('aws')}
              >
                {'AWS'}
              </Button>
            </div>
          </div>
        </div>

        {/* right-side all-groups select removed per UX request */}
      </div>

      {/* Legend above stat cards: text and icon are separate siblings */}
      <div className='legend-row'>
        <div className='legend-text-chip'>
          <span className='legend-text'>{'Legend'}</span>
        </div>
        <div className='legend-icon-wrap' aria-hidden>
          <div className='legend-icon-bg'>
            <FontAwesomeIcon icon={faCircleInfo} className='legend-icon' />
          </div>
        </div>
      </div>

      <div className='stat-grid' style={{ marginBottom: '18px' }}>
        <div className='stat-card-tile accent-1'>
          <div className='label'>{`Nombre total d'utilisateurs`}</div>
          {renderSparkline(
            dashboardStats.series?.totalUsers,
            dashboardTrend.totalUsers?.dir === 'up'
              ? '#10b981'
              : dashboardTrend.totalUsers?.dir === 'down'
              ? '#ef4444'
              : '#f97316'
          )}
          <div className='value'>
            {dashboardStats.totalUsers || countUsers || 0}
          </div>
          <div className='delta'>
            {`Total utilisateurs récupérés`}{' '}
            {renderTrendArrow(dashboardTrend.totalUsers)}
          </div>
          <div className='prev'>{`Affiché: ${
            countUsers ?? '-'
          } utilisateurs / page`}</div>
          <span
            className='pill'
            style={{
              background:
                dashboardTrend.totalUsers?.dir === 'up'
                  ? '#10b981'
                  : dashboardTrend.totalUsers?.dir === 'down'
                  ? '#ef4444'
                  : '#f97316'
            }}
          />
        </div>

        <div className='stat-card-tile accent-2'>
          <div className='label'>{`Mois avec le plus d'inscriptions`}</div>
          {renderSparkline(
            dashboardStats.series?.totalUsers,
            dashboardTrend.totalUsers?.dir === 'up'
              ? '#10b981'
              : dashboardTrend.totalUsers?.dir === 'down'
              ? '#ef4444'
              : '#f97316'
          )}
          <div className='value'>
            {dashboardStats.monthMax
              ? `${dashboardStats.monthMax.month}`
              : 'Aucun'}
          </div>
          <div className='delta'>
            {dashboardStats.monthMax
              ? ` ${dashboardStats.monthMax.count} inscrits`
              : ''}{' '}
            {renderTrendArrow(dashboardTrend.totalUsers)}
          </div>
          <div className='prev' />
          <span
            className='pill'
            style={{
              background:
                dashboardTrend.totalUsers?.dir === 'up'
                  ? '#10b981'
                  : dashboardTrend.totalUsers?.dir === 'down'
                  ? '#ef4444'
                  : '#f97316'
            }}
          />
        </div>

        <div className='stat-card-tile accent-3'>
          <div className='label'>{`Mois avec le moins d'inscriptions`}</div>
          {renderSparkline(
            dashboardStats.series?.totalUsers,
            dashboardTrend.totalUsers?.dir === 'up'
              ? '#10b981'
              : dashboardTrend.totalUsers?.dir === 'down'
              ? '#ef4444'
              : '#f97316'
          )}
          <div className='value'>
            {dashboardStats.monthMin
              ? `${dashboardStats.monthMin.month}`
              : 'Aucun'}
          </div>
          <div className='delta'>
            {dashboardStats.monthMin
              ? ` ${dashboardStats.monthMin.count} inscrits`
              : ''}{' '}
            {renderTrendArrow(dashboardTrend.totalUsers)}
          </div>
          <div className='prev' />
          <span
            className='pill'
            style={{
              background:
                dashboardTrend.totalUsers?.dir === 'up'
                  ? '#10b981'
                  : dashboardTrend.totalUsers?.dir === 'down'
                  ? '#ef4444'
                  : '#f97316'
            }}
          />
        </div>

        <div className='stat-card-tile accent-4'>
          <div className='label'>{`Utilisateurs ayant suivi ≥1 cours`}</div>
          {renderSparkline(
            dashboardStats.series?.usersWithAtLeastOneCourse,
            dashboardTrend.usersWithAtLeastOneCourse?.dir === 'up'
              ? '#10b981'
              : dashboardTrend.usersWithAtLeastOneCourse?.dir === 'down'
              ? '#ef4444'
              : '#f97316'
          )}
          <div className='value'>
            {dashboardStats.usersWithAtLeastOneCourse}
          </div>
          <div className='delta'>
            {`Utilisateurs totaux ayant au moins un cours`}{' '}
            {renderTrendArrow(dashboardTrend.usersWithAtLeastOneCourse)}
          </div>
          <div className='prev' />
          <span
            className='pill'
            style={{
              background:
                dashboardTrend.usersWithAtLeastOneCourse?.dir === 'up'
                  ? '#10b981'
                  : dashboardTrend.usersWithAtLeastOneCourse?.dir === 'down'
                  ? '#ef4444'
                  : '#f97316'
            }}
          />
        </div>

        <div className='stat-card-tile accent-5'>
          <div className='label'>{`Utilisateurs ≥50% progression`}</div>
          {renderSparkline(
            dashboardStats.series?.usersWithProgressGE50,
            dashboardTrend.usersWithProgressGE50?.dir === 'up'
              ? '#10b981'
              : dashboardTrend.usersWithProgressGE50?.dir === 'down'
              ? '#ef4444'
              : '#f97316'
          )}
          <div className='value'>{dashboardStats.usersWithProgressGE50}</div>
          <div className='delta'>
            {`Progression >= 50% (Kadea)`}{' '}
            {renderTrendArrow(dashboardTrend.usersWithProgressGE50)}
          </div>
          <div className='prev' />
          <span
            className='pill'
            style={{
              background:
                dashboardTrend.usersWithProgressGE50?.dir === 'up'
                  ? '#10b981'
                  : dashboardTrend.usersWithProgressGE50?.dir === 'down'
                  ? '#ef4444'
                  : '#f97316'
            }}
          />
        </div>

        <div className='stat-card-tile accent-1'>
          <div className='label'>{`Nombre total de cours (distincts)`}</div>
          {renderSparkline(
            dashboardStats.series?.totalCourses,
            dashboardTrend.totalCourses?.dir === 'up'
              ? '#10b981'
              : dashboardTrend.totalCourses?.dir === 'down'
              ? '#ef4444'
              : '#f97316'
          )}
          <div className='value'>{dashboardStats.totalCourses}</div>
          <div className='delta'>
            {`Cours uniques trouvés`}{' '}
            {renderTrendArrow(dashboardTrend.totalCourses)}
          </div>
          <div className='prev' />
          <span
            className='pill'
            style={{
              background:
                dashboardTrend.totalCourses?.dir === 'up'
                  ? '#10b981'
                  : dashboardTrend.totalCourses?.dir === 'down'
                  ? '#ef4444'
                  : '#f97316'
            }}
          />
        </div>
      </div>
      <div className='list-section'>
        <div className='pagination-bar'>
          <div className='page-info'>
            {`Page ${currentPage} / ${totalPages}`} ·{' '}
            {`${members?.length ?? 0} sur ${
              countUsers ?? members?.length ?? 0
            } résultats`}
          </div>
          <div className='page-actions'>
            <Button
              className='btn-light page-btn'
              disabled={currentPage <= 1}
              onClick={() => navigateToPage(false)}
            >
              {'< Back'}
            </Button>
            <Button
              className='btn-light page-btn'
              disabled={currentPage >= totalPages}
              onClick={() => navigateToPage(true)}
            >
              {'Next >'}
            </Button>
          </div>
        </div>

        <form onSubmit={handleSearchMember}>
          <div className='filter-row'>
            <div className='filter-field wide'>
              <label>{'Search users'}</label>
              <div className='search-input-group'>
                <FormControl
                  type='search'
                  placeholder='Search by name or email'
                  className='standard-radius-5 search-input'
                  name='memberName'
                  value={memberName}
                  onChange={handleChangeSearchMemberInput}
                />
                <Button
                  type='submit'
                  className='standard-radius-5 btn-black search-btn'
                >
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </div>
            </div>

            <div className='filter-field'>
              <label>{'Role'}</label>
              <FormControl
                componentClass='select'
                className='standard-radius-5'
                value={roleFilter}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setRoleFilter(e.target.value || 'all');
                }}
              >
                <option value='all'>{'All roles'}</option>
                {rolesList.map(r => (
                  <option
                    key={`role-filter-${r.userRoleName}`}
                    value={r.userRoleName}
                  >
                    {r.userRoleName}
                  </option>
                ))}
              </FormControl>
            </div>

            <div className='filter-field'>
              <label>{'Sort'}</label>
              <FormControl
                componentClass='select'
                className='standard-radius-5'
                value={sortOption}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                  setSortOption(e.target.value as typeof sortOption);
                }}
              >
                <option value='name-asc'>{'Name (asc)'}</option>
                <option value='name-desc'>{'Name (desc)'}</option>
                <option value='role-asc'>{'Role (asc)'}</option>
                <option value='role-desc'>{'Role (desc)'}</option>
                <option value='date-asc'>{'Date (asc)'}</option>
                <option value='date-desc'>{'Date (desc)'}</option>
              </FormControl>
            </div>

            <div className='filter-field upload-field'>
              <label>{'Upload users'}</label>
              <Button
                type='button'
                className='standard-radius-5 btn-light upload-btn'
                onClick={handleUploadClick}
              >
                {'Upload (CSV/Excel)'}
              </Button>
              <input
                ref={fileInputRef}
                type='file'
                accept='.csv,.xlsx,.xls'
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  void handleFileUpload(e);
                }}
                style={{ display: 'none' }}
              />
            </div>
          </div>
        </form>

        <div className='table-wrapper'>
          {displayedMembers && displayedMembers.length > 0 ? (
            <Table responsive hover className='simple-table'>
              <thead>
                <tr>
                  <th>{'#'}</th>
                  <th>{'Nom'}</th>
                  <th>{'Rôle'}</th>
                  <th>{`Date d'inscription`}</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {displayedMembers.map((member, index) => {
                  const rowNumber = (currentPage - 1) * 10 + index + 1;
                  const creationDate =
                    new Date(member.createAt) <
                    new Date(new Date().getTime() - 120000)
                      ? dateFormat(`${member.createAt}`)
                      : 'Pas de date';

                  return (
                    <tr key={member.id}>
                      <td>{rowNumber}</td>
                      <td>
                        <div className='user-cell'>
                          <div className='user-name'>
                            {member.name || 'Sans nom'}
                          </div>
                          <div className='user-email'>{member.email}</div>
                        </div>
                      </td>
                      <td>{member.role || 'Aucun'}</td>
                      <td>{creationDate}</td>
                      <td>
                        <button
                          className='text-link-button'
                          type='button'
                          onClick={() => showMemberDetails(member)}
                        >
                          {'Edit'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          ) : isLoadingMemberState ? (
            <div className='table-loading'>{`Chargement d'utilisateurs en cours ...`}</div>
          ) : (
            <div className='table-empty'>{"Pas d'utilisateurs"}</div>
          )}
        </div>
      </div>
    </>
  );
}

interface MemberProps {
  member?: Member;
  returnToTable: () => void;
}

type MoodleUser = {
  id: number;
  email: string;
};

type MoodleCourse = {
  id: number;
  displayname: string;
  progress: number;
};

type UserRole = {
  id: string;
  userRoleName: string;
};
type RoleList = {
  userRoleList: UserRole[];
  totalPages: number;
  currentPage: number;
  countUsers: number;
};

export function DetailMember(props: MemberProps): JSX.Element {
  const { member, returnToTable } = props;

  const [moodleCourses, setMoodleCourses] = useState<MoodleCourse[] | null>();
  const [userRoles, setUserRoles] = useState<UserRole[]>([]);

  const [selectedRoleName, setSelectedRoleName] = useState<string | undefined>(
    member?.role ? member?.role : ''
  );
  const [updating, setupdating] =
    useState<{ isAddedStatus: boolean; message: string }>();
  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getAllRoles = async () => {
    const allRoles = await getDatabaseResource<RoleList>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `/all-users-roles?page=1&limit=10`
    );
    if (allRoles?.userRoleList != null && !('error' in allRoles)) {
      setUserRoles([...allRoles.userRoleList]);
    } else {
      setUserRoles([]);
    }
  };

  const getMoodleProgressCourses = async () => {
    const moodleUser = await getExternalResource<MoodleUser[]>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_user_get_users_by_field&moodlewsrestformat=json&field=email&values[0]=${member?.email}`
    );
    if (moodleUser != null && moodleUser.length > 0) {
      const moodleUserCoursesProgress = await getExternalResource<
        MoodleCourse[]
      >(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=${moodleUser[0].id}`
      );
      if (
        moodleUserCoursesProgress != null &&
        moodleUserCoursesProgress.length > 0
      ) {
        setMoodleCourses(moodleUserCoursesProgress);
      } else {
        setMoodleCourses(null);
      }
    } else {
      setMoodleCourses(null);
    }
  };

  const addUserRole = (
    event: React.ChangeEvent<HTMLInputElement>,
    userRoleName: string | undefined,
    userId: string[]
  ) => {
    event.preventDefault();
    const data = {
      ids: userId,
      userRole: userRoleName
    };

    if (userId.length !== 0) {
      let res;
      void (async () => {
        res = await addUserInRole(data);

        if (res && res.isAdded) {
          setupdating({
            isAddedStatus: res.isAdded,
            message: res.message
          });
          setTimeout(() => {
            setupdating({
              isAddedStatus: false,
              message: ''
            });
          }, 5000);
        }
      })();
    }
  };
  const handleChangeRoleName = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const roleMembersInput = event.target.value.slice();
    setSelectedRoleName(roleMembersInput);
  };

  useEffect(() => {
    void getMoodleProgressCourses();

    return () => {
      setMoodleCourses([]); // cleanup useEffect to perform a React state update
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void getAllRoles();
  }, []);

  return (
    <Row>
      <Col md={12} sm={12} xs={12}>
        <div>
          <button
            className='action-btn-detail'
            onClick={() => {
              returnToTable();
            }}
          >
            <FontAwesomeIcon
              icon={faChevronLeft}
              className='pagination-chevron'
            />
            &nbsp; Retour sur la liste
          </button>
        </div>
        <Spacer size={1} />
        <p>
          <span className='fw-bold'>{'Informations personnelles'}</span>
        </p>
        <div className='section-block-padding bg-secondary'>
          <p>
            <span className='fw-bold'>{'Email'}</span>
            <br />
            {member?.email}
          </p>
          {member?.name && member?.name.length > 0 && (
            <p>
              <span className='fw-bold'>{'Nom'}</span>
              <br />
              {member?.name}
            </p>
          )}
          {member?.email && (
            <p>
              <span className='fw-bold'>{'Rôle'}</span>
              <br />
              <FormGroup controlId='select-role' className='select-role'>
                <FormControl
                  componentClass='select'
                  onChange={handleChangeRoleName}
                  value={selectedRoleName}
                  className='standard-radius-5 role-input'
                >
                  {' '}
                  {/* <option value='all'>Tout les membres</option> */}
                  <option key={''} value={selectedRoleName}>
                    {selectedRoleName}
                  </option>
                  {userRoles.length !== 0 &&
                    userRoles.map(userRole => {
                      return (
                        <>
                          {userRole.userRoleName == selectedRoleName ? (
                            ''
                          ) : (
                            <option key={''} value={userRole.userRoleName}>
                              {userRole.userRoleName}
                            </option>
                          )}
                        </>
                      );
                    })}
                </FormControl>
                <Button
                  type='submit'
                  className='standard-radius-5 btn-black'
                  id='button-addon2'
                  onClick={(event: React.ChangeEvent<HTMLInputElement>) => {
                    addUserRole(event, selectedRoleName, [member?.id]);
                  }}
                >
                  {'Modifier'}
                </Button>
                {updating?.isAddedStatus ? (
                  <>
                    {' '}
                    {!updating || updating.message.length == 0 ? (
                      <HelpBlock className='none-help-block'>
                        {`none`}
                      </HelpBlock>
                    ) : (
                      <HelpBlock className='text-success'>
                        {`${updating.message}`}
                      </HelpBlock>
                    )}
                  </>
                ) : (
                  <>
                    {' '}
                    {!updating || updating.message.length == 0 ? (
                      <HelpBlock className='none-help-block'>
                        {`none`}
                      </HelpBlock>
                    ) : (
                      <HelpBlock className='text-error'>
                        {`${updating.message}`}
                      </HelpBlock>
                    )}
                  </>
                )}
              </FormGroup>
            </p>
          )}

          {member?.gender && member?.gender.length > 0 && (
            <p>
              <span className='fw-bold'>{'Genre'}</span>
              <br />
              {member?.gender}
            </p>
          )}
          <p>
            <span className='fw-bold'>{'Numéro de telephone'}</span>
            <br />
            {member?.phone}
          </p>
          <p>
            <span className='fw-bold'>{'Numéro whatsapp'}</span>
            <br />
            {member?.whatsapp}
          </p>
          <p>
            <span className='fw-bold'>{'Groupe'}</span>
            <br />
            {member?.groups
              ? member?.groups.map(group => group).join(', ')
              : 'Aucun'}
          </p>
          <p>
            <span className='fw-bold'>{'Membre depuis '}</span>
            <br />
            {member?.createAt ? dateFormat(`${member?.createAt}`) : ''}
          </p>
        </div>
        <Spacer size={1} />
      </Col>

      {(moodleCourses != null && moodleCourses?.length > 0) ||
      (member?.currentsSuperBlock != undefined &&
        member?.currentsSuperBlock.length > 0) ? (
        <Col md={12} sm={12} xs={12}>
          <p>
            <span className='fw-bold'>{'Cours suivis'}</span>
          </p>
        </Col>
      ) : null}

      {member?.currentsSuperBlock != undefined &&
        member?.currentsSuperBlock.length > 0 && (
          <>
            {member.currentsSuperBlock.map((currentSuperBlock, index) => {
              return (
                <Col md={6} sm={12} xs={12} key={index}>
                  <div className=''>
                    <CourseProgressBar
                      challengeCount={currentSuperBlock.totalChallenges}
                      completedChallengeCount={
                        currentSuperBlock.totalCompletedChallenges
                      }
                      coursName={currentSuperBlock.superBlockName}
                    />
                  </div>
                </Col>
              );
            })}
          </>
        )}

      {moodleCourses != null && moodleCourses?.length > 0 && (
        <>
          {moodleCourses.map((moodleCourse, index) => {
            return (
              <Col md={6} sm={12} xs={12} key={index}>
                <div className=''>
                  <CourseProgressBar
                    challengeCount={100}
                    completedChallengeCount={moodleCourse.progress}
                    coursName={moodleCourse.displayname}
                  />
                </div>
              </Col>
            );
          })}
        </>
      )}
    </Row>
  );
}

ShowAllMembers.displayName = 'ShowAllMembers';

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllMembers);
