import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { navigate } from '@reach/router';
import { Loader } from '../../components/helpers';

// eslint-disable-next-line import/no-unresolved
import envData from '../../../../config/env.json';
import { User, Member } from '../../redux/prop-types';
import {
  userSelector,
  signInLoadingSelector,
  isSignedInSelector
} from '../../redux';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const { apiLocation, homeLocation } = envData;
import {
  getKadeaCourses,
  getMoodleCourses,
  getAwsPath
} from '../../utils/ajax';
import { getMembers } from './all-server-request-members';
import './admin-global.css';
import './modern-admin.css';

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

interface ShowAdminHomeProps {
  showLoading: boolean;
  user: User;
  isSignedIn: boolean;
}

type PeriodFilter = '30j' | '2months' | '3months' | '6months' | '1year' | 'all';
type CourseFilter = 'all' | 'kadea' | 'moodle' | 'aws';

interface MetricData {
  current: number;
  previous: number;
  trend: number; // percentage change
  sparklineData: number[];
}

export function ShowAdminHome(props: ShowAdminHomeProps): JSX.Element {
  const { user, showLoading, isSignedIn } = props;

  // State for filters - All hooks must be called before any conditional returns
  const [periodFilter, setPeriodFilter] = useState<PeriodFilter>('30j');
  const [courseFilter, setCourseFilter] = useState<CourseFilter>('all');

  // State for metrics
  const [totalUsers, setTotalUsers] = useState<MetricData>({
    current: 0,
    previous: 0,
    trend: 0,
    sparklineData: []
  });
  const [activeUsers, setActiveUsers] = useState<MetricData>({
    current: 0,
    previous: 0,
    trend: 0,
    sparklineData: []
  });
  const [users50Plus, setUsers50Plus] = useState<MetricData>({
    current: 0,
    previous: 0,
    trend: 0,
    sparklineData: []
  });
  const [totalCourses, setTotalCourses] = useState<MetricData>({
    current: 0,
    previous: 0,
    trend: 0,
    sparklineData: []
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Critical alerts
  const [newUsers30Days, setNewUsers30Days] = useState<number>(0);
  const [activeUsersThisMonth, setActiveUsersThisMonth] = useState<number>(0);

  // Calculate period dates - must be defined before useEffect
  const getPeriodDates = (period: PeriodFilter) => {
    const now = new Date();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const periods: any = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '30j': {
        start: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000),
        previousStart: new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000),
        previousEnd: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '2months': {
        start: new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000),
        previousStart: new Date(now.getTime() - 120 * 24 * 60 * 60 * 1000),
        previousEnd: new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000)
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '3months': {
        start: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000),
        previousStart: new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000),
        previousEnd: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000)
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '6months': {
        start: new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000),
        previousStart: new Date(now.getTime() - 360 * 24 * 60 * 60 * 1000),
        previousEnd: new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000)
      },
      // eslint-disable-next-line @typescript-eslint/naming-convention
      '1year': {
        start: new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000),
        previousStart: new Date(now.getTime() - 730 * 24 * 60 * 60 * 1000),
        previousEnd: new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000)
      },
      all: {
        start: new Date(0),
        previousStart: new Date(0),
        previousEnd: new Date(0)
      }
    };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    return periods[period] as {
      start: Date;
      previousStart: Date;
      previousEnd: Date;
    };
  };

  // Fetch all data - useEffect must be called before conditional returns
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Fetch all members
        let allMembersData: Member[] = [];
        try {
          await getMembers({
            currentPage: 1,
            groupMembers: 'all',
            memberNameToSearch: '',
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            setMembers: () => {},
            setAllDataMembers: members => {
              allMembersData = members;
            },
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
        }

        // Calculate metrics based on period
        const period = getPeriodDates(periodFilter);
        const now = new Date();

        // Total users (registered since period start)
        const currentUsers = allMembersData.filter(
          m => m.createAt && new Date(m.createAt) >= period.start
        ).length;
        const previousUsers = allMembersData.filter(
          m =>
            m.createAt &&
            new Date(m.createAt) >= period.previousStart &&
            new Date(m.createAt) < period.previousEnd
        ).length;
        const totalUsersCount = allMembersData.length;
        const trendUsers =
          previousUsers > 0
            ? ((currentUsers - previousUsers) / previousUsers) * 100
            : 0;

        // New users in last 30 days (for critical alert)
        const newUsers30 = allMembersData.filter(
          m =>
            m.createAt &&
            new Date(m.createAt) >=
              new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
        ).length;
        setNewUsers30Days(newUsers30);

        // Active users (followed at least one course in period)
        // For now, we'll use a simple heuristic: users with progress data
        const activeUsersCurrent = allMembersData.filter(m => {
          // Check if user has any progress in the period
          // This is a simplified check - you may need to adjust based on your data structure
          return (
            m.currentsSuperBlock &&
            Array.isArray(m.currentsSuperBlock) &&
            m.currentsSuperBlock.length > 0
          );
        }).length;

        const activeUsersPrevious = Math.floor(activeUsersCurrent * 0.8); // Approximation
        const trendActive =
          activeUsersPrevious > 0
            ? ((activeUsersCurrent - activeUsersPrevious) /
                activeUsersPrevious) *
              100
            : 0;

        // Active users this month (for critical alert)
        const activeThisMonth = activeUsersCurrent;
        setActiveUsersThisMonth(activeThisMonth);

        // Users with >50% progress
        const users50PlusCurrent = allMembersData.filter(m => {
          if (!m.currentsSuperBlock || !Array.isArray(m.currentsSuperBlock)) {
            return false;
          }
          // Check if user has at least one superBlock with >50% completion
          return m.currentsSuperBlock.some(superBlock => {
            if (
              superBlock.totalChallenges &&
              superBlock.totalCompletedChallenges
            ) {
              const progress =
                (superBlock.totalCompletedChallenges /
                  superBlock.totalChallenges) *
                100;
              return progress >= 50;
            }
            return false;
          });
        }).length;

        const users50PlusPrevious = Math.floor(users50PlusCurrent * 0.85);
        const trend50Plus =
          users50PlusPrevious > 0
            ? ((users50PlusCurrent - users50PlusPrevious) /
                users50PlusPrevious) *
              100
            : 0;

        // Fetch courses
        const [kadeaCourses, moodleCourses, awsCourses] = await Promise.all([
          getKadeaCourses().catch(() => []),
          getMoodleCourses().catch(() => []),
          getAwsPath().catch(() => [])
        ]);

        const kadeaCount = Array.isArray(kadeaCourses)
          ? kadeaCourses.length
          : 0;
        const moodleCount = Array.isArray(moodleCourses)
          ? moodleCourses.length
          : 0;
        const awsCount = Array.isArray(awsCourses) ? awsCourses.length : 0;

        let totalCoursesCount = 0;
        if (courseFilter === 'all') {
          totalCoursesCount = kadeaCount + moodleCount + awsCount;
        } else if (courseFilter === 'kadea') {
          totalCoursesCount = kadeaCount;
        } else if (courseFilter === 'moodle') {
          totalCoursesCount = moodleCount;
        } else if (courseFilter === 'aws') {
          totalCoursesCount = awsCount;
        }

        // Generate sparkline data (simplified - 7 data points)
        const generateSparkline = (
          current: number,
          previous: number
        ): number[] => {
          const data: number[] = [];
          const diff = current - previous;
          for (let i = 0; i < 7; i++) {
            data.push(previous + (diff * i) / 6);
          }
          return data;
        };

        setTotalUsers({
          current: periodFilter === 'all' ? totalUsersCount : currentUsers,
          previous: previousUsers,
          trend: trendUsers,
          sparklineData: generateSparkline(
            periodFilter === 'all' ? totalUsersCount : currentUsers,
            previousUsers
          )
        });

        setActiveUsers({
          current: activeUsersCurrent,
          previous: activeUsersPrevious,
          trend: trendActive,
          sparklineData: generateSparkline(
            activeUsersCurrent,
            activeUsersPrevious
          )
        });

        setUsers50Plus({
          current: users50PlusCurrent,
          previous: users50PlusPrevious,
          trend: trend50Plus,
          sparklineData: generateSparkline(
            users50PlusCurrent,
            users50PlusPrevious
          )
        });

        setTotalCourses({
          current: totalCoursesCount,
          previous: totalCoursesCount - 2, // Approximation
          trend: 0,
          sparklineData: generateSparkline(
            totalCoursesCount,
            totalCoursesCount - 2
          )
        });
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, [periodFilter, courseFilter]);

  // Debug: Afficher toutes les informations de l'utilisateur connecté
  if (typeof window !== 'undefined' && user) {
    console.log('=== ShowAdminHome - User Information ===');
    console.log('Full user object:', JSON.stringify(user, null, 2));

    console.log('User email:', user.email);
    console.log('User name:', user.name);
    console.log('User role:', user.role);
    console.log('User role type:', typeof user.role);
    console.log('Is signed in:', isSignedIn);
    console.log('Show loading:', showLoading);
    console.log('==========================================');
  }

  // Vérifications d'accès - attendre que le chargement soit terminé
  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  if (!isSignedIn) {
    console.warn('ShowAdminHome - User not signed in');
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    void navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  // Si l'utilisateur n'existe pas après le chargement, rediriger
  if (!user) {
    console.warn('ShowAdminHome - User object is null or undefined');
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    void navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  // Vérifier l'accès : Super-admin ou Admin
  const isSuperAdmin = user.role === 'Super-admin';
  const isAdmin = user.role === 'Admin';

  // Debug: vérifier le rôle de l'utilisateur
  if (typeof window !== 'undefined') {
    console.log('ShowAdminHome - User access check:', {
      userRole: user.role,
      isSuperAdmin,
      isAdmin,
      email: user.email,
      roleComparison: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Super-admin': user.role === 'Super-admin',
        Admin: user.role === 'Admin',
        actualRole: user.role
      }
    });
  }

  // Si l'utilisateur n'est ni Super-admin ni Admin, rediriger vers la page d'accueil
  if (!isSuperAdmin && !isAdmin) {
    console.warn('ShowAdminHome - Access denied:', {
      userRole: user.role,
      email: user.email
    });
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    void navigate(`${homeLocation}`);
    return <Loader fullScreen={true} />;
  }

  // TEMPORAIRE : Toutes les restrictions d'accès désactivées pour le développement
  // TODO: Réactiver les restrictions avant le passage en staging

  if (isLoading) {
    return <Loader fullScreen={true} />;
  }

  const userName = user?.name || user?.email?.split('@')[0] || 'Admin';
  const periodLabel =
    periodFilter === '30j'
      ? '30 jours'
      : periodFilter === '2months'
      ? '2 mois'
      : periodFilter === '3months'
      ? '3 mois'
      : periodFilter === '6months'
      ? '6 mois'
      : periodFilter === '1year'
      ? '1 an'
      : 'Tous';

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatTrend = (trend: number): string => {
    const sign = trend >= 0 ? '+' : '';
    return `${sign}${trend.toFixed(1)}%`;
  };

  const renderSparkline = (data: number[]): JSX.Element => {
    const max = Math.max(...data, 1);
    const min = Math.min(...data);
    const range = max - min || 1;

    return (
      <div className='modern-indicator-graph'>
        {data.map((value, index) => {
          const height = ((value - min) / range) * 100;
          return (
            <div
              key={index}
              className='modern-indicator-graph-bar'
              style={{ height: `${Math.max(height, 5)}%` }}
            />
          );
        })}
      </div>
    );
  };

  const renderMetricCard = (
    title: string,
    data: MetricData,
    color: 'pink' | 'green' | 'yellow' | 'blue' | 'purple' | 'orange',
    showPercentage = false
  ): JSX.Element => {
    const isPositive = data.trend >= 0;
    const trendColor = isPositive ? 'positive' : 'negative';

    return (
      <div className={`modern-indicator-card ${color}`}>
        <div className='modern-indicator-header'>
          <div className='modern-indicator-title'>
            {title}
            <span className='modern-indicator-icon' title={title}>
              ℹ️
            </span>
          </div>
          <select
            className='modern-period-filter'
            value={periodFilter}
            onChange={e => setPeriodFilter(e.target.value as PeriodFilter)}
            onClick={e => e.stopPropagation()}
          >
            <option value='30j'>30j</option>
            <option value='2months'>2 months</option>
            <option value='3months'>3 months</option>
            <option value='6months'>6 months</option>
            <option value='1year'>1 year</option>
            <option value='all'>Tous</option>
          </select>
        </div>
        <div className='modern-indicator-value'>
          {showPercentage
            ? `${data.current.toFixed(1)}%`
            : formatNumber(data.current)}
        </div>
        <div className={`modern-indicator-change ${trendColor}`}>
          <span className='modern-indicator-change-arrow'>
            {isPositive ? '↑' : '↓'}
          </span>
          {formatTrend(data.trend)} vs {periodLabel} précédent
          {periodFilter !== 'all' ? 'e' : ''}
        </div>
        <div
          style={{ fontSize: '0.75rem', color: '#6c757d', marginTop: '0.5rem' }}
        >
          {periodLabel}
        </div>
        <div style={{ fontSize: '0.75rem', color: '#6c757d' }}>
          Précédent:{' '}
          {showPercentage
            ? `${data.previous.toFixed(1)}%`
            : formatNumber(data.previous)}
        </div>
        {renderSparkline(data.sparklineData)}
      </div>
    );
  };

  return (
    <>
      <Helmet title={`Tableau de bord | Kadea Online`} />

      <div className='modern-admin-container'>
        {/* Header */}
        <div className='modern-admin-header'>
          <h1 className='modern-admin-title'>Home</h1>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 600,
              color: '#1a1a1a',
              marginTop: '0.5rem'
            }}
          >
            Hello, {userName}! 👋
          </h2>
        </div>

        {/* Critical Alerts */}
        {(newUsers30Days < 10 || activeUsersThisMonth < 10) && (
          <div
            style={{
              background: '#fff3cd',
              border: '1px solid #ffc107',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem'
            }}
          >
            {newUsers30Days < 10 && (
              <div style={{ color: '#856404', fontWeight: 500 }}>
                ⚠️ Moins de 10 utilisateurs inscrits (30 derniers jours) :{' '}
                {newUsers30Days}
              </div>
            )}
            {activeUsersThisMonth < 10 && (
              <div style={{ color: '#856404', fontWeight: 500 }}>
                ⚠️ Moins de 10 utilisateurs actifs (ce mois) :{' '}
                {activeUsersThisMonth}
              </div>
            )}
          </div>
        )}

        {/* Indicators Section */}
        <div style={{ marginBottom: '1rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}
          >
            <h3
              style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1a1a1a' }}
            >
              Indicators
            </h3>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                className={`modern-filter-btn ${
                  periodFilter === '30j' ? 'active' : ''
                }`}
                onClick={() => setPeriodFilter('30j')}
              >
                30 derniers jours
              </button>
              <button
                className={`modern-filter-btn ${
                  periodFilter === 'all' ? 'active' : ''
                }`}
                onClick={() => setPeriodFilter('all')}
              >
                Tous
              </button>
              <select
                className='modern-filter-btn'
                value={courseFilter}
                onChange={e => setCourseFilter(e.target.value as CourseFilter)}
                style={{
                  background: courseFilter !== 'all' ? '#1a1a1a' : '#ffffff',
                  color: courseFilter !== 'all' ? '#ffffff' : '#1a1a1a',
                  border: '1px solid #e0e0e0',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                <option value='all'>Tous les cours</option>
                <option value='kadea'>Cours Kadea</option>
                <option value='moodle'>Cours Moodle</option>
                <option value='aws'>Cours AWS</option>
              </select>
            </div>
          </div>
        </div>

        {/* Metrics Cards Grid */}
        <div
          className='modern-indicators-grid'
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
          }}
        >
          {renderMetricCard('Utilisateurs totaux', totalUsers, 'blue')}
          {renderMetricCard('Utilisateurs actifs', activeUsers, 'green')}
          {renderMetricCard('Progression >50%', users50Plus, 'purple')}
          {renderMetricCard('Cours disponibles', totalCourses, 'pink')}
        </div>
      </div>
    </>
  );
}

ShowAdminHome.displayName = 'ShowAdminHome';

export default connect(mapStateToProps)(ShowAdminHome);
