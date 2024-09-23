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
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// import LaptopIcon from '../../assets/images/laptop.svg';
import { useLocation } from '@reach/router';
import AlgoIcon from '../../assets/images/algorithmIcon.svg';
import PhBookBookmark from '../../assets/images/ph-book-bookmark-thin.svg';
import LaediesActIcon from '../../assets/images/partners/we-act-logo.png';
import awsLogo from '../../assets/images/aws-logo.png';

import {
  getAllRessources,
  dataForprogramation,
  ProgramationCourses
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
  convertTimeForFilter,
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
  coursesMoodle,
  coursesRaven,
  myAllDataCourses,
  myDataMoodle,
  myDataRaven,
  pathRaven,
  valueOfCurrentCategory
} from '../../redux/atoms';

import '../catalogue/show-courses-by-category.css';
import { allQuery } from '../../utils/routes';

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
  const [ressourcesData, setRessourceDatas] = useRecoilState(myAllDataCourses);
  // const allDataofCourses = useRecoilValue(allDataCourses);
  const setDataMoodle = useSetRecoilState(coursesMoodle);
  const setDataRaven = useSetRecoilState(coursesRaven);
  const setDataRavenPath = useSetRecoilState(pathRaven);
  const showMoodleCategory = useRecoilValue(categoryCours);
  const valueOfCounter = useRecoilValue(categoryCounter);
  const [dataCoursesMoodle, setDataCoursesMoodle] =
    useRecoilState(myDataMoodle);
  const [dataCoursesRaven, setDataCoursesRaven] = useRecoilState(myDataRaven);

  const currentUrl = window.location.href;
  const location = useLocation();
  const valueOfUrl = location.pathname.split('/')[2];

  const { moodleBaseUrl } = envData;

  const fetchCourses = () => {
    setRessourceDatas([]);
    setIsDataOnLoading(true);

    const filteredRavenCourses = dataCoursesRaven;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    const filteredMoodleCourses = dataCoursesMoodle;
    const filterProgramationCourses = dataForprogramation;
    const isLanguageFilterActive =
      currentUrl.includes(allQuery.value.language.english) ||
      currentUrl.includes(allQuery.value.language.french);
    const isTypeFilterActive =
      currentUrl.includes(allQuery.value.type.parcours) ||
      currentUrl.includes(allQuery.value.type.cours);
    const isLevelFilterActive =
      currentUrl.includes(allQuery.value.level.debutant) ||
      currentUrl.includes(allQuery.value.level.intermediaire) ||
      currentUrl.includes(allQuery.value.level.avance);
    const isDurationFilterActive = currentUrl.includes(allQuery.key.duration);
    const filterByEnglish = currentUrl.includes(
      allQuery.value.language.english
    );
    const filterByFrench = currentUrl.includes(allQuery.value.language.french);
    const filterByParcours = currentUrl.includes(allQuery.value.type.parcours);
    const filterByCours = currentUrl.includes(allQuery.value.type.cours);
    const filterByDebutant = currentUrl.includes(allQuery.value.level.debutant);
    const filterByIntermediaire = currentUrl.includes(
      allQuery.value.level.intermediaire
    );
    const filterByAvance = currentUrl.includes(allQuery.value.level.avance);
    const filterLessThan1Hour = currentUrl.includes('-1h');
    const filterBetween1And5Hours = currentUrl.includes('1-5h');
    const filterUpTo5Hours = currentUrl.includes('Ov5h');
    const filterMoreThan5Hours = currentUrl.includes('Ov5h');

    const filterLogics = {
      programation: {
        language: (course: ProgramationCourses) => {
          if (filterByEnglish || filterByFrench) {
            return (
              (filterByEnglish &&
                course.language === allQuery.value.language.english) ||
              (filterByFrench &&
                course.language === allQuery.value.language.french)
            );
          }
          return true;
        },
        type: (course: ProgramationCourses) => {
          if (filterByParcours || filterByCours) {
            return (
              (filterByParcours &&
                course.type === allQuery.value.type.parcours) ||
              (filterByCours && course.type === allQuery.value.type.cours)
            );
          }
          return true;
        },
        level: (course: ProgramationCourses) => {
          if (filterByDebutant || filterByIntermediaire || filterByAvance) {
            return (
              (filterByDebutant &&
                course.level === allQuery.value.level.debutant) ||
              (filterByIntermediaire &&
                course.level === allQuery.value.level.intermediaire) ||
              (filterByAvance && course.level === allQuery.value.level.avance)
            );
          }
          return true;
        },
        duration: (course: ProgramationCourses) => {
          const courseHours =
            typeof course.duration === 'number'
              ? course.duration
              : parseInt(course.duration);
          if (
            filterLessThan1Hour ||
            filterBetween1And5Hours ||
            filterUpTo5Hours ||
            filterMoreThan5Hours
          ) {
            return (
              (filterLessThan1Hour && courseHours < 60) ||
              (filterBetween1And5Hours &&
                courseHours >= 60 &&
                courseHours <= 300) ||
              (filterUpTo5Hours && courseHours <= 300) ||
              (filterMoreThan5Hours && courseHours > 300)
            );
          }
          return true;
        }
      },
      aws: {
        language: (course: RavenCourse) => {
          const courseLanguage = course.category?.[0]?.tags?.[0]?.title;
          if (filterByEnglish || filterByFrench) {
            return (
              (filterByEnglish &&
                courseLanguage === allQuery.value.language.english) ||
              (filterByFrench &&
                courseLanguage === allQuery.value.language.french)
            );
          }
          return true;
        },
        type: (course: RavenCourse) => {
          if (filterByParcours || filterByCours) {
            return (
              (filterByParcours && course.long_description) ||
              (filterByCours && !course.long_description)
            );
          }
          return true;
        },
        level: (course: RavenCourse) => {
          if (filterByDebutant || filterByIntermediaire || filterByAvance) {
            return (
              (filterByDebutant && course.skill_level === 'Fundamental') ||
              (filterByIntermediaire &&
                course.skill_level === allQuery.value.level.intermediaire) ||
              (filterByAvance && course.skill_level === 'Advanced')
            );
          }
          return true;
        },
        duration: (course: RavenCourse) => {
          const courseHours = convertTimeForFilter(parseInt(course.duration));
          if (
            filterLessThan1Hour ||
            filterBetween1And5Hours ||
            filterUpTo5Hours ||
            filterMoreThan5Hours
          ) {
            return (
              (filterLessThan1Hour && courseHours < 60) ||
              (filterBetween1And5Hours &&
                courseHours >= 60 &&
                courseHours <= 300) ||
              (filterUpTo5Hours && courseHours <= 300) ||
              (filterMoreThan5Hours && courseHours > 300)
            );
          }
          return true;
        }
      },
      moodle: {
        language: (course: MoodleCourse) => {
          if (filterByEnglish || filterByFrench) {
            return (
              (filterByEnglish &&
                course.langue === allQuery.value.language.english) ||
              (filterByFrench &&
                course.langue === allQuery.value.language.french)
            );
          }
          return true;
        },
        type: (course: MoodleCourse) => {
          if (filterByParcours || filterByCours) {
            return (
              (filterByParcours &&
                course.categoryid &&
                course.type === allQuery.value.type.parcours) ||
              (filterByCours &&
                course.categoryid &&
                course.type === allQuery.value.type.cours)
            );
          }
          return true;
        },
        level: (course: MoodleCourse) => {
          if (filterByDebutant || filterByIntermediaire || filterByAvance) {
            return (
              (filterByDebutant &&
                course.level === allQuery.value.level.debutant) ||
              (filterByIntermediaire &&
                course.level === allQuery.value.level.intermediaire) ||
              (filterByAvance && course.level === 'Advanced')
            );
          }
          return true;
        },
        duration: (course: MoodleCourse) => {
          const courseHours = convertTimeForFilter(course.duration);
          if (
            filterLessThan1Hour ||
            filterBetween1And5Hours ||
            filterUpTo5Hours ||
            filterMoreThan5Hours
          ) {
            return (
              (filterLessThan1Hour && courseHours < 60) ||
              (filterBetween1And5Hours &&
                courseHours >= 60 &&
                courseHours <= 300) ||
              (filterUpTo5Hours && courseHours <= 300) ||
              (filterMoreThan5Hours && courseHours > 300)
            );
          }
          return true;
        }
      }
    };
    // eslint-disable-next-line @typescript-eslint/naming-convention
    type CourseType = RavenCourse | MoodleCourse | ProgramationCourses;

    const manyCategoryFilter = () => {
      let courses: CourseType[] | undefined;
      let category: 'programation' | 'aws' | 'moodle';

      if (valueOfCurrentCategorie === -1) {
        courses = filterProgramationCourses;
        category = 'programation';
      } else if (valueOfCurrentCategorie === -2) {
        courses = filteredRavenCourses;
        category = 'aws';
      } else {
        courses = filteredMoodleCourses?.filter(
          course => course.categoryid === valueOfCurrentCategorie
        );
        category = 'moodle';
      }

      if (!courses) return [];

      const filteredCourses = courses.filter(course => {
        const filters = filterLogics[category];
        return (
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
          (!isLanguageFilterActive || filters.language(course as any)) &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
          (!isTypeFilterActive || filters.type(course as any)) &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
          (!isLevelFilterActive || filters.level(course as any)) &&
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
          (!isDurationFilterActive || filters.duration(course as any))
        );
      });

      return filteredCourses;
    };

    const filteredCourses = manyCategoryFilter();

    setRessourceDatas(filteredCourses);
  };

  useEffect(() => {
    void fetchCourses();
    setIsDataOnLoading(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    valueOfUrl,
    valueOfCounter,
    valueOfCurrentCategorie,
    setDataCoursesMoodle,
    setDataCoursesRaven
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentPage = 1;
        const res = await getAllRessources(currentPage);

        // Séparer les cours Raven et Moodle
        const ravenCourses = res
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          .flatMap(course => (Array.isArray(course) ? course : [course]))
          .filter(course => 'launch_url' in course) as RavenCourse[];
        setDataCoursesRaven(ravenCourses);

        const moodleCourses = res
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          .flatMap(course => (Array.isArray(course) ? course : []))
          .filter(course => !('launch_url' in course)) as MoodleCourse[];
        setDataCoursesMoodle(moodleCourses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    void fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentpage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueOfCurrentCategorie, currentUrl]);

  const {
    paginatedData,
    totalPages,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    currentPage: page
  } = paginate(ressourcesData, currentPage);

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
                      {valueOfUrl.includes('Intelligence%20artificielle')
                        ? 'Intelligence Artificielle'
                        : valueOfUrl}
                    </span>
                  </h2>
                </div>
                <Spacer />
                <div className='card__courses__description'>
                  <h3>
                    Decouvrez le parcours{' '}
                    {valueOfUrl.includes('Intelligence%20artificielle')
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

                {!isDataOnLoading && paginatedData.length < 1 ? (
                  <div className=''>
                    <p className='no-cours'>
                      Aucune correspondance exacte .
                      <div>
                        Modifiez ou supprimez certains de vos filtres ou ajustez
                        votre catégorie de recherche.
                      </div>
                    </p>
                  </div>
                ) : (
                  <div className='card-course-detail-container'>
                    {!isDataOnLoading && paginatedData.length > 0 ? (
                      <>
                        {paginatedData.map((course, index) => {
                          // Vérifie les conditions pour valueOfCurrentCategorie
                          if (
                            valueOfCurrentCategorie === -1 || // Ajout de valueOfCurrentCategorie === -1
                            valueOfCurrentCategorie === -2 ||
                            valueOfCurrentCategorie === 11 ||
                            valueOfCurrentCategorie === 13 ||
                            valueOfCurrentCategorie === 14
                          ) {
                            // Affichage des cours pour valueOfCurrentCategorie === -1
                            if (valueOfCurrentCategorie === -1) {
                              const courseList = course as ProgramationCourses;
                              return (
                                <CourseCard
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

                            // Vérification si le cours est de type Raven
                            if (valueOfCurrentCategorie === -2) {
                              const courseTyped = course as RavenCourse;
                              const firstCategory = courseTyped.category?.[0];
                              const language =
                                firstCategory?.tags?.[0]?.title || 'Unknown';

                              if (valueOfCurrentCategorie === -2) {
                                if (courseTyped.long_description) {
                                  return (
                                    <PathCard
                                      language={language}
                                      key={courseTyped.name}
                                      icon={awsLogo}
                                      isAvailable={true}
                                      title={`${index + 1}. ${
                                        courseTyped.name
                                      }`}
                                      buttonText='Suivre le parcours'
                                      link={courseTyped.launch_url}
                                      description={formatDescription(
                                        courseTyped.long_description
                                      )}
                                      duration={convertTime(
                                        courseTyped.duration
                                      )}
                                      level={
                                        courseTyped.skill_level ===
                                        'Fundamental'
                                          ? allQuery.value.level.debutant
                                          : ''
                                      }
                                    />
                                  );
                                } else {
                                  return (
                                    <CourseCard
                                      level={
                                        courseTyped.skill_level ===
                                        'Fundamental'
                                          ? allQuery.value.level.debutant
                                          : ''
                                      }
                                      language={language}
                                      key={index.toString()}
                                      icon={awsLogo}
                                      isAvailable={true}
                                      title={`${index + 1}. ${
                                        courseTyped.name
                                      }`}
                                      buttonText='Suivre le cours'
                                      link={courseTyped.launch_url}
                                      description={formatDescription(
                                        courseTyped.short_description
                                      )}
                                      duration={convertTime(
                                        courseTyped.duration
                                      )}
                                    />
                                  );
                                }
                              }
                            } else {
                              // Vérification si le cours est de type Moodle
                              const courseTyped = course as MoodleCourse;
                              if (
                                courseTyped.categoryid ===
                                valueOfCurrentCategorie
                              ) {
                                return (
                                  <CourseCard
                                    language={courseTyped.langue}
                                    level={courseTyped.level}
                                    key={`${index}-${courseTyped.id}`}
                                    icon={PhBookBookmark} // Remplacer par le chemin réel de l'image
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

                          // Si aucune des conditions n'est remplie, ne retourne rien
                          return null;
                        })}
                      </>
                    ) : (
                      renderCourseCardSkeletons(6)
                    )}
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
