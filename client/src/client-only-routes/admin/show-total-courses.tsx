import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import validator from 'validator';
// eslint-disable-next-line import/no-unresolved
import envData from '../../../../config/env.json';
import { createFlashMessage } from '../../components/Flash/redux';
import { Loader } from '../../components/helpers';
import { User } from '../../redux/prop-types';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector
} from '../../redux';
import {
  getKadeaCourses,
  getMoodleCourses,
  getAwsPath
} from '../../utils/ajax';
import './admin-global.css';
import './modern-admin.css';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const { apiLocation, homeLocation } = envData;

type CourseFilter = 'all' | 'kadea' | 'moodle' | 'aws';

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

interface ShowTotalCoursesProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  showLoading: boolean;
  user: User;
  filter?: string;
  path?: string;
  location?: { search: string };
}

interface Course {
  id?: string;
  title?: string;
  name?: string;
  description?: string;
  type?: string;
  link?: string;
}

export function ShowTotalCourses(props: ShowTotalCoursesProps): JSX.Element {
  const { showLoading, isSignedIn, user, filter, location } = props;
  const [kadeaCourses, setKadeaCourses] = useState<Course[]>([]);
  const [moodleCourses, setMoodleCourses] = useState<Course[]>([]);
  const [awsCourses, setAwsCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Extraire le paramètre filter de l'URL si présent
  const urlParams = new URLSearchParams(location?.search || '');
  const filterFromUrl = urlParams.get('filter') as CourseFilter | null;
  const [selectedFilter, setSelectedFilter] = useState<CourseFilter>(
    filterFromUrl || (filter as CourseFilter) || 'all'
  );

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setIsLoading(true);
        const [kadea, moodle, aws] = await Promise.all([
          getKadeaCourses().catch(() => []),
          getMoodleCourses().catch(() => []),
          getAwsPath().catch(() => [])
        ]);

        setKadeaCourses(Array.isArray(kadea) ? kadea : []);
        setMoodleCourses(Array.isArray(moodle) ? moodle : []);
        setAwsCourses(Array.isArray(aws) ? aws : []);
      } catch (error) {
        console.error('Error fetching courses:', error);
        setKadeaCourses([]);
        setMoodleCourses([]);
        setAwsCourses([]);
      } finally {
        setIsLoading(false);
      }
    };
    void fetchCourses();
  }, []);

  const getFilteredCourses = (): Course[] => {
    switch (selectedFilter) {
      case 'kadea':
        return kadeaCourses;
      case 'moodle':
        return moodleCourses;
      case 'aws':
        return awsCourses;
      case 'all':
      default:
        return [...kadeaCourses, ...moodleCourses, ...awsCourses];
    }
  };

  const getCourseType = (course: Course): string => {
    if (kadeaCourses.includes(course)) return 'Kadea';
    if (moodleCourses.includes(course)) return 'Moodle';
    if (awsCourses.includes(course)) return 'AWS';
    return 'Inconnu';
  };

  if (showLoading || isLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    void navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  const isSuperAdmin = validator.equals(user.role, 'Super-admin');
  const isAdmin = validator.equals(user.role, 'Admin');
  const isJudahEmail = user.email === 'judah@kadea.co';

  if (!isSuperAdmin && !isAdmin && !isJudahEmail) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    void navigate(`${homeLocation}`);
    return <Loader fullScreen={true} />;
  }

  const filteredCourses = getFilteredCourses();
  const totalCount =
    selectedFilter === 'all'
      ? kadeaCourses.length + moodleCourses.length + awsCourses.length
      : filteredCourses.length;

  return (
    <>
      <Helmet title={`Total Cours | Kadea Online`} />
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
          <h1 className='modern-admin-title'>Total Cours</h1>
          <div className='modern-filter-buttons' style={{ marginTop: '1rem' }}>
            <select
              value={selectedFilter}
              onChange={e => {
                const newFilter = e.target.value as CourseFilter;
                setSelectedFilter(newFilter);
                void navigate(
                  `/admin/all-members/total-courses?filter=${newFilter}`
                );
              }}
              className='modern-filter-btn'
              style={{ padding: '0.5rem 1rem' }}
            >
              <option value='all'>Tous</option>
              <option value='kadea'>Kadea</option>
              <option value='moodle'>Moodle</option>
              <option value='aws'>AWS</option>
            </select>
          </div>
        </div>

        <div className='modern-admin-content'>
          <p style={{ marginBottom: '1.5rem', color: '#6c757d' }}>
            {totalCount} cours au total
            {selectedFilter === 'all' && (
              <span style={{ marginLeft: '1rem' }}>
                (K: {kadeaCourses.length} | M: {moodleCourses.length} | A:{' '}
                {awsCourses.length})
              </span>
            )}
          </p>

          <div className='modern-table-container'>
            <table className='modern-table'>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Titre</th>
                  <th>Description</th>
                  <th>Lien</th>
                </tr>
              </thead>
              <tbody>
                {filteredCourses.length === 0 ? (
                  <tr>
                    <td
                      colSpan={4}
                      style={{ textAlign: 'center', padding: '2rem' }}
                    >
                      Aucun cours trouvé
                    </td>
                  </tr>
                ) : (
                  filteredCourses.map((course, index) => (
                    <tr key={course.id || course.link || index}>
                      <td>{getCourseType(course)}</td>
                      <td>{course.title || course.name || 'N/A'}</td>
                      <td>{course.description || 'N/A'}</td>
                      <td>
                        {course.link ? (
                          <a
                            href={course.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{ color: '#007bff' }}
                          >
                            Voir le cours
                          </a>
                        ) : (
                          'N/A'
                        )}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

ShowTotalCourses.displayName = 'ShowTotalCourses';

export default connect(mapStateToProps, mapDispatchToProps)(ShowTotalCourses);
