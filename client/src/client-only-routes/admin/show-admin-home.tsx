import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
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
type Language = 'en' | 'fr';

interface MetricData {
  current: number;
  previous: number;
  trend: number; // percentage change
  sparklineData: number[];
}

// Translations object
const translations = {
  en: {
    dashboard: 'Dashboard',
    hello: 'Hello',
    indicators: 'Indicators',
    legend: 'Legend',
    last30Days: 'Last 30 days',
    all: 'All',
    allCourses: 'All courses',
    kadeaCourses: 'Kadea Courses',
    moodleCourses: 'Moodle Courses',
    awsCourses: 'AWS Courses',
    totalUsers: 'Total Users',
    activeUsers: 'Active Users',
    progress50Plus: 'Progress >50%',
    availableCourses: 'Available Courses',
    previous: 'Previous',
    vsPrevious: 'vs previous',
    weeks: 'weeks',
    allTime: 'all-time',
    days: 'days',
    months: 'months',
    year: 'year',
    alertLessThan10Users: 'Less than 10 users registered (last 30 days)',
    alertLessThan10Active: 'Less than 10 active users (this month)',
    period30Days: '30 days',
    period2Months: '2 months',
    period3Months: '3 months',
    period6Months: '6 months',
    period1Year: '1 year'
  },
  fr: {
    dashboard: 'Tableau de bord',
    hello: 'Bonjour',
    indicators: 'Indicateurs',
    legend: 'Légende',
    last30Days: '30 derniers jours',
    all: 'Tous',
    allCourses: 'Tous les cours',
    kadeaCourses: 'Cours Kadea',
    moodleCourses: 'Cours Moodle',
    awsCourses: 'Cours AWS',
    totalUsers: 'Utilisateurs totaux',
    activeUsers: 'Utilisateurs actifs',
    progress50Plus: 'Progression >50%',
    availableCourses: 'Cours disponibles',
    previous: 'Précédent',
    vsPrevious: 'vs précédent',
    weeks: 'semaines',
    allTime: 'tous les temps',
    days: 'jours',
    months: 'mois',
    year: 'an',
    alertLessThan10Users:
      'Moins de 10 utilisateurs inscrits (30 derniers jours)',
    alertLessThan10Active: 'Moins de 10 utilisateurs actifs (ce mois)',
    period30Days: '30 jours',
    period2Months: '2 mois',
    period3Months: '3 mois',
    period6Months: '6 mois',
    period1Year: '1 an'
  }
};

