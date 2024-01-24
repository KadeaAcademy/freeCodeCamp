import React, { useState } from 'react';
import './course-filter.css';

import { getExternalResource } from '../../utils/ajax';
import envData from '../../../../config/env.json';

import {
  MoodleCourse,
  MoodleCourseCategory,
  MoodleCoursesCatalogue,
  scrollTo
} from '../../client-only-routes/show-courses';
import { splitArray } from '../helpers';
import sortCourses from '../helpers/sort-course';

export type MoodleCoursesFiltered = {
  courses: MoodleCourse[] | null;
  warnings: [];
};

const { moodleApiBaseUrl, moodleApiToken } = envData;

const CourseFilter = ({
  setMoodleCourses,
  setIsDataOnLoading,
  setShowFilter,
  screenWidth,
  courseCategories,
  // setProgrammingCategory,
  currentCategory,
  setCurrentCategory,
  setCurrentPage
}: {
  setMoodleCourses: React.Dispatch<
    React.SetStateAction<MoodleCoursesCatalogue | null | undefined>
  >;
  setIsDataOnLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
  // setProgrammingCategory: React.Dispatch<React.SetStateAction<boolean>>;
  screenWidth: number;
  courseCategories: MoodleCourseCategory[] | null | undefined;
  currentCategory: number | null;
  setCurrentCategory: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}): JSX.Element => {
  const [showSubjectFilter, setShowSubjectFilter] = useState<boolean>(true);

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

  return (
    <div className='filter-container'>
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
                currentCategory == null ? 'selected-category' : ''
              }`}
              onClick={() => {
                void getMoodleCourses();
                setCurrentPage(1);
                setCurrentCategory(null);
                // setProgrammingCategory(true);
                scrollTo(130);
                if (screenWidth < 990) setShowFilter(e => !e);
              }}
            >
              Tous
            </button>
          )}

          {courseCategories && (
            <button
              className={`filter-button ${
                currentCategory == -1 ? 'selected-category' : ''
              }`}
              onClick={() => {
                setCurrentCategory(-1);
                // setCurrentPage(1);
                // setProgrammingCategory(true);
                setMoodleCourses(null);
                scrollTo(130);
                if (screenWidth < 990) setShowFilter(e => !e);
              }}
            >
              Programmation
            </button>
          )}

          {courseCategories?.map((element, index) => {
            return (
              <button
                className={`filter-button ${
                  currentCategory == element?.id ? 'selected-category' : ''
                }`}
                onClick={() => {
                  void filterByCategory(element?.id);
                  setCurrentCategory(element?.id);
                  setCurrentPage(1);
                  scrollTo(130);
                  // setProgrammingCategory(false);
                  if (screenWidth < 990) setShowFilter(e => !e);
                }}
                key={index}
                dangerouslySetInnerHTML={{ __html: element?.name }}
              ></button>
            );
          })}
        </ul>
      </details>
    </div>
  );
};

CourseFilter.displayName = 'CourseFilter';
export default CourseFilter;
