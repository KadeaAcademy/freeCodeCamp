import { Grid } from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import PathCard from '../components/PathCard/path-card';

import envData from '../../../config/env.json';
import CourseCard from '../components/CourseCard/course-card';
import LaptopIcon from '../assets/images/laptop.svg';
import AlgoIcon from '../assets/images/algorithmIcon.svg';
import PhBookBookmark from '../assets/images/ph-book-bookmark-thin.svg';
import awsLogo from '../assets/images/aws-logo.png';

import LaediesActIcon from '../assets/images/partners/we-act-logo.png';
// import NewBadge from '../assets/images/new.png';
import { createFlashMessage } from '../components/Flash/redux';
import {
  Loader,
  Spacer,
  renderCourseCardSkeletons
} from '../components/helpers';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../redux';

import { User } from '../redux/prop-types';
import {
  getExternalResource,
  getMoodleCourses,
  getRavenResources,
  getRavenPathResources
} from '../utils/ajax';
import {
  convertTime,
  convertTimestampToTime,
  paginate
} from '../utils/allFunctions';

import '../components/CourseFilter/course-filter.css';
import CourseFilter from '../components/CourseFilter/course-filter';
import CoursesCategoryCard from '../components/CoursesCategoryCard/courses-category-card';
import {
  allDataCourses,
  categoryCours,
  coursesMoodle,
  coursesRaven,
  myAllDataCourses,
  pathRaven,
  valueOfCurrentCategory
} from '../redux/atoms';
import { UnifiedCourse } from '../redux/types';

const { moodleApiBaseUrl, moodleApiToken, moodleBaseUrl } = envData;

// TODO: update types for actions
export interface CoursesProps {
  createFlashMessage: typeof createFlashMessage;
  // isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

export type MoodleCourseCategory = {
  id: number;
  name: string;
  idnumber: string;
  description: string;
  descriptionformat: number;
  parent: number;
  sortorder: number;
  coursecount: number;
  visible: number;
  visibleold: number;
  timemodified: number;
  depth: number;
  path: string;
  theme: string;
};

export type MoodleCourse = {
  id: number;
  shortname: string;
  categoryid: number;
  categorysortorder: number;
  fullname: string;
  displayname: string;
  summary: string;
  visible: number;
  format: string;
  timecreated: number;
  timemodified: number;
  langue: string;
  duration: number;
  level: string;
  type: string;
};

export type MoodleCoursesCatalogue = {
  result: MoodleCourse[][];
  size: number;
};
export type RavenCourse = {
  learningobjectid: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  launch_url: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  short_description: string;
  createddate: string;
  updateddate: string;
  contenttype: string;
  duration: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  long_description: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  category?: Category[];
  // eslint-disable-next-line @typescript-eslint/naming-convention
  skill_level: string;
};

type Tag = {
  title: string;
};

type Category = {
  tags?: Tag[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars

export interface RavenFetchCoursesDto {
  apiKey: string;
  token: string;
  currentPage: number;
  fromDate: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  valid_to: string;
}

type Courses = MoodleCourse | RavenCourse;

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User) => ({
    showLoading,
    user
    // isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

export const scrollTo = (top: number) => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth'
    });
  }
};

