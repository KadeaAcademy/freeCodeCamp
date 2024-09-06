import React, { useState } from 'react';
import './course-filter.css';

import { navigate } from 'gatsby';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useLocation } from '@reach/router';
import {
  addRavenTokenToLocalStorage,
  generateRavenTokenAcces,
  getAwsCourses,
  getExternalResource,
  getRavenTokenDataFromLocalStorage,
  getAwsPath
} from '../../utils/ajax';
import envData from '../../../../config/env.json';

import {
  MoodleCourse,
  MoodleCourseCategory,
  MoodleCoursesCatalogue,
  scrollTo
} from '../../client-only-routes/show-courses';
import { Spacer, splitArray } from '../helpers';
import sortCourses from '../helpers/sort-course';
import routes from '../../utils/routes';
import {
  myAllDataCourses,
  titleOfCategorieValue,
  valueOfCurrentCategory
} from '../../redux/atoms';
import OtherFilter from './other-filter';
import FilterByType from './filter-by-type';
import FilterByLevel from './filter-by-level';
import FilterByDuration from './filter-by-duration';

type MoodleCoursesFiltered = {
  courses: MoodleCourse[] | null;
  warnings: [];
};
type RavenCourse = {
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
};
interface RavenTokenData {
  token: string;
  expiresIn: number;
  validFrom: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  valid_to: string;
}
interface RavenFetchCoursesDto {
  apiKey: string;
  token: string;
  currentPage: number;
  fromDate: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  valid_to: string;
}

const { moodleApiBaseUrl, moodleApiToken, ravenAwsApiKey } = envData;

