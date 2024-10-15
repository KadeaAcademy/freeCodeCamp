import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// import LaptopIcon from '../../assets/images/laptop.svg';
import { useLocation } from '@reach/router';
import AlgoIcon from '../../assets/images/algorithmIcon.svg';
import PhBookBookmark from '../../assets/images/ph-book-bookmark-thin.svg';
import LaediesActIcon from '../../assets/images/partners/we-act-logo.png';
import awsLogo from '../../assets/images/aws-logo.png';

import { ProgramationCourses } from '../../utils/ajax';
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
  formatDescription,
  getCategoryDescription,
  paginate
} from '../../utils/allFunctions';
import { CoursesProps, MoodleCourse, RavenCourse } from '../show-courses';
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
  categoryCounter,
  categoryCours,
  centraliseProgramationCours,
  centraliseRavenData,
  coursesMoodle,
  coursesRaven,
  myAllDataCourses,
  myDataMoodle,
  pathRaven,
  valueOfCurrentCategory
} from '../../redux/atoms';

import '../catalogue/show-courses-by-category.css';
import { allQuery, filterLogics } from '../../utils/routes';

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
  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 900
  );
  //gestion des states avec recoil(voir doc recoil state manager)
  const [valueOfCurrentCategorie, SetValueOfCurrentCategory] = useRecoilState(
    valueOfCurrentCategory
  );
  const setRessourceDatas = useSetRecoilState(myAllDataCourses);

  const setDataMoodle = useSetRecoilState(coursesMoodle);
  const setDataRaven = useSetRecoilState(coursesRaven);
  const setDataRavenPath = useSetRecoilState(pathRaven);
  const showMoodleCategory = useRecoilValue(categoryCours);
  const valueOfCounter = useRecoilValue(categoryCounter);
  const [coursesData, setCoursesData] = useState<unknown[]>([]);
  const ravenState = useRecoilValue(centraliseRavenData);
  const moodleState = useRecoilValue(myDataMoodle);
  const programmationState = useRecoilValue(centraliseProgramationCours);

  const currentUrl = window.location.href;
  const location = useLocation();
  const valueOfUrl = location.pathname.split('/')[2];

  const { moodleBaseUrl } = envData;

  //utilisation de useCallback afin de mémoriser la fonction et éviter de la recréer à chaque rendu mais seulement au changement des dépendances
  const fetchCourses = useCallback(() => {
    try {
      setIsDataOnLoading(true);
      const filteredRavenCourses = ravenState;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      const filteredMoodleCourses = moodleState;
      const filterProgramationCourses = programmationState;
      // eslint-disable-next-line @typescript-eslint/naming-convention
      type CourseType = RavenCourse | MoodleCourse | ProgramationCourses;

      const manyCategoryFilter = () => {
        let courses: CourseType[] | undefined;
        let category: 'programation' | 'aws' | 'moodle';

        if (valueOfUrl == 'programmation') {
          courses = filterProgramationCourses;
          category = 'programation';
        } else if (valueOfUrl == 'amazon-web-service') {
          courses = filteredRavenCourses;
          category = 'aws';
        } else {
          courses = filteredMoodleCourses?.result
            .flatMap(
              /* eslint-disable @typescript-eslint/no-unsafe-member-access */
              course => course
            )
            .filter(
              course => course.categoryid == valueOfCurrentCategorie
            ) as unknown as MoodleCourse[];
          category = 'moodle';
        }

        if (!courses) return [];

        switch (category) {
          case 'programation':
            setRessourceDatas([]);
            return courses.filter(
              course =>
                filterLogics.programation.language(
                  course as ProgramationCourses,
                  currentUrl
                ) &&
                filterLogics.programation.type(
                  course as ProgramationCourses,
                  currentUrl
                ) &&
                filterLogics.programation.level(
                  course as ProgramationCourses,
                  currentUrl
                ) &&
                filterLogics.programation.duration(
                  course as ProgramationCourses,
                  currentUrl
                )
            );

          case 'aws':
            return courses.filter(
              course =>
                filterLogics.aws.language(course as RavenCourse, currentUrl) &&
                filterLogics.aws.type(course as RavenCourse, currentUrl) &&
                filterLogics.aws.level(course as RavenCourse, currentUrl) &&
                filterLogics.aws.duration(course as RavenCourse, currentUrl)
            );

          case 'moodle':
            return courses.filter(
              course =>
                filterLogics.moodle.language(
                  course as MoodleCourse,
                  currentUrl
                ) &&
                filterLogics.moodle.type(course as MoodleCourse, currentUrl) &&
                filterLogics.moodle.level(course as MoodleCourse, currentUrl) &&
                filterLogics.moodle.duration(course as MoodleCourse, currentUrl)
            );

          default:
            return [];
        }
      };
      const filteredCourses = manyCategoryFilter();
      setCoursesData(filteredCourses);
      setRessourceDatas(filteredCourses);
      setIsDataOnLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  }, [
    valueOfUrl,
    ravenState,
    moodleState,
    programmationState,
    currentUrl,
    valueOfCurrentCategorie,
    setRessourceDatas
  ]);

  useEffect(() => {
    setIsDataOnLoading(true);
    void fetchCourses();
  }, [
    fetchCourses,
    currentPage,
    valueOfUrl,
    currentUrl,
    valueOfCounter,
    valueOfCurrentCategorie
  ]);

  useEffect(() => {
    setCurrentpage(1);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueOfUrl, valueOfCounter, valueOfCurrentCategorie]);

  const {
    paginatedData,
    totalPages,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    currentPage: page
  } = useMemo(
    () => paginate(coursesData, currentPage),
    [coursesData, currentPage]
  );

  useEffect(() => {
    if (screenWidth > 990) setShowFilter(true);
    else setShowFilter(false);
  }, [screenWidth]);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      showFilter && setScreenWidth(window.innerWidth);
    });
  }

  //gestion de la pagination pour l'affichage des cours
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
              className='show-filter-button '
            >
              <span>Filtrer</span>
              <svg
                width='20px'
                height='20px'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className=''
              >
                <g>
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z' />
                </g>
              </svg>
            </button>

            <div className={'card-filter-container '}>
              {showFilter && (
                <div className=''>
                  <CourseFilter
                    setRavenPath={setDataRavenPath}
                    screenWidth={screenWidth}
                    setRavenCourses={setDataRaven}
                    setMoodleCourses={setDataMoodle}
                    setShowFilter={setShowFilter}
                    setIsDataOnLoading={setIsDataOnLoading}
                    courseCategories={showMoodleCategory}
                    currentCategory={valueOfCurrentCategorie}
                    setCurrentCategory={SetValueOfCurrentCategory}
                    setCurrentPage={setCurrentpage}
                  />
                </div>
              )}

              <div
                className={`card-courses-detail-container ${
                  showFilter ? 'hidden_all_container' : ''
                }`}
              >
                <div>
                  <h2 className=' catalog-title'>
                    <span className='catalog'>Catalogue</span> /
                    <span className='catalog-title_space'>
                      {valueOfUrl.includes('Intelligence%20-%20artificielle')
                        ? 'Intelligence Artificielle'
                        : valueOfUrl}
                    </span>
                  </h2>
                </div>
                <Spacer />
                <div className='card__courses__description'>
                  <h3>
                    Decouvrez le parcours{' '}
                    {valueOfUrl.includes('Intelligence%20-%20artificielle')
                      ? 'Intelligence Artificielle'
                      : valueOfUrl}
                  </h3>
                  <p>{getCategoryDescription(valueOfUrl)}</p>
                </div>
                <div className='course__number'>
                  <p>Parcourir le catalogue complet</p>
                  <span>
                    {paginatedData.length > 0 ? paginatedData.length : ''}
                  </span>
                </div>

                <div className='card-course-detail-container'>
                  {isDataOnLoading && paginatedData.length === 0 ? (
                    renderCourseCardSkeletons(6)
                  ) : paginatedData.length > 0 ? (
                    paginatedData.map((course, index) => {
                      if (
                        valueOfUrl === 'programmation' ||
                        valueOfUrl === 'amazon-web-service' ||
                        valueOfUrl === 'Intelligence%20-%20artificielle' ||
                        valueOfUrl === 'Marketing-Communication' ||
                        valueOfUrl === 'Bureautique'
                      ) {
                        if (valueOfUrl === 'programmation') {
                          const courseList = course as ProgramationCourses;
                          if (courseList.title) {
                            return (
                              <CourseCard
                                key={index}
                                level={courseList.level}
                                language={courseList.language}
                                icon={
                                  courseList.sponsorIcon === 'AlgoIcon'
                                    ? AlgoIcon
                                    : LaediesActIcon
                                }
                                alt={courseList.alt}
                                isAvailable={courseList.isAvailable}
                                title={courseList.title}
                                buttonText='Suivre le cours'
                                link={courseList.link}
                                description={courseList.description}
                              />
                            );
                          }
                        }

                        if (valueOfUrl === 'amazon-web-service') {
                          const courseTyped = course as RavenCourse;
                          const firstCategory = courseTyped.category?.[0];
                          const language =
                            firstCategory?.tags?.[0]?.title || 'Unknown';

                          if (courseTyped.long_description) {
                            return (
                              <PathCard
                                key={courseTyped.name}
                                language={language}
                                icon={awsLogo}
                                isAvailable={true}
                                title={`${index + 1}. ${courseTyped.name}`}
                                buttonText='Suivre le parcours'
                                link={courseTyped.launch_url}
                                description={formatDescription(
                                  courseTyped.long_description
                                )}
                                duration={convertTime(courseTyped.duration)}
                                level={
                                  courseTyped.skill_level === 'Fundamental'
                                    ? allQuery.value.level.debutant
                                    : ''
                                }
                              />
                            );
                          } else {
                            return (
                              <CourseCard
                                key={index.toString()}
                                level={
                                  courseTyped.skill_level === 'Fundamental'
                                    ? allQuery.value.level.debutant
                                    : ''
                                }
                                language={language}
                                icon={awsLogo}
                                isAvailable={true}
                                title={`${index + 1}. ${courseTyped.name}`}
                                buttonText='Suivre le cours'
                                link={courseTyped.launch_url}
                                description={formatDescription(
                                  courseTyped.short_description
                                )}
                                duration={convertTime(courseTyped.duration)}
                              />
                            );
                          }
                        } else {
                          const courseTyped = course as MoodleCourse;
                          const nowCategorie =
                            valueOfUrl === 'Bureautique'
                              ? 11
                              : valueOfUrl === 'Marketing-Communication'
                              ? 13
                              : valueOfUrl === 'Intelligence%20-%20artificielle'
                              ? 14
                              : valueOfCurrentCategorie;
                          if (courseTyped.categoryid == nowCategorie) {
                            return (
                              <CourseCard
                                key={`${index}-${courseTyped.id}`}
                                language={courseTyped.langue}
                                level={courseTyped.level}
                                icon={PhBookBookmark}
                                isAvailable={courseTyped.visible === 1}
                                title={courseTyped.displayname}
                                buttonText='Suivre le cours'
                                link={`${moodleBaseUrl}/course/view.php?id=${courseTyped.id}`}
                                description={courseTyped.summary}
                                duration={convertTimestampToTime(
                                  courseTyped.duration
                                )}
                              />
                            );
                          }
                        }
                      }
                      return null;
                    })
                  ) : (
                    <div className=''>
                      <p className='no-cours'>
                        Aucune correspondance exacte .
                        <div>
                          Modifiez ou supprimez certains de vos filtres ou
                          ajustez votre catégorie de recherche.
                        </div>
                      </p>
                    </div>
                  )}
                </div>

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
