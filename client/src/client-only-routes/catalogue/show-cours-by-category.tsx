import React, { useEffect, useState } from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import LaptopIcon from '../../assets/images/laptop.svg';
import AlgoIcon from '../../assets/images/algorithmIcon.svg';
import PhBookBookmark from '../../assets/images/ph-book-bookmark-thin.svg';
import LaediesActIcon from '../../assets/images/partners/we-act-logo.png';
import awsLogo from '../../assets/images/aws-logo.png';

import {
  getRavenResources,
  getRavenPathResources,
  getMoodleCourseCategory,
  getMoodleCourses
} from '../../utils/ajax';
import {
  Loader,
  renderCourseCardSkeletons,
  Spacer
} from '../../components/helpers';
import CourseFilter from '../../components/CourseFilter/course-filter';
import CourseCard from '../../components/CourseCard/course-card';
import PathCard from '../../components/PathCard/path-card';
import {
  convertTime,
  convertTimestampToTime,
  getCategoryDescription,
  paginate
} from '../../utils/allFunctions';
import { CoursesProps, MoodleCourseCategory } from '../show-courses';
import envData from '../../../../config/env.json';
import {
  isSignedInSelector,
  signInLoadingSelector,
  userSelector,
  hardGoTo as navigate
} from '../../redux';
import { User } from '../../redux/prop-types';
import { createFlashMessage } from '../../components/Flash/redux';
import {
  allDataCourses,
  coursesMoodle,
  coursesRaven,
  pathRaven,
  titleOfCategorieValue,
  valueOfCurrentCategory
} from '../../redux/atoms';

import '../catalogue/show-courses-by-category.css';

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

function CourseByCatalogue(props: CoursesProps): JSX.Element {
  const { showLoading } = props;
  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(true);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [currentPage, setCurrentpage] = useState<number>(1);
  const [courseCategories, setCourseCategories] = useState<
    MoodleCourseCategory[] | null
  >();
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 900
  );
  const valueOfTitleCategorie = useRecoilValue(titleOfCategorieValue);
  const allDataofCourses = useRecoilValue(allDataCourses);
  const setCurrentCurrent = useSetRecoilState(valueOfCurrentCategory);
  const currentCurrent = useRecoilValue(valueOfCurrentCategory);
  const setDataMoodle = useSetRecoilState(coursesMoodle);
  const setDataRaven = useSetRecoilState(coursesRaven);
  const setDataRavenPath = useSetRecoilState(pathRaven);

  const { moodleBaseUrl } = envData;

  const {
    paginatedData,
    totalPages,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    currentPage: page
  } = paginate(allDataofCourses, currentPage);

  const onNavigateForward = () => {
    if (currentPage < totalPages && currentPage > 0) {
      setCurrentpage(currentPage + 1);
      setIsDataOnLoading(!isDataOnLoading);
    } else {
      setCurrentpage(currentPage);
    }
  };

  const onNavigueteBackward = () => {
    if (currentPage > 1) {
      setCurrentpage(currentPage - 1);
      setIsDataOnLoading(!isDataOnLoading);
    } else {
      setCurrentpage(currentPage);
    }
  };

  useEffect(() => {
    const courses = void getMoodleCourseCategory();
    setCourseCategories(courses ? courses : []);
  }, []);

  useEffect(() => {
    void getMoodleCourses();
    void getRavenResources(currentPage);
    void getRavenPathResources(currentPage);

    const timer = setTimeout(() => {
      if (isDataOnLoading) {
        setIsDataOnLoading(false);
      }
    }, 2000);
    return () => {
      setDataMoodle(null); // cleanup useEffect to perform a React state update
      setIsDataOnLoading(true); // cleanup useEffect to perform a React state update
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (screenWidth > 990) setShowFilter(true);
    else setShowFilter(false);
  }, [screenWidth]);

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
                  currentCategory={currentCurrent}
                  setCurrentCategory={setCurrentCurrent}
                  setCurrentPage={setCurrentpage}
                />
              )}

              <div className='card-courses-detail-container'>
                <div>
                  <h2 className='big-subheading'>{valueOfTitleCategorie}</h2>
                </div>
                <Spacer />

                <div className='card__courses__description'>
                  <h3>Decouvrez le parcours {valueOfTitleCategorie}</h3>
                  <p>{getCategoryDescription(valueOfTitleCategorie)}</p>
                </div>
                <div className='course__number'>
                  <p>Parcourir le catalogue complet</p>
                  <span>
                    {allDataofCourses.length +
                      (currentCurrent == null || currentCurrent == -1
                        ? 2
                        : 0)}{' '}
                    cours
                  </span>
                </div>

                {!isDataOnLoading ? (
                  <div className='card-course-detail-container'>
                    {currentPage == 1 &&
                      (currentCurrent == null || currentCurrent == -1) && (
                        <>
                          <CourseCard
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
CourseByCatalogue.displayName = 'Courses';

export default connect(mapStateToProps, mapDispatchToProps)(CourseByCatalogue);