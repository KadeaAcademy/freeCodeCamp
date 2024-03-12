import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';PhBookBookmark
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

import envData from '../../../config/env.json';
import CourseCard from '../components/CourseCard/course-card';
import LaptopIcon from '../assets/images/laptop.svg';
import AlgoIcon from '../assets/images/algorithmIcon.svg';
import PhBookBookmark from '../assets/images/ph-book-bookmark-thin.svg';

import LaediesActIcon from '../assets/images/partners/we-act-logo.png';
import NewBadge from '../assets/images/new.png';
import { createFlashMessage } from '../components/Flash/redux';
import {
  Loader,
  Spacer,
  renderCourseCardSkeletons,
  splitArray
} from '../components/helpers';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../redux';

import { User } from '../redux/prop-types';
import { getExternalResource } from '../utils/ajax';

import '../components/CourseFilter/course-filter.css';
import CourseFilter from '../components/CourseFilter/course-filter';
import sortCourses from '../components/helpers/sort-course';
import SearchButton from '../components/CourseSearch/search-button';

const { moodleApiBaseUrl, moodleApiToken, moodleBaseUrl } = envData;

// TODO: update types for actions
interface CoursesProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
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
};

export type MoodleCoursesCatalogue = {
  result: MoodleCourse[][];
  size: number;
};

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

export const scrollTo = (top: number) => {
  if (typeof window !== 'undefined') {
    window.scrollTo({
      top,
      left: 0,
      behavior: 'smooth'
    });
  }
};

