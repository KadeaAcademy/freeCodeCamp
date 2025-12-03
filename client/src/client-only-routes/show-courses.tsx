import { Grid } from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect, useMemo } from 'react';
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { useRecoilState } from 'recoil';

import envData from '../../../config/env.json';

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

import { ProgramationCourses, User } from '../redux/prop-types';
import {
  dataForprogramation,
  getAwsPath,
  getDataFromDb,
  getExternalResource,
  getMoodleCourses
} from '../utils/ajax';
import { paginate } from '../utils/allFunctions';

import '../components/CourseFilter/course-filter.css';
import CourseFilter from '../components/CourseFilter/course-filter';
import CoursesCategoryCard from '../components/CoursesCategoryCard/courses-category-card';
import {
  allDataCourses,
  categoryCours,
  centraliseRavenData,
  myDataMoodle,
  valueOfCurrentCategory
} from '../redux/atoms';
import { UnifiedCourse } from '../redux/types';
import PaginationControls from './catalogue/pagination';
import ShowProgrammationCourses from './catalogue/show-programmation-courses';
import ShowOnlyMoodleCourses from './catalogue/show-only-moodle-courses';
import ShowOnlyRavenCouses from './catalogue/show-only-raven-courses';
import usePaginationHandlers from './catalogue/paginationHandlers';

const { moodleApiBaseUrl, moodleApiToken } = envData;

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
  roles: string;
  enrolementCount: number;
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
  const [stateProgrammation, setProgramamationState] = useState<
    ProgramationCourses[] | null
  >(null);
  const [currentCategory, setCurrentCategory] = useRecoilState(
    valueOfCurrentCategory
  );
  const [allDataofCourses, setAllDataOfCourses] =
    useRecoilState(allDataCourses);

  const [allDataRaven, setGetAllRavenData] =
    useRecoilState(centraliseRavenData);
  const [allMoodleData, setGetAllDataMoodle] = useRecoilState(myDataMoodle);

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

  const allCourses: (MoodleCourse | RavenCourse | ProgramationCourses)[] =
    useMemo(
      () => [
        ...(stateProgrammation ? stateProgrammation : []),

        ...(allDataRaven || []),
        ...(allMoodleData?.result ? allMoodleData.result.flat() : [])
      ],
      [allDataRaven, allMoodleData?.result, stateProgrammation]
    );

  const {
    paginatedData,
    totalPages,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    currentPage: page
  } = paginate(allDataofCourses, currentPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pathRavenCourses =
          (await getDataFromDb()) as unknown as RavenCourse[];
        const ravenDataWhenEmptyDb =
          (await getAwsPath()) as unknown as RavenCourse[];
        if (pathRavenCourses.length > 0) {
          setGetAllRavenData(pathRavenCourses);
        } else {
          setGetAllRavenData(ravenDataWhenEmptyDb);
        }
        // Si pas de données stockées, on fait les appels API pour récupérer les données
        const [moodleData, ravenData, ravenPathData] = await Promise.all([
          getMoodleCourses(),
          getDataFromDb(),
          getAwsPath()
        ]);

        setProgramamationState(dataForprogramation);
        setAllDataOfCourses(dataForprogramation);

        if (moodleData) {
          setGetAllDataMoodle(moodleData);
          setAllDataOfCourses(moodleData as unknown as UnifiedCourse[]);
        }

        if (ravenData || ravenPathData) {
          const unifiedRavenData = [
            ...((ravenData as unknown as RavenCourse[]) || []),
            ...((ravenPathData as unknown as RavenCourse[]) || [])
          ];
          setGetAllRavenData(unifiedRavenData);
          setAllDataOfCourses(unifiedRavenData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsDataOnLoading(false);
      }
    };

    void fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setAllDataOfCourses(allCourses);
  }, [allCourses, allDataofCourses, setAllDataOfCourses]);

  const { onNavigateForward, onNavigueteBackward, onNavigateToPage } =
    usePaginationHandlers({
      currentPage,
      totalPages,
      setCurrentPage,
      setIsDataOnLoading
    });

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
          <div>
            <Spacer size={1} />

            <button
              onClick={() => {
                setShowFilter(prev => !prev);
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
                  setRavenPath={setGetAllRavenData}
                  screenWidth={screenWidth}
                  setRavenCourses={setGetAllRavenData}
                  setMoodleCourses={allMoodleData}
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
                    ? 'card-courses-detail-container hide_on_mobile'
                    : 'card-courses-detail-container'
                }
              >
                <div>
                  <h2 className='big-subheading'>Explorer notre catalogue</h2>
                </div>
                <Spacer />

                <CoursesCategoryCard
                  courseCategories={courseCategories}
                  setRavenPath={setGetAllRavenData}
                  setCurrentCategory={setCurrentCategory}
                  currentCategory={currentCategory}
                  screenWidth={screenWidth}
                  setCurrentPage={setCurrentPage}
                  setIsDataOnLoading={setIsDataOnLoading}
                  setMoodleCourses={setGetAllDataMoodle}
                  setRavenCourses={setGetAllRavenData}
                />

                <div className='course__number'>
                  <p>Parcourir le catalogue complet</p>
                  <span>
                    {paginatedData.length > 0 || !isDataOnLoading
                      ? paginatedData.length
                      : '...'}{' '}
                    cours
                  </span>
                </div>

                {!isDataOnLoading ? (
                  <div className='card-course-detail-container'>
                    <ShowProgrammationCourses
                      courses={paginatedData as Courses[]}
                    />
                    <ShowOnlyMoodleCourses
                      courses={paginatedData as Courses[]}
                    />
                    <ShowOnlyRavenCouses courses={paginatedData as Courses[]} />
                  </div>
                ) : (
                  <div className='card-course-detail-container'>
                    {renderCourseCardSkeletons(6)}
                  </div>
                )}

                <div className='pagination-container'>
                  <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNavigateForward={onNavigateForward}
                    onNavigateToPage={onNavigateToPage}
                    onNavigueteBackward={onNavigueteBackward}
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