export function Courses(props: CoursesProps): JSX.Element {
  const {
    // isSignedIn,
    showLoading
    // user: { name, phone }
  } = props;
  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  // const [programmingCategory, setProgrammingCategory] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 900
  );
  const [courseCategories, setCourseCategories] = useRecoilState<
    MoodleCourseCategory[] | null | undefined
  >(categoryCours);
  const [currentCategory, setCurrentCategory] = useRecoilState(
    valueOfCurrentCategory
  );
  const [dataForAllCourses, setDataForallCourse] =
    useRecoilState<UnifiedCourse[]>(allDataCourses);
  const allDataofCourses = useRecoilValue(allDataCourses);
  const [dataRaven, setDataRaven] = useRecoilState<
    RavenCourse[] | null | undefined
  >(coursesRaven);
  const [dataRavenPath, setDataRavenPath] =
    useRecoilState<RavenCourse[]>(pathRaven);
  const [dataMoodle, setDataMoodle] = useRecoilState<
    MoodleCoursesCatalogue | null | undefined
  >(coursesMoodle);
  const setAllaDataCoursProject = useSetRecoilState(myAllDataCourses);

  const getMoodleCourseCategory = async () => {
    const moodleCourseCategories = await getExternalResource<
      MoodleCourseCategory[]
    >(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_course_get_categories&moodlewsrestformat=json`
    );

    if (moodleCourseCategories) {
      setCourseCategories(
        moodleCourseCategories?.filter(category => category.coursecount > 0)
      );
    }
  };

  const allCourses: (MoodleCourse | RavenCourse)[] = useMemo(
    () => [
      ...(dataRaven || []),
      ...(dataMoodle?.result ? dataMoodle.result.flat() : []),
      ...(dataRavenPath ? dataRavenPath : [])
    ],
    [dataRaven, dataMoodle, dataRavenPath]
  );

  const {
    paginatedData,
    totalPages,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    currentPage: page
  } = paginate(allDataofCourses, currentPage);

  const onNavigateForward = () => {
    if (currentPage < totalPages && currentPage > 0) {
      setCurrentPage(currentPage + 1);
      setIsDataOnLoading(!isDataOnLoading);
    } else {
      setCurrentPage(currentPage);
    }
  };

  const onNavigueteBackward = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setIsDataOnLoading(!isDataOnLoading);
    } else {
      setCurrentPage(currentPage);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentPage = 1;
        const getMoodle = await getMoodleCourses();
        setDataMoodle(getMoodle);
        const getRaven = await getRavenResources(currentPage);
        setDataRaven(getRaven as RavenCourse[]);
        setAllaDataCoursProject(getRaven as RavenCourse[]);
        const getRavenPath = await getRavenPathResources(currentPage);
        setDataRavenPath(getRavenPath as unknown as RavenCourse[]);
        setAllaDataCoursProject(getRavenPath as unknown as RavenCourse[]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    void fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    setDataForallCourse(allCourses);
  }, [allCourses, dataForAllCourses, setDataForallCourse]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isDataOnLoading) {
        setIsDataOnLoading(false);
      }
    }, 3000);
    return () => {
      setIsDataOnLoading(true); // cleanup useEffect to perform a React state update
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      showFilter && setScreenWidth(window.innerWidth);
    });
  }

  useEffect(() => {
    setCurrentCategory(null);
  }, [currentPage, setCurrentCategory]);

  useEffect(() => {
    if (screenWidth > 990) setShowFilter(true);
    else setShowFilter(false);
  }, [screenWidth]);

  useEffect(() => {
    void getMoodleCourseCategory();

    dataRaven?.length == 0
      ? setIsDataOnLoading(false)
      : setIsDataOnLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      <Helmet title={`Nos cours | Kadea Online`} />
      <Grid className='bg-light'>
        <main>
          <div className=''>
            <Spacer size={1} />

            <button
              onClick={() => {
                setShowFilter(e => !e);
              }}
              className='show-filter-button'
            >
              <span>Filtrer</span>
              <svg
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g>
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z' />
                </g>
              </svg>
            </button>

            <div className='card-filter-container'>
              {showFilter && (
                <CourseFilter
                  setRavenPath={setDataRavenPath}
                  screenWidth={screenWidth}
                  setRavenCourses={setDataRaven}
                  setMoodleCourses={setDataMoodle}
                  setShowFilter={setShowFilter}
                  setIsDataOnLoading={setIsDataOnLoading}
                  courseCategories={courseCategories}
                  currentCategory={currentCategory}
                  setCurrentCategory={setCurrentCategory}
                  setCurrentPage={setCurrentPage}
                />
              )}

              <div
                className={
                  showFilter
                    ? 'card-courses-detail-container  hide_on_mobile'
                    : 'card-courses-detail-container  '
                }
              >
                <div>
                  <h2 className='big-subheading'>Explorer notre catalogue</h2>
                </div>
                <Spacer />

                <CoursesCategoryCard
                  courseCategories={courseCategories}
                  setRavenPath={setDataRavenPath}
                  setCurrentCategory={setCurrentCategory}
                  currentCategory={currentCategory}
                  screenWidth={setScreenWidth}
                  setCurrentPage={setCurrentPage}
                  setIsDataOnLoading={setIsDataOnLoading}
                  setMoodleCourses={setDataMoodle}
                  setRavenCourses={setDataRaven}
                />

                <div className='course__number'>
                  <p>Parcourir le catalogue complet</p>
                  <span>
                    {paginatedData.length > 0 &&
                      paginatedData.length +
                        (currentCategory == null || currentCategory == -1
                          ? 2
                          : 0)}{' '}
                    cours
                  </span>
                </div>

                {!isDataOnLoading ? (
                  <div className='card-course-detail-container'>
                    {currentPage == 1 &&
                      (currentCategory == null || currentCategory == -1) && (
                        <>
                          <CourseCard
                            level='debutant'
                            language='French'
                            icon={LaptopIcon}
                            sponsorIcon={LaediesActIcon}
                            alt=''
                            // name={name}
                            // phone={phone}
                            isAvailable={true}
                            // isSignedIn={isSignedIn}
                            title='Responsive Web Design'
                            buttonText='Suivre le cours'
                            link='/learn/responsive-web-design/'
                            description={`
                          Dans ce cours, tu apprendras les langages que les développeurs
                          utilisent pour créer des pages Web : HTML (Hypertext Markup Language)
                          pour le contenu, et CSS (Cascading Style Sheets) pour la conception.
                          Enfin, tu apprendras à créer des pages Web adaptées à différentes tailles d'écran.
                        `}
                          />
                          <CourseCard
                            level='debutant'
                            language='French'
                            icon={AlgoIcon}
                            alt=''
                            isAvailable={true}
                            // isSignedIn={isSignedIn}
                            // phone={phone}
                            // name={name}
                            title='JavaScript Algorithms and Data Structures'
                            buttonText='Suivre le cours'
                            link='/learn/javascript-algorithms-and-data-structures'
                            description={`Alors que HTML et CSS contrôlent le contenu et le style d'une page,
                          JavaScript est utilisé pour la rendre interactive. Dans le cadre du
                          cours JavaScript Algorithm and Data Structures, tu apprendras
                          les principes fondamentaux de JavaScript, etc.`}
                          />
                        </>
                      )}
                    {paginatedData.length > 0
                      ? paginatedData.map((course, index) => {
                          if ('launch_url' in course) {
                            const firstCategory = course.category?.[0];
                            const language =
                              firstCategory?.tags?.[0]?.title || 'Unknown';

                            if (course.long_description) {
                              return (
                                <PathCard
                                  language={language}
                                  key={course.name}
                                  icon={awsLogo}
                                  isAvailable={true}
                                  // isSignedIn={isSignedIn}
                                  title={`${index + 1}. ${course.name}`}
                                  buttonText='Suivre le cours'
                                  link={course.launch_url}
                                  description={course.long_description}
                                  duration={convertTime(course.duration)}
                                  level={course.skill_level}
                                />
                              );
                            } else {
                              return (
                                <CourseCard
                                  level={course.skill_level}
                                  language={language}
                                  key={index.toString()}
                                  icon={awsLogo}
                                  isAvailable={true}
                                  // isSignedIn={isSignedIn}
                                  title={`${index + 1}. ${course.name}`}
                                  buttonText='Suivre le cours'
                                  link={course.launch_url}
                                  description={course.short_description}
                                  duration={convertTime(course.duration)}
                                />
                              );
                            }
                          } else {
                            return (
                              <CourseCard
                                level='debutant'
                                language='French'
                                key={`${index}-${course.id}`}
                                icon={PhBookBookmark} // Remplacer par le chemin réel de l'image
                                isAvailable={course.visible === 1}
                                // isSignedIn={isSignedIn}
                                title={course.displayname}
                                buttonText='Suivre le cours'
                                link={`${moodleBaseUrl}/course/view.php?id=${course.id}`}
                                description={course.summary}
                                duration={convertTimestampToTime(
                                  course.timecreated
                                )}
                              />
                            );
                          }
                        })
                      : ''}
                  </div>
                ) : (
                  <div className='card-course-detail-container'>
                    {renderCourseCardSkeletons(6)}
                  </div>
                )}

                <div className='pagination-container'>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className='pagination-chevron'
                    onClick={() => onNavigueteBackward()}
                  />
                  <span className='pagination__number'>
                    {currentPage}/{totalPages > 0 ? totalPages : 1}
                  </span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className='pagination-chevron'
                    onClick={() => onNavigateForward()}
                  />
                </div>
                <Spacer size={2} />
              </div>
            </div>
          </div>
        </main>
      </Grid>
    </>
  );
}

Courses.displayName = 'Courses';

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
