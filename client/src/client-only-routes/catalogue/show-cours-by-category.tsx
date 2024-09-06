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
import { useNavigate } from '@reach/router';
import LaptopIcon from '../../assets/images/laptop.svg';
import AlgoIcon from '../../assets/images/algorithmIcon.svg';
import PhBookBookmark from '../../assets/images/ph-book-bookmark-thin.svg';
import LaediesActIcon from '../../assets/images/partners/we-act-logo.png';
import awsLogo from '../../assets/images/aws-logo.png';

import {
  getRavenResources,
  getRavenPathResources,
  getMoodleCourses,
  getMoodleCourseCategory,
  getAllRessources
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
  convertTimestampToHours,
  convertTimestampToTime,
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
  categoryCours,
  coursesMoodle,
  coursesRaven,
  myAllDataCourses,
  pathRaven,
  titleOfCategorieValue,
  valueOfCurrentCategory,
  valueOfLanguage,
  valueOfTypeCourse,
  valueOfTypeDuration,
  valueOfTypeLevel
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

  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 900
  );

  const navigated = useNavigate();

  //gestion des states avec recoil(voir doc recoil state manager)
  const [valueOfCurrentCategorie, SetValueOfCurrentCategory] = useRecoilState(
    valueOfCurrentCategory
  );
  const [ressourcesData, setRessourceDatas] = useRecoilState(myAllDataCourses);
  const valueOfTitleCategorie = useRecoilValue(titleOfCategorieValue);
  // const allDataofCourses = useRecoilValue(allDataCourses);
  const setDataMoodle = useSetRecoilState(coursesMoodle);
  const setDataRaven = useSetRecoilState(coursesRaven);
  const setDataRavenPath = useSetRecoilState(pathRaven);
  const showMoodleCategory = useRecoilValue(categoryCours);
  const [valueLanguage, setValueLangue] = useRecoilState(valueOfLanguage);
  const [valueTypeOfCourse, setValueTypeOfcours] =
    useRecoilState(valueOfTypeCourse);
  const [valueLevel, setValueLevel] = useRecoilState(valueOfTypeLevel);
  const [valueDuration, setValueDuration] = useRecoilState(valueOfTypeDuration);

  const { moodleBaseUrl } = envData;
  useEffect(() => {
    setIsDataOnLoading(true);

    void getMoodleCourses();
    void getRavenResources(currentPage);
    void getRavenPathResources(currentPage);
    void getMoodleCourseCategory();
    void getAllRessources(currentPage);

    const timer = setTimeout(() => {
      if (isDataOnLoading) {
        // setIsDataOnLoading(false);
      }
    }, 2000);
    return () => {
      setDataMoodle(null);
      setIsDataOnLoading(true);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsDataOnLoading(true);

    const fetchCourses = async () => {
      try {
        setRessourceDatas([]);
        const currentPage = 1; // ou la page courante

        // Temps d'attente de l'upload de 5 secondes
        const timeoutId = setTimeout(() => {
          setIsDataOnLoading(false);
          alert('Oops, problème de connexion. Veuillez réessayer.');
          void navigated('/catalogue');
        }, 5000);

        const courses = await getAllRessources(currentPage);

        // Annuler le timeout si les données sont récupérées avec succès
        clearTimeout(timeoutId);

        // Séparer les cours Raven et Moodle
        const ravenCourses = courses
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          .flatMap(course => (Array.isArray(course) ? course : []))
          .filter(course => 'launch_url' in course) as RavenCourse[];

        const moodleCourses = courses
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          .flatMap(course => (Array.isArray(course) ? course : []))
          .filter(course => !('launch_url' in course)) as MoodleCourse[];

        let filteredRavenCourses = ravenCourses;
        let filteredMoodleCourses = moodleCourses;

        if (valueOfCurrentCategorie == -2) {
          // Filtre par langue
          if (valueLanguage !== 'none') {
            filteredRavenCourses = filteredRavenCourses.filter(
              course => course.category?.[0]?.tags?.[0]?.title === valueLanguage
            );
          }

          // Filtre par type de cours
          if (valueTypeOfCourse !== 'none') {
            filteredRavenCourses = filteredRavenCourses.filter(course =>
              valueTypeOfCourse === 'Parcours'
                ? course.long_description
                : !course.long_description
            );
          }

          // Filtre par niveau
          if (valueLevel !== 'none') {
            filteredRavenCourses = filteredRavenCourses.filter(course =>
              valueLevel === 'Débutant'
                ? course.skill_level === 'Fundamental'
                : valueLevel === 'Avancé'
                ? course.skill_level === 'Advanced'
                : course.skill_level === 'Intermediate'
            );
          }

          setRessourceDatas(filteredRavenCourses);
        } else if (valueOfCurrentCategorie === null) {
          setRessourceDatas([...ravenCourses, ...moodleCourses]);
        } else {
          // Filtre par durée
          if (valueDuration !== 'none') {
            filteredMoodleCourses = filteredMoodleCourses.filter(course => {
              const courseHours = convertTimestampToHours(course.timecreated);
              return valueDuration === '>1h'
                ? courseHours > 10
                : valueDuration === '1>5h'
                ? courseHours > 10 && courseHours <= 13
                : courseHours > 13;
            });
          }

          setRessourceDatas(filteredMoodleCourses);
        }

        setIsDataOnLoading(false);
      } catch (error) {
        console.error('Error fetching courses:', error);
        alert('Oops, problème de connexion. Veuillez réessayer.');
        void navigated('/catalogue'); // Redirige vers /catalogue
      }
    };

    void fetchCourses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    valueOfCurrentCategorie,
    valueLanguage,
    currentPage,
    valueTypeOfCourse,
    valueLevel,
    valueDuration
  ]);

  useEffect(() => {
    setCurrentpage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    valueOfCurrentCategorie,
    valueLanguage,
    valueTypeOfCourse,
    valueLevel,
    valueDuration
  ]);

  useEffect(() => {
    setValueLangue('none');
    setValueTypeOfcours('none');
    setValueLevel('none');
    setValueDuration('none');
    SetValueOfCurrentCategory(valueOfCurrentCategorie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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

  useEffect(() => {
    SetValueOfCurrentCategory(valueOfCurrentCategorie);
  }, [valueOfCurrentCategorie, SetValueOfCurrentCategory]);

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
                <div>
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

              <div className='card-courses-detail-container'>
                <div>
                  <h2 className=' catalog-title'>
                    <span className='catalog'>Catalogue</span> /
                    {valueOfTitleCategorie}
                  </h2>
                </div>
                <Spacer />

                <div className='card__courses__description'>
                  <h3>Decouvrez le parcours {valueOfTitleCategorie}</h3>
                  <p>{getCategoryDescription(valueOfTitleCategorie)}</p>
                </div>
                <div className='course__number'>
                  <p>Parcourir le catalogue complet</p>
                  <span>
                    {(() => {
                      if (isDataOnLoading) {
                        return '';
                      }

                      if (valueOfCurrentCategorie === -1) {
                        return '2 cours';
                      } else if (valueOfCurrentCategorie === -2) {
                        const lunchUrlCoursesCount = paginatedData.filter(
                          course => course['launch_url']
                        ).length;
                        return lunchUrlCoursesCount > 0
                          ? `${lunchUrlCoursesCount} cours`
                          : '';
                      } else {
                        const categoryCoursesCount = paginatedData.filter(
                          course =>
                            course.categoryid === valueOfCurrentCategorie
                        ).length;
                        return categoryCoursesCount > 0
                          ? `${categoryCoursesCount} cours`
                          : '';
                      }
                    })()}
                  </span>
                </div>
                {paginatedData.length > 0 || valueOfCurrentCategorie == -1 ? (
                  <div className='card-course-detail-container'>
                    {currentPage == 1 && valueOfCurrentCategorie == -1 && (
                      <>
                        <CourseCard
                          language='French'
                          icon={LaptopIcon}
                          sponsorIcon={LaediesActIcon}
                          alt=''
                          isAvailable={true}
                          title='Responsive Web Design'
                          buttonText='Suivre le cours'
                          link='/learn/responsive-web-design/'
                          description={`
          Ce cours t'apprend les langages HTML pour le contenu et CSS pour la conception, ainsi que la création de pages Web adaptatives pour différentes tailles d'écran.
        `}
                        />
                        <CourseCard
                          language='French'
                          icon={AlgoIcon}
                          alt=''
                          isAvailable={true}
                          title='JavaScript Algorithms and Data Structures'
                          buttonText='Suivre le cours'
                          link='/learn/javascript-algorithms-and-data-structures'
                          description={`
                      Ce cours t'enseigne les bases de JavaScript pour rendre les pages interactives, ainsi que les algorithmes et structures de données en JavaScript., etc.`}
                        />
                      </>
                    )}
                    {(valueOfCurrentCategorie === -2 ||
                      valueOfCurrentCategorie === 11 ||
                      valueOfCurrentCategorie === 13 ||
                      valueOfCurrentCategorie === 14) &&
                    paginatedData.length > 0
                      ? paginatedData.map((course, index) => {
                          if ('launch_url' in course) {
                            const courseTyped = course as RavenCourse; // Typage pour les cours Raven
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
                                    title={`${index + 1}. ${courseTyped.name}`}
                                    buttonText='Suivre le cours'
                                    link={courseTyped.launch_url}
                                    description={courseTyped.long_description}
                                    duration={convertTime(courseTyped.duration)}
                                    level={courseTyped.skill_level}
                                  />
                                );
                              } else {
                                return (
                                  <CourseCard
                                    language={language}
                                    key={index.toString()}
                                    icon={awsLogo}
                                    isAvailable={true}
                                    title={`${index + 1}. ${courseTyped.name}`}
                                    buttonText='Suivre le cours'
                                    link={courseTyped.launch_url}
                                    description={courseTyped.short_description}
                                    duration={convertTime(courseTyped.duration)}
                                  />
                                );
                              }
                            } else {
                              return null;
                            }
                          } else {
                            const courseTyped = course as MoodleCourse; // Typage pour les cours Moodle
                            if (
                              courseTyped.categoryid === valueOfCurrentCategorie
                            ) {
                              return (
                                <CourseCard
                                  language='French'
                                  key={`${index}-${courseTyped.id}`}
                                  icon={PhBookBookmark} // Remplacer par le chemin réel de l'image
                                  isAvailable={courseTyped.visible === 1}
                                  title={courseTyped.displayname}
                                  buttonText='Suivre le cours'
                                  link={`${moodleBaseUrl}/course/view.php?id=${courseTyped.id}`}
                                  description={courseTyped.summary}
                                  duration={convertTimestampToTime(
                                    courseTyped.timecreated
                                  )}
                                />
                              );
                            } else {
                              return null;
                            }
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
