import React from 'react';
import '../filter/course-filter.css';
import { useRecoilValue } from 'recoil';
import {
  MoodleCourseCategory,
  MoodleCoursesCatalogue
} from '../../../../client-only-routes/show-courses';

import { tokenRaven } from '../../../../redux/atoms';

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
};

const CourseFilterList = ({
  courseCategories,
  setCurrentCategory,
  currentCategory
}: {
  courseCategories: MoodleCourseCategory[] | undefined | null;
  setMoodleCourses: React.Dispatch<
    React.SetStateAction<MoodleCoursesCatalogue | null | undefined>
  >;
  setIsDataOnLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setRavenCourses: React.Dispatch<
    React.SetStateAction<RavenCourse[] | null | undefined>
  >;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  currentCategory: string;
}): JSX.Element => {
  const valueOfToken = useRecoilValue(tokenRaven);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentCategory(e.currentTarget.textContent as string); // Update active state based on clicked button text
  };
  return (
    <div className='landing-filter-container'>
      <ul className='filter-categories-list'>
        {courseCategories && (
          <>
            <button
              className={`category-title ${
                currentCategory === 'Populaires' ? 'active-button' : ''
              }`}
              onClick={e => {
                handleButtonClick(e);
              }}
              disabled={currentCategory === 'Populaires'}
            >
              {'Populaires'}
            </button>

            <button
              className={`category-title ${
                currentCategory === 'AWS' ? 'active-button' : ''
              }`}
              style={{ display: valueOfToken == null ? 'none' : 'block' }}
              onClick={e => {
                handleButtonClick(e);
              }}
              disabled={currentCategory === 'AWS'}
            >
              {'AWS'}
            </button>

            {courseCategories?.map((element, index) => {
              return (
                <button
                  className={`category-title ${
                    currentCategory == element?.name ||
                    (element?.name.includes('&amp') &&
                      currentCategory == 'Marketing & Communication')
                      ? 'active-button'
                      : ''
                  }`}
                  onClick={e => {
                    handleButtonClick(e);
                  }}
                  key={index}
                  disabled={
                    currentCategory == element?.name ||
                    (element?.name.includes('&amp') &&
                      currentCategory == 'Marketing & Communication')
                  }
                >
                  {element?.name.includes('&amp')
                    ? 'Marketing & Communication'
                    : element?.name}
                </button>
              );
            })}
          </>
        )}
      </ul>
    </div>
  );
};

CourseFilterList.displayName = 'courseFilterListe';
export default CourseFilterList;
