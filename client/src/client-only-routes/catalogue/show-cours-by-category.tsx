import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Grid } from '@freecodecamp/react-bootstrap';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
// import LaptopIcon from '../../assets/images/laptop.svg';
import { useLocation } from '@reach/router';

import {
  dataForprogramation,
  getAwsPath,
  getDataFromDb,
  getMoodleCourses
} from '../../utils/ajax';
import {
  Loader,
  renderCourseCardSkeletons,
  Spacer
} from '../../components/helpers';
import CourseFilter from '../../components/CourseFilter/course-filter';
import { getCategoryDescription, paginate } from '../../utils/allFunctions';
import { CoursesProps, MoodleCourse, RavenCourse } from '../show-courses';
import {
  isSignedInSelector,
  signInLoadingSelector,
  userSelector,
  hardGoTo as navigate
} from '../../redux';
import { ProgramationCourses, User } from '../../redux/prop-types';
import { createFlashMessage } from '../../components/Flash/redux';
import {
  allDataCourses,
  categoryCounter,
  categoryCours,
  centraliseRavenData,
  coursesMoodle,
  coursesRaven,
  myAllDataCourses,
  myDataMoodle,
  pathRaven,
  valueOfCurrentCategory
} from '../../redux/atoms';

import '../catalogue/show-courses-by-category.css';
import AllCourseByType from './all-course-by-type';
import PaginationControls from './pagination';
import { manyCategoryFilter } from './useCategoryFilter';
import usePaginationHandlers from './paginationHandlers';

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

type Course = RavenCourse | MoodleCourse | ProgramationCourses;

function CourseByCatalogue(props: CoursesProps): JSX.Element {
  const { showLoading } = props;
  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(true);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
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
  const [ravenState, setGetAllRavenData] = useRecoilState(centraliseRavenData);
  const [moodleState, setGetAllDataMoodle] = useRecoilState(myDataMoodle);
  const [programmationState, setProgrammationState] = useState<
    ProgramationCourses[]
  >([]);
  const setAllDataOfCourses = useSetRecoilState(allDataCourses);

  const currentUrl = window.location.href;
  const location = useLocation();
  const valueOfUrl = location.pathname.split('/')[2].replace(/-/g, ' ');

  //utilisation de useCallback afin de mémoriser la fonction et éviter de la recréer à chaque rendu mais seulement au changement des dépendances
  const fetchCourses = useCallback(() => {
    try {
      setIsDataOnLoading(true);
      const ravenDataWhenEmptyDb = getAwsPath() as unknown as RavenCourse[];
      const filteredRavenCourses =
        ravenState.length > 0 ? ravenState : ravenDataWhenEmptyDb;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      const filteredMoodleCourses = moodleState;
      setProgrammationState(dataForprogramation);
      const filterProgramationCourses = programmationState;
      setAllDataOfCourses(filterProgramationCourses);
      // eslint-disable-next-line @typescript-eslint/naming-convention

      const filteredCourses = manyCategoryFilter(
        valueOfUrl,
        filteredRavenCourses,
        filteredMoodleCourses,
        filterProgramationCourses,
        currentUrl,
        valueOfCurrentCategorie
      );

      setCoursesData(filteredCourses);
      setRessourceDatas(filteredCourses);
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
    setRessourceDatas,
    setAllDataOfCourses
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
        const [moodleData, ravenData] = await Promise.all([
          getMoodleCourses(),
          getDataFromDb()
        ]);

        if (moodleData) {
          setGetAllDataMoodle(moodleData);
          setAllDataOfCourses(moodleData as unknown as Course[]);
        }

        if (ravenData) {
          const unifiedRavenData = [
            ...((ravenData as unknown as RavenCourse[]) || [])
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
    setCurrentPage(1);

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
  const { onNavigateForward, onNavigueteBackward, onNavigateToPage } =
    usePaginationHandlers({
      currentPage,
      totalPages,
      setCurrentPage,
      setIsDataOnLoading
    });
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
                    setCurrentPage={setCurrentPage}
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
                      {valueOfUrl.includes('intelligence artificielle') ||
                      valueOfUrl.includes('Intelligence%20 %20artificielle')
                        ? 'Intelligence Artificielle'
                        : valueOfUrl
                            .toLocaleLowerCase()
                            .includes('marketing communication')
                        ? 'Marketing et Communication'
                        : valueOfUrl}
                    </span>
                  </h2>
                </div>
                <Spacer />
                <div className='card__courses__description'>
                  <h3>
                    Decouvrez le parcours{' '}
                    {valueOfUrl.includes('intelligence artificielle') ||
                    valueOfUrl.includes('Intelligence%20 %20artificielle')
                      ? 'Intelligence Artificielle'
                      : valueOfUrl
                          .toLocaleLowerCase()
                          .includes('marketing communication')
                      ? 'Marketing et Communication'
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
                    <AllCourseByType
                      courses={paginatedData as Course[]}
                      valueOfUrl={valueOfUrl}
                    />
                  ) : (
                    <div className=''>
                      <p className='no-cours'>
                        Aucune correspondance exacte.
                        <div>
                          Modifiez ou supprimez certains de vos filtres ou
                          ajustez votre catégorie de recherche.
                        </div>
                      </p>
                    </div>
                  )}
                </div>

                <div className='pagination-container'>
                  <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNavigateForward={onNavigateForward}
                    onNavigueteBackward={onNavigueteBackward}
                    onNavigateToPage={onNavigateToPage}
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