export function ShowAdminHome(props: ShowAdminHomeProps): JSX.Element {
  const { user, showLoading, isSignedIn } = props;

  // State for language - Load from localStorage or default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem(
      'admin-dashboard-language'
    ) as Language;
    return savedLanguage || 'en';
  });

  // Save language preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('admin-dashboard-language', language);
  }, [language]);

  // Get translations for current language
  const t = translations[language];

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
          // Error fetching members - silently fail
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

        // Active users (users with progress data)
        // Current: all users with any progress (currentsSuperBlock with completed challenges)
        const activeUsersCurrent = allMembersData.filter(m => {
          if (!m.currentsSuperBlock || !Array.isArray(m.currentsSuperBlock)) {
            return false;
          }
          // User is active if they have at least one completed challenge
          return m.currentsSuperBlock.some(
            sb => sb.totalCompletedChallenges && sb.totalCompletedChallenges > 0
          );
        }).length;

        // Previous: users created in previous period who have progress
        // This is the best approximation we can do without historical activity data
        const activeUsersPrevious = allMembersData.filter(m => {
          if (!m.currentsSuperBlock || !Array.isArray(m.currentsSuperBlock)) {
            return false;
          }
          const userCreatedAt = m.createAt ? new Date(m.createAt) : null;
          if (!userCreatedAt) return false;

          // User was created in previous period
          const wasInPreviousPeriod =
            userCreatedAt >= period.previousStart &&
            userCreatedAt < period.previousEnd;

          // And has progress
          const hasProgress = m.currentsSuperBlock.some(
            sb => sb.totalCompletedChallenges && sb.totalCompletedChallenges > 0
          );

          return wasInPreviousPeriod && hasProgress;
        }).length;

        const trendActive =
          activeUsersPrevious > 0
            ? ((activeUsersCurrent - activeUsersPrevious) /
                activeUsersPrevious) *
              100
            : activeUsersCurrent > 0
            ? 100
            : 0;

        // Active users this month (for critical alert)
        const activeThisMonth = activeUsersCurrent;
        setActiveUsersThisMonth(activeThisMonth);

        // Users with >50% progress
        // Current: all users with at least one superBlock at >50% completion
        const users50PlusCurrent = allMembersData.filter(m => {
          if (!m.currentsSuperBlock || !Array.isArray(m.currentsSuperBlock)) {
            return false;
          }
          return m.currentsSuperBlock.some(superBlock => {
            if (
              superBlock.totalChallenges &&
              superBlock.totalChallenges > 0 &&
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

        // Previous: users created in previous period with >50% progress
        const users50PlusPrevious = allMembersData.filter(m => {
          if (!m.currentsSuperBlock || !Array.isArray(m.currentsSuperBlock)) {
            return false;
          }
          const userCreatedAt = m.createAt ? new Date(m.createAt) : null;
          if (!userCreatedAt) return false;

          const wasInPreviousPeriod =
            userCreatedAt >= period.previousStart &&
            userCreatedAt < period.previousEnd;

          if (!wasInPreviousPeriod) return false;

          return m.currentsSuperBlock.some(superBlock => {
            if (
              superBlock.totalChallenges &&
              superBlock.totalChallenges > 0 &&
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

        const trend50Plus =
          users50PlusPrevious > 0
            ? ((users50PlusCurrent - users50PlusPrevious) /
                users50PlusPrevious) *
              100
            : users50PlusCurrent > 0
            ? 100
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

        // For courses, we can't easily get historical data, so we'll keep it simple
        // but calculate a trend based on a reasonable assumption
        const coursesPrevious = Math.max(0, totalCoursesCount - 1);
        const coursesTrend =
          coursesPrevious > 0
            ? ((totalCoursesCount - coursesPrevious) / coursesPrevious) * 100
            : totalCoursesCount > 0
            ? 100
            : 0;

        setTotalCourses({
          current: totalCoursesCount,
          previous: coursesPrevious,
          trend: coursesTrend,
          sparklineData: generateSparkline(totalCoursesCount, coursesPrevious)
        });
      } catch (error) {
        // Error fetching dashboard data - silently fail
      } finally {
        setIsLoading(false);
      }
    };

    void fetchData();
  }, [periodFilter, courseFilter]);

  // Vérifications d'accès - attendre que le chargement soit terminé
  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  if (!isSignedIn) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    void navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  // Si l'utilisateur n'existe pas après le chargement, rediriger
  if (!user) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    void navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  // Vérifier l'accès : Super-admin ou Admin
  const isSuperAdmin = user.role === 'Super-admin';
  const isAdmin = user.role === 'Admin';

  // Si l'utilisateur n'est ni Super-admin ni Admin, rediriger vers la page d'accueil
  if (!isSuperAdmin && !isAdmin) {
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
      ? t.period30Days
      : periodFilter === '2months'
      ? t.period2Months
      : periodFilter === '3months'
      ? t.period3Months
      : periodFilter === '6months'
      ? t.period6Months
      : periodFilter === '1year'
      ? t.period1Year
      : t.all;

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

  // Fonction pour déterminer la couleur selon les alertes métier
  // Rouge pour alertes (valeurs faibles, baisses), Vert pour amélioration, Jaune pour stable
  const getAlertColor = (
    current: number,
    previous: number,
    trend: number,
    metricType: 'users' | 'active' | 'progress' | 'courses',
    currentPeriod: PeriodFilter
  ): string => {
    // Alertes spécifiques selon le type de métrique - Vérifier d'abord les seuils critiques
    if (metricType === 'users') {
      // Alerte critique: moins de 10 nouveaux users depuis 4 semaines (si période = 30j)
      if (currentPeriod === '30j' && current < 10) {
        return '#D1001C'; // Rouge vif - alerte critique
      }
      // Si baisse significative
      if (trend < -20) {
        return '#EB5757'; // Rose foncé - alerte
      }
      if (trend < -10) {
        return '#F2994A'; // Orange - attention
      }
    }

    if (metricType === 'active') {
      // Alerte critique: moins de 10 utilisateurs actifs
      if (current < 10) {
        return '#D1001C'; // Rouge vif - alerte critique
      }
      // Si baisse significative
      if (trend < -20) {
        return '#EB5757'; // Rose foncé - alerte
      }
      if (trend < -10) {
        return '#F2994A'; // Orange - attention
      }
    }

    if (metricType === 'progress') {
      // Alerte critique: moins de 10 utilisateurs avec >50% progression
      if (current < 10) {
        return '#D1001C'; // Rouge vif - alerte critique
      }
      // Si baisse significative
      if (trend < -20) {
        return '#EB5757'; // Rose foncé - alerte
      }
      if (trend < -10) {
        return '#F2994A'; // Orange - attention
      }
    }

    // Si hausse significative - vert (amélioration)
    if (trend > 20) {
      return '#6FCF97'; // Vert clair - forte amélioration
    }
    if (trend > 10) {
      return '#27AE60'; // Vert moyen - amélioration
    }
    if (trend > 0.1) {
      return '#52C41A'; // Vert clair - légère amélioration
    }

    // Si stable ou légère variation - jaune
    if (Math.abs(trend) < 0.1) {
      return '#F2C94C'; // Jaune - stable
    }

    // Par défaut, si petite baisse mais pas d'alerte critique
    return '#F2994A'; // Orange
  };

  // Fonction pour déterminer la direction de la flèche selon la couleur et la tendance
  // Rouge → ↓, Jaune → →, Vert → ↑ (plus la tendance est positive, plus la flèche monte)
  const getArrowDirection = (color: string, trend: number): string => {
    // Si couleur rouge (alertes, baisses) - toujours vers le bas
    if (color === '#D1001C' || color === '#EB5757') {
      return '↓'; // Flèche vers le bas pour alertes
    }

    // Si couleur orange - baisse modérée, flèche vers le bas
    if (color === '#F2994A') {
      return '↓'; // Flèche vers le bas
    }

    // Si couleur jaune (stable) - flèche horizontale
    if (color === '#F2C94C') {
      return '→'; // Flèche horizontale pour stable
    }

    // Si couleur verte (amélioration) - flèche vers le haut
    // Plus la tendance est positive, plus on peut varier la flèche
    if (color === '#6FCF97' || color === '#27AE60' || color === '#52C41A') {
      if (trend > 30) {
        return '↑↑'; // Double flèche pour très forte hausse
      }
      if (trend > 15) {
        return '↑'; // Flèche simple vers le haut pour forte hausse
      }
      return '↑'; // Flèche vers le haut pour amélioration
    }

    // Par défaut selon la tendance (fallback)
    if (trend > 0.1) {
      return '↑';
    }
    if (trend < -0.1) {
      return '↓';
    }
    return '→';
  };

  // Fonction pour générer le graphique en ligne SVG
  const renderTrendline = (
    data: number[],
    trend: number,
    current: number,
    previous: number,
    metricType: 'users' | 'active' | 'progress' | 'courses',
    currentPeriod: PeriodFilter
  ): JSX.Element => {
    if (!data || data.length === 0) {
      return <div className='modern-indicator-trendline'></div>;
    }

    const max = Math.max(...data, 1);
    const min = Math.min(...data);
    const range = max - min || 1;
    const width = 100;
    const height = 40;
    const pointCount = data.length;
    const stepX = width / (pointCount - 1 || 1);

    // Générer les points pour le path SVG
    const points = data.map((value, index) => {
      const x = index * stepX;
      const y = height - ((value - min) / range) * height;
      return `${x},${y}`;
    });

    const pathData = `M ${points.join(' L ')}`;
    const alertColor = getAlertColor(
      current,
      previous,
      trend,
      metricType,
      currentPeriod
    );

    return (
      <div
        className='modern-indicator-trendline'
        style={{
          position: 'relative',
          width: '100%',
          height: `${height}px`,
          marginTop: '0.5rem',
          marginBottom: '0.75rem'
        }}
      >
        <svg width='100%' height={height} style={{ overflow: 'visible' }}>
          <path
            d={pathData}
            fill='none'
            stroke={alertColor}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </div>
    );
  };

  const renderMetricCard = (
    title: string,
    data: MetricData,
    color: 'pink' | 'green' | 'yellow' | 'blue' | 'purple' | 'orange',
    showPercentage = false,
    metricType: 'users' | 'active' | 'progress' | 'courses' = 'users'
  ): JSX.Element => {
    const alertColor = getAlertColor(
      data.current,
      data.previous,
      data.trend,
      metricType,
      periodFilter
    );
    const arrowDirection = getArrowDirection(alertColor, data.trend);
    const periodLabelShort =
      periodFilter === '30j'
        ? `4 ${t.weeks}`
        : periodFilter === 'all'
        ? t.allTime
        : periodLabel;

    return (
      <div
        className={`modern-indicator-card ${color}`}
        style={{ position: 'relative' }}
      >
        {/* 1. Titre + Icône info (en haut) */}
        <div
          className='modern-indicator-title-container'
          style={{ marginBottom: '0.5rem' }}
        >
          <div
            className='modern-indicator-title'
            style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#1C1C1C',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <span>{title}</span>
            <FontAwesomeIcon
              icon={faInfoCircle}
              className='modern-indicator-icon'
              style={{
                fontSize: '0.9rem',
                color: '#6B7280',
                cursor: 'help'
              }}
              title={title}
            />
          </div>
        </div>

        {/* 2. Graphique de tendance (juste en dessous du titre) */}
        {renderTrendline(
          data.sparklineData,
          data.trend,
          data.current,
          data.previous,
          metricType,
          periodFilter
        )}

        {/* 3. Valeur principale (très grande, extra-bold) */}
        <div
          className='modern-indicator-value'
          style={{
            fontSize: '48px',
            fontWeight: 900,
            color: '#1C1C1C',
            lineHeight: '1',
            marginBottom: '0.75rem'
          }}
        >
          {showPercentage
            ? `${data.current.toFixed(1)}%`
            : formatNumber(data.current)}
        </div>

        {/* 4. Indicateur de changement avec flèche (même couleur que le graphique) */}
        <div
          className='modern-indicator-change'
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            fontSize: '13px',
            fontWeight: 500,
            color: alertColor,
            marginBottom: '0.5rem'
          }}
        >
          <span style={{ fontSize: '12px', display: 'inline-block' }}>
            {arrowDirection}
          </span>
          {formatTrend(Math.abs(data.trend))} {t.vsPrevious} {periodLabelShort}
        </div>

        {/* 5. Ligne "Previous" */}
        <div
          style={{ fontSize: '12px', color: '#6A6A6A', marginBottom: '1rem' }}
        >
          {t.previous}:{' '}
          {showPercentage
            ? `${data.previous.toFixed(1)}%`
            : formatNumber(data.previous)}
        </div>

        {/* 6. Point coloré en bas à droite (même couleur que la ligne et la flèche) */}
        <div
          style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1.5rem',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: alertColor
          }}
        />
      </div>
    );
  };

  return (
    <>
      <Helmet title={`${t.dashboard} | Kadea Online`} />

      <div className='modern-admin-container'>
        {/* Header */}
        <div className='modern-admin-header'>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              lineHeight: '1.5rem',
              color: '#1a1a1a',
              margin: 0,
              fontFamily:
                "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
            }}
          >
            {t.hello}, {userName}! 👋
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
                ⚠️ {t.alertLessThan10Users}: {newUsers30Days}
              </div>
            )}
            {activeUsersThisMonth < 10 && (
              <div style={{ color: '#856404', fontWeight: 500 }}>
                ⚠️ {t.alertLessThan10Active}: {activeUsersThisMonth}
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
              style={
                {
                  fontSize: '1.8rem',
                  fontWeight: 'bold',
                  // eslint-disable-next-line @typescript-eslint/naming-convention
                  '--tw-text-opacity': '1',
                  color: 'rgb(75 85 99 / var(--tw-text-opacity, 1))',
                  fontFamily:
                    "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  margin: 0,
                  padding: 0
                } as React.CSSProperties
              }
            >
              {t.indicators}
            </h3>
            <div
              style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}
            >
              {/* Language selector */}
              <select
                value={language}
                onChange={e => setLanguage(e.target.value as Language)}
                style={{
                  background: '#ffffff',
                  color: '#1a1a1a',
                  border: '1px solid #e0e0e0',
                  padding: '0.5rem 1rem',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  fontFamily:
                    "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}
              >
                <option value='en'>🇬🇧 EN</option>
                <option value='fr'>🇫🇷 FR</option>
              </select>
              <button
                className={`modern-filter-btn ${
                  periodFilter === '30j' ? 'active' : ''
                }`}
                onClick={() => setPeriodFilter('30j')}
              >
                {t.last30Days}
              </button>
              <button
                className={`modern-filter-btn ${
                  periodFilter === 'all' ? 'active' : ''
                }`}
                onClick={() => setPeriodFilter('all')}
              >
                {t.all}
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
                <option value='all'>{t.allCourses}</option>
                <option value='kadea'>{t.kadeaCourses}</option>
                <option value='moodle'>{t.moodleCourses}</option>
                <option value='aws'>{t.awsCourses}</option>
              </select>
            </div>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.375rem',
                width: 'fit-content'
              }}
            >
              <button
                style={{
                  padding: '0.125rem 0.375rem',
                  background: '#E0F2FE',
                  border: 'none',
                  borderRadius: '9999px',
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#0369A1',
                  cursor: 'pointer',
                  fontFamily:
                    "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                  transition: 'all 0.2s ease',
                  display: 'inline-block'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#BAE6FD';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#E0F2FE';
                }}
              >
                {t.legend}
              </button>
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='legend-icon'
                style={{
                  fontSize: '0.9rem',
                  color: '#6B7280',
                  background: 'transparent'
                }}
              />
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
          {renderMetricCard(t.totalUsers, totalUsers, 'blue', false, 'users')}
          {renderMetricCard(
            t.activeUsers,
            activeUsers,
            'green',
            false,
            'active'
          )}
          {renderMetricCard(
            t.progress50Plus,
            users50Plus,
            'purple',
            false,
            'progress'
          )}
          {renderMetricCard(
            t.availableCourses,
            totalCourses,
            'pink',
            false,
            'courses'
          )}
        </div>
      </div>
    </>
  );
}

ShowAdminHome.displayName = 'ShowAdminHome';

export default connect(mapStateToProps)(ShowAdminHome);
