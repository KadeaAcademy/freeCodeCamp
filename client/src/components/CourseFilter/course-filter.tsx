import React, { useEffect, useState } from 'react';
import './course-filter.css';

import { navigate } from 'gatsby';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useLocation } from '@reach/router';
import {
  addRavenTokenToLocalStorage,
  generateRavenTokenAcces,
  getRavenTokenDataFromLocalStorage,
  RavenTokenData
} from '../../utils/ajax';

import {
  MoodleCourseCategory,
  MoodleCoursesCatalogue,
  scrollTo
} from '../../client-only-routes/show-courses';
import { arrayOfCategory } from '../../utils/routes';
import {
  myAllDataCourses,
  tokenRaven,
  valueOfCurrentCategory
} from '../../redux/atoms';
import OtherFilter from './other-filter';
import FilterByType from './filter-by-type';
import FilterByLevel from './filter-by-level';
import FilterByDuration from './filter-by-duration';

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

const CourseFilter = ({
  setShowFilter,
  screenWidth
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
  const [currentCurrent, setCurrentCurrent] = useRecoilState(
    valueOfCurrentCategory
  );
  const [valueOfTokenRaven, setValueOfTokenRave] = useRecoilState(tokenRaven);

  const location = useLocation();

  //gestion des query string afin de recévoir un tableau composé de toutes les valeurs séléctionnées
  const urlParams = new URLSearchParams(window.location.search);
  const paramsArray = Array.from(urlParams.entries());

  const filteredParams = paramsArray.flatMap(([key, value]) => {
    if (value.includes(',') && key) {
      return value.split(',');
    } else {
      return [value];
    }
  });

  const setValueOfAllDataRessoures = useSetRecoilState(myAllDataCourses);

  const getRavenToken = async () => {
    const ravenLocalToken = getRavenTokenDataFromLocalStorage();

    if (ravenLocalToken === null) {
      const generateRavenToken = await generateRavenTokenAcces();

      if (generateRavenToken) {
        addRavenTokenToLocalStorage(generateRavenToken as RavenTokenData);
        setValueOfTokenRave(generateRavenToken as RavenTokenData);
      }
    }
  };

  useEffect(() => {
    void getRavenToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='filter__layoute'>
      <div
        className={
          location.pathname == '/catalogue'
            ? 'filter-container_hidden-scrol'
            : 'filter-container'
        }
      >
        <div className='main-title-filter-container'>
          <h2 className='main-title-filter'>
            Filtrer par :{' '}
            <div className='filter__counter' style={{ display: 'inline' }}>
              {filteredParams.length > 0 ? filteredParams.length : ''}
            </div>
          </h2>
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
                <path d='M17 9.5L12 14.5L7 9.5' stroke='#000000' />
              </svg>
            )}
          </summary>
          <ul className=' filter-items-container '>
            {arrayOfCategory.map(category => (
              <div key={category.categoryId}>
                <button
                  className={`filter-button ${
                    currentCurrent == category.categoryId
                      ? 'selected-category'
                      : ''
                  }`}
                  onClick={() => {
                    void (() => {
                      setCurrentCurrent(category.categoryId);
                      setValueOfAllDataRessoures([]);
                      void navigate(category.categoryRoute);
                      scrollTo(130);
                      if (screenWidth < 990) setShowFilter(e => !e);
                    })();
                  }}
                  style={{
                    display:
                      category.categoryId == -2 && valueOfTokenRaven == null
                        ? 'block'
                        : 'block'
                  }}
                  disabled={currentCurrent == category.categoryId}
                >
                  {category.categoryName}
                </button>
              </div>
            ))}
          </ul>
          <div
            className={
              location.pathname == '/catalogue/' ||
              location.pathname == '/catalogue'
                ? 'hidden-filter-on-Catalogue'
                : ''
            }
          >
            <div>
              <OtherFilter />
              <FilterByType />
              <FilterByLevel />
              <FilterByDuration />
            </div>
          </div>
        </details>
      </div>
    </div>
  );
};

CourseFilter.displayName = 'CourseFilter';
export default CourseFilter;