const CourseFilter = ({
  setRavenCourses,
  setRavenPath,
  setMoodleCourses,
  setIsDataOnLoading,
  setShowFilter,
  screenWidth,
  courseCategories,
  setCurrentCategory,
  setCurrentPage
}: {
  setMoodleCourses: React.Dispatch<
    React.SetStateAction<MoodleCoursesCatalogue | null | undefined>
  >;
  setRavenCourses: React.Dispatch<
    React.SetStateAction<RavenCourse[] | null | undefined>
  >;

  setIsDataOnLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setRavenPath: React.Dispatch<React.SetStateAction<RavenCourse[] | null>>;

  // setProgrammingCategory: React.Dispatch<React.SetStateAction<boolean>>;
  screenWidth: number;
  courseCategories: MoodleCourseCategory[] | null | undefined;

  currentCategory: number | null;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
  const [showSubjectFilter, setShowSubjectFilter] = useState<boolean>(true);
  const setValueOfButton = useSetRecoilState(titleOfCategorieValue);
  const [currentCurrent, setCurrentCurrent] = useRecoilState(
    valueOfCurrentCategory
  );

  const location = useLocation();

  const setValueOfAllDataRessoures = useSetRecoilState(myAllDataCourses);

  const filterByCategory = async (categoryId: number) => {
    setIsDataOnLoading(true);
    const moodleCourseFiltered: MoodleCoursesFiltered | null =
      await getExternalResource<MoodleCoursesFiltered>(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_course_get_courses_by_field&field=category&value=${categoryId}&moodlewsrestformat=json`
      );
    setIsDataOnLoading(false);

    const splitCourses: MoodleCoursesCatalogue | null | undefined =
      moodleCourseFiltered?.courses != null
        ? splitArray<MoodleCourse>(
            moodleCourseFiltered.courses.filter(
              moodleCourse => moodleCourse.visible == 1
            ),
            4
          )
        : null;
    //Order courses by their publication date
    const sortedCourses = sortCourses(splitCourses);

    setMoodleCourses(sortedCourses);
  };

  const getMoodleCourses = async () => {
    setIsDataOnLoading(true);
    const moodleCatalogue = await getExternalResource<MoodleCourse[]>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_course_get_courses&moodlewsrestformat=json`
    );

    const splitCourses: MoodleCoursesCatalogue | null =
      moodleCatalogue != null
        ? splitArray<MoodleCourse>(
            moodleCatalogue.filter(moodleCourse => {
              return moodleCourse.visible == 1 && moodleCourse.format != 'site';
            }),
            4
          )
        : null;
    setIsDataOnLoading(false);

    //Order courses by their publication date
    const sortedCourses = sortCourses(splitCourses);

    if (moodleCatalogue != null) {
      setMoodleCourses(sortedCourses);
    } else {
      setMoodleCourses(null);
    }
  };
  const getRavenResourcesPath = async () => {
    await getRavenToken();
    const ravenLocalToken = getRavenTokenDataFromLocalStorage();
    const ravenData: RavenFetchCoursesDto = {
      apiKey: ravenAwsApiKey,
      token: ravenLocalToken?.token || '',
      currentPage: 1,
      fromDate: '01-01-2023',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      valid_to: '06-24-2024'
    };
    const getReveanCourses = await getAwsPath(ravenData);
    setRavenPath(getReveanCourses as unknown as RavenCourse[]);

    if (getRavenCourses === undefined || getRavenCourses.length < 0) {
      setIsDataOnLoading(false);
    }
  };

  const getRavenCourses = async () => {
    await getRavenToken();

    const ravenLocalToken = getRavenTokenDataFromLocalStorage();
    const ravenData: RavenFetchCoursesDto = {
      apiKey: ravenAwsApiKey,
      token: ravenLocalToken?.token || '',
      currentPage: 1,
      fromDate: '01-01-2023',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      valid_to: '06-24-2024'
    };
    setIsDataOnLoading(true);
    const courses = (await getAwsCourses(ravenData)) as RavenCourse[];

    if (courses && courses.length !== 0) {
      setRavenCourses(courses);
      setIsDataOnLoading(false);
    } else if (courses === undefined || courses.length < 0) {
      setIsDataOnLoading(false);
    }
  };

  const getRavenToken = async () => {
    const ravenLocalToken = getRavenTokenDataFromLocalStorage();

    if (ravenLocalToken === null) {
      const generateRavenToken = await generateRavenTokenAcces();

      if (generateRavenToken) {
        addRavenTokenToLocalStorage(generateRavenToken as RavenTokenData);
      }
    }
  };

  return (
    <div
      className={
        location.pathname == '/catalogue'
          ? 'filter-container_hidden-scrol'
          : 'filter-container'
      }
    >
      <div className='main-title-filter-container'>
        <h2 className='main-title-filter'>Filtrer par :</h2>
        <svg
          onClick={() => {
            setShowFilter(e => !e);
          }}
          width='30px'
          height='30px'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <path d='M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z'></path>
        </svg>
      </div>
      <details className='filter-details-container' open>
        <summary
          onClick={() => setShowSubjectFilter(e => !e)}
          className='filter-title-container'
        >
          <p className='filter-title'>Sujets</p>
          {showSubjectFilter == true ? (
            <svg
              width='30px'
              height='30px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='24' height='24' fill='white' />
              <path d='M7 14.5L12 9.5L17 14.5' stroke='#000000' />
            </svg>
          ) : (
            <svg
              width='30px'
              height='30px'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect width='24' height='24' fill='white' />
              <path
                d='M17 9.5L12 14.5L7 9.5'
                stroke='#000000'
                // stroke-linecap='round'
                // stroke-linejoin='round'
              />
            </svg>
          )}
        </summary>
        <ul className=' filter-items-container '>
          {courseCategories && (
            <button
              className={`filter-button ${
                currentCurrent == null ? 'selected-category' : ''
              }`}
              onClick={() => {
                void (async () => {
                  if (location.pathname === '/catalogue') {
                    window.location.reload();
                  } else {
                    void navigate('/catalogue');
                  }
                  setValueOfAllDataRessoures([]);
                  await getMoodleCourses();
                  await getRavenCourses();
                  await getRavenResourcesPath();
                  setCurrentPage(1);
                  setCurrentCategory(null);
                  setCurrentCurrent(null);

                  // setProgrammingCategory(true);
                  scrollTo(130);
                  if (screenWidth < 990) setShowFilter(e => !e);
                })();
              }}
            >
              Tous
            </button>
          )}

          {courseCategories && (
            <button
              className={`filter-button ${
                currentCurrent == -1 ? 'selected-category' : ''
              }`}
              onClick={() => {
                void (() => {
                  setCurrentCurrent(-1);
                  setValueOfButton('Programmation');
                  setValueOfAllDataRessoures([]);
                  void navigate(routes.catalogue.programmation);
                  setMoodleCourses(null);
                  setRavenCourses(null);
                  setRavenPath(null);
                  scrollTo(130);
                  if (screenWidth < 990) setShowFilter(e => !e);
                })();
              }}
            >
              Programmation
            </button>
          )}
          {courseCategories && (
            <button
              className={`filter-button ${
                currentCurrent == -2 ? 'selected-category' : ''
              }`}
              onClick={() => {
                void (async () => {
                  setCurrentCurrent(-2);
                  setValueOfButton('Amazon Web Service');
                  setValueOfAllDataRessoures([]);
                  void navigate(routes.catalogue.aws);
                  // setCurrentPage(1);
                  // setProgrammingCategory(true);
                  setMoodleCourses(null);
                  await getRavenCourses();
                  await getRavenResourcesPath();
                  scrollTo(130);
                  if (screenWidth < 990) setShowFilter(e => !e);
                })();
              }}
            >
              Amazon Web Service
            </button>
          )}

          {courseCategories?.map((course, index) => {
            return (
              <button
                key={index}
                className={`filter-button ${
                  currentCurrent == course?.id ? 'selected-category' : ''
                }`}
                onClick={() => {
                  void (async () => {
                    setValueOfAllDataRessoures([]);
                    await filterByCategory(course?.id ? course?.id : 0);
                    setRavenCourses(null);

                    setRavenPath(null);
                    setCurrentCategory(course?.id);
                    setCurrentCurrent(course?.id);
                    setValueOfButton(
                      course?.name.includes('Marketing')
                        ? 'Marketing & Communication'
                        : course?.name
                    );
                    setCurrentPage(1);
                    void navigate(
                      routes.catalogue.catalogueTitle.replace(
                        ':value',
                        course?.name.includes('Marketing')
                          ? 'Marketing-Communication'
                          : course?.name
                      )
                    );
                    scrollTo(130);
                    // setProgrammingCategory(false);
                    if (screenWidth < 990) setShowFilter(e => !e);
                  })();
                }}
              >
                {course?.name.includes('Marketing')
                  ? 'Marketing'
                  : course?.name}
              </button>
            );
          })}
        </ul>
        <div
          className={
            location.pathname == '/catalogue'
              ? 'hidden-filter-on-Catalogue'
              : ''
          }
        >
          <Spacer size={1} />
          <OtherFilter />
          <Spacer size={1} />
          <FilterByType />
          <Spacer size={1} />
          <FilterByLevel />
          <Spacer size={1} />
          <FilterByDuration />
        </div>
      </details>
    </div>
  );
};

CourseFilter.displayName = 'CourseFilter';
export default CourseFilter;