export function Courses(props: CoursesProps): JSX.Element {
  // const { t } = useTranslation();
  const {
    isSignedIn,
    showLoading,
    user: { name, phone }
  } = props;
  const [moodleCourses, setMoodleCourses] =
    useState<MoodleCoursesCatalogue | null>();

  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  // const [programmingCategory, setProgrammingCategory] = useState<boolean>(true);
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 900
  );
  const [courseCategories, setCourseCategories] = useState<
    MoodleCourseCategory[] | null
  >();

  const [currentCategory, setCurrentCategory] = useState<number | null>(null);

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

  const getMoodleCourses = async () => {
    const moodleCatalogue = await getExternalResource<MoodleCourse[]>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_course_get_courses&moodlewsrestformat=json`
    );

    const splitCourses: MoodleCoursesCatalogue | null | undefined =
      moodleCatalogue != null
        ? splitArray<MoodleCourse>(
            moodleCatalogue.filter(moodleCourse => {
              return moodleCourse.visible == 1 && moodleCourse.format != 'site';
            }),
            4
          )
        : null;

    //Order courses by their publication date
    const sortedCourses = sortCourses(splitCourses);

    if (moodleCatalogue != null) {
      setMoodleCourses(sortedCourses);
    } else {
      setMoodleCourses(null);
    }
  };

  const navigateToPage = (forwardOrBackward: boolean) => {
    if (forwardOrBackward) {
      if (moodleCourses && currentPage < moodleCourses?.size) {
        setCurrentPage(Number(currentPage + 1));
      }
    } else {
      if (currentPage > 1) {
        setCurrentPage(Number(currentPage - 1));
      }
    }
    setIsDataOnLoading(true);
  };

  useEffect(() => {
    void getMoodleCourses();

    const timer = setTimeout(() => {
      if (isDataOnLoading) {
        setIsDataOnLoading(false);
      }
    }, 2000);
    return () => {
      setMoodleCourses(null); // cleanup useEffect to perform a React state update
      setIsDataOnLoading(true); // cleanup useEffect to perform a React state update
      clearTimeout(timer);
    };
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

  const formatdate = (data: number) => {
    return new Date(data * 1000).toLocaleDateString();
  };

  useEffect(() => {
    if (screenWidth > 990) setShowFilter(true);
    else setShowFilter(false);
  }, [screenWidth]);

  useEffect(() => {
    void getMoodleCourseCategory();
  }, [courseCategories]);

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      {/* <Helmet title={`${t('buttons.settings')} | Code Learning Plateform`} /> */}
      <Helmet title={`Nos cours | Kadea Online`} />
      <Grid className='bg-light'>
        <main>
          <div className=''>
            <Spacer size={1} />
            <div>
              <h2 className='big-subheading'>{`Suis nos cours.`}</h2>
              <p className='text-responsive'>
                {`
          Concentre-toi sur ce qui est nécessaire pour acquérir une compétence spécifique et applicable. 
          Tu seras mieux outillé pour construire une carrière.
          `}
              </p>
            </div>
            <button
              onClick={() => {
                setShowFilter(e => !e);
              }}
              className=' show-filter-button '
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
              </svg>{' '}
            </button>
            {/* <Spacer /> */}
            <div className='title-selected-filter'>
              <h2
                dangerouslySetInnerHTML={{
                  __html: `${
                    currentCategory == null
                      ? 'Tous les cours'
                      : currentCategory == -1
                      ? 'Programmation'
                      : (courseCategories?.find(
                          elt => elt.id == currentCategory
                        )?.name as string)
                  }`
                }}
              ></h2>
              <SearchButton
                courseOrPath='course'
                isDataOnLoading={isDataOnLoading}
                setIsDataOnLoading={setIsDataOnLoading}
              />
            </div>

            <Spacer />

            <div className='card-filter-container'>
              {showFilter && (
                <CourseFilter
                  screenWidth={screenWidth}
                  setMoodleCourses={setMoodleCourses}
                  setShowFilter={setShowFilter}
                  setIsDataOnLoading={setIsDataOnLoading}
                  // setProgrammingCategory={setProgrammingCategory}
                  courseCategories={courseCategories}
                  currentCategory={currentCategory}
                  setCurrentCategory={setCurrentCategory}
                  setCurrentPage={setCurrentPage}
                />
              )}

              {!isDataOnLoading ? (
                <div className='card-course-detail-container'>
                  {currentPage == 1 &&
                    (currentCategory == null || currentCategory == -1) && (
                      <>
                        <CourseCard
                          icon={LaptopIcon}
                          sponsorIcon={LaediesActIcon}
                          alt=''
                          name={name}
                          phone={phone}
                          isAvailable={true}
                          isSignedIn={isSignedIn}
                          title={`Responsive Web Design`}
                          buttonText={`Suivre le cours  `}
                          link={'/learn/responsive-web-design/'}
                          description={`
                Dans ce cours, tu apprendras les langages que les développeurs 
                utilisent pour créer des pages Web : HTML (Hypertext Markup Language) 
                pour le contenu, et CSS (Cascading Style Sheets) pour la conception. 
                Enfin, tu apprendras à créer des pages Web adaptées à différentes tailles d'écran.
                `}
                        />
                        <CourseCard
                          icon={AlgoIcon}
                          alt=''
                          isAvailable={true}
                          isSignedIn={isSignedIn}
                          phone={phone}
                          name={name}
                          title={`JavaScript Algorithms and Data Structures`}
                          buttonText={`Suivre le cours  `}
                          link={`/learn/javascript-algorithms-and-data-structures`}
                          description={`Alors que HTML et CSS contrôlent le contenu et le style  d'une page, 
                JavaScript est utilisé pour la rendre interactive. Dans le cadre du 
                cours JavaScript Algorithm and Data Structures, tu apprendras 
                les principes fondamentaux de JavaScript, etc.`}
                        />
                      </>
                    )}

                  {moodleCourses &&
                    moodleCourses.result &&
                    moodleCourses.result.length > 0 &&
                    moodleCourses.result[currentPage - 1]?.map(
                      (course, index) => {
                        return (
                          <CourseCard
                            key={index + course.id}
                            icon={PhBookBookmark}
                            phone={phone}
                            name={name}
                            badgeIcon={NewBadge}
                            isAvailable={course.visible == 1}
                            isSignedIn={isSignedIn}
                            sameTab={true}
                            external={true}
                            title={`${course.displayname}`}
                            buttonText={`Suivre le cours  `}
                            createAt={formatdate(course.timecreated)}
                            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                            link={`${moodleBaseUrl}/course/view.php?id=${course.id}`}
                            description={course.summary}
                          />
                        );
                      }
                    )}
                </div>
              ) : (
                <div className='card-course-detail-container'>
                  {renderCourseCardSkeletons(6)}
                </div>
              )}
            </div>
            <Spacer size={3} />
            <div className='pagination-container'>
              {moodleCourses && moodleCourses.size > 0 && (
                <Row>
                  <Col md={12} sm={12} xs={12}>
                    {currentPage > 1 && (
                      <FontAwesomeIcon
                        icon={faChevronLeft}
                        className='pagination-chevron'
                        onClick={() => {
                          scrollTo(130);
                          navigateToPage(false);
                        }}
                      />
                    )}
                    &nbsp;
                    {`  ${currentPage} sur ${moodleCourses?.size}  `}
                    &nbsp;
                    {currentPage < moodleCourses?.size && (
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className='pagination-chevron'
                        onClick={() => {
                          scrollTo(130);
                          navigateToPage(true);
                        }}
                      />
                    )}
                    <Spacer size={2} />
                  </Col>
                </Row>
              )}
            </div>
          </div>
        </main>
      </Grid>
    </>
  );
}

Courses.displayName = 'Courses';

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
