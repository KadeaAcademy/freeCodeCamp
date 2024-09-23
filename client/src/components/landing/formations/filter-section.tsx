import React, { useEffect, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  MoodleCourse,
  MoodleCourseCategory,
  MoodleCoursesCatalogue,
  RavenCourse
} from '../../../client-only-routes/show-courses';
import {
  addRavenTokenToLocalStorage,
  generateRavenTokenAcces,
  getAllRessources,
  getAwsCourses,
  getExternalResource,
  getRavenPathResources,
  getRavenTokenDataFromLocalStorage,
  removeRavenTokenFromLocalStorage
} from '../../../utils/ajax';
import { splitArray } from '../../helpers';
import sortCourses from '../../helpers/sort-course';
import { myDataMoodle, myDataRaven, tokenRaven } from '../../../redux/atoms';
import envData from './../../../../../config/env.json';

type MoodleCoursesFiltered = {
  courses: MoodleCourse[] | null;
  warnings: [];
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

const CoursesFilterSection = ({
  courseCategories,
  setMoodleCourses,
  setIsDataOnLoading,
  setRavenCourses,
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
  const getValueOfAwsToken = useRecoilValue(tokenRaven);
  const setDataCoursesMoodle = useSetRecoilState(myDataMoodle);
  const setDataCoursesRaven = useSetRecoilState(myDataRaven);

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
  const getRavenResources = async () => {
    setIsDataOnLoading(true);
    await getRavenToken();

    const ravenLocalToken = getRavenTokenDataFromLocalStorage();
    const ravenData: RavenFetchCoursesDto = {
      apiKey: ravenAwsApiKey,
      token: ravenLocalToken?.token || '',
      currentPage: Math.floor(Math.random() * 4) + 1,
      fromDate: '01-01-2023',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      valid_to: '06-24-2024'
    };
    const getReveanCourses = await getAwsCourses(ravenData);
    setRavenCourses(getReveanCourses as RavenCourse[]);
    setIsDataOnLoading(false);
  };

  const getRavenToken = async () => {
    const ravenTokenData = getRavenTokenDataFromLocalStorage();

    if (ravenTokenData === null) {
      // Si aucun token n'existe en local storage, générer un nouveau token
      const generateRavenToken = await generateRavenTokenAcces();

      if (generateRavenToken) {
        addRavenTokenToLocalStorage(generateRavenToken as RavenTokenData);
        return generateRavenToken; // Retourner le nouveau token
      } else {
        return null; // Retourner null si la génération a échoué
      }
    } else {
      // Vérifier si le token existant a expiré d'une heure ou plus
      const tokenExpirationTime = new Date(ravenTokenData.valid_to);
      const currentTime = new Date();
      // 1 heure en millisecondes
      const oneHourInMillis = 60 * 60 * 1000;
      // Calculer la différence de temps en millisecondes
      const timeDifference =
        tokenExpirationTime.getTime() - currentTime.getTime();

      if (timeDifference <= oneHourInMillis) {
        // Le token a expiré d'une heure ou plus, donc le supprimer et générer un nouveau
        removeRavenTokenFromLocalStorage();
        const generateRavenToken = await generateRavenTokenAcces();

        if (generateRavenToken) {
          addRavenTokenToLocalStorage(generateRavenToken as RavenTokenData);
          return generateRavenToken; // Retourner le nouveau token
        } else {
          return null; // Retourner null si la génération a échoué
        }
      } else {
        // Le token est encore valide, retourner le token existant
        return ravenTokenData;
      }
    }
  };

  const topics = useMemo(() => {
    return [
      {
        title: 'Populaires',
        id: 'popular',
        onClick: () => {
          setCurrentCategory('popular');
          setMoodleCourses(null);
          void getRavenResources();
          void getMoodleCourses();
        }
      },
      {
        title: 'AWS',
        id: 'aws',
        onClick: () => {
          setCurrentCategory('aws');
          setMoodleCourses(null);
          void getRavenResources();
        }
      },
      ...(courseCategories ?? []).map(course => ({
        title: course.name,
        id: course.id,
        onClick: () => {
          setCurrentCategory(course.id.toString());
          setRavenCourses(null);
          void filterByCategory(course?.id);
        }
      }))
    ];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setCurrentCategory, courseCategories]);

  useEffect(() => {
    void getRavenPathResources(1);
    void getRavenResources();
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

  return (
    <div className='formation__button_list'>
      {topics.map((topic, i) => (
        <button
          onClick={topic.onClick}
          className={`button-list ${
            currentCategory == topic.id ? 'active' : ''
          } ${
            topic.title == 'AWS' && getValueOfAwsToken == null
              ? 'hide__category'
              : ''
          }`}
          key={i.valueOf()}
        >
          {topic.title.replace('&amp;', '&')}
        </button>
      ))}
    </div>
  );
};

CoursesFilterSection.displayName = 'CoursesFilterSection';
export default CoursesFilterSection;
