import React, { useEffect, useMemo } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  MoodleCourse,
  MoodleCourseCategory,
  MoodleCoursesCatalogue,
  RavenCourse
} from '../../../client-only-routes/show-courses';
import {
  getAwsPath,
  getExternalResource,
  getMoodleCourses,
  getRavenToken
} from '../../../utils/ajax';
import { splitArray } from '../../helpers';
import sortCourses from '../../helpers/sort-course';
import {
  centraliseRavenData,
  myDataMoodle,
  tokenRaven
} from '../../../redux/atoms';
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

const { moodleApiBaseUrl, moodleApiToken } = envData;

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
  const setValueOfToken = useSetRecoilState(tokenRaven);
  const [tokeFromRaven, setTokenFromRaven] = useRecoilState(tokenRaven);
  const setGetAllRavenData = useSetRecoilState(centraliseRavenData);
  const setGetAllDataMoodle = useSetRecoilState(myDataMoodle);

  const getAllMoodleCourses = async () => {
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

    const getReveanCourses = await getAwsPath();
    setRavenCourses(getReveanCourses as unknown as RavenCourse[]);
    setIsDataOnLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [moodleData, ravenData] = await Promise.all([
          getMoodleCourses(),
          getAwsPath()
        ]);

        if (moodleData) {
          setGetAllDataMoodle(moodleData);
        }

        if (ravenData) {
          const unifiedRavenData = [
            ...((ravenData as unknown as RavenCourse[]) || [])
          ];

          setGetAllRavenData(unifiedRavenData);
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

  const topics = useMemo(() => {
    return [
      {
        title: 'Populaires',
        id: 'popular',
        onClick: () => {
          setCurrentCategory('popular');
          setMoodleCourses(null);
          void getRavenResources();
          void getAllMoodleCourses();
        }
      },
      {
        title: 'AWS',
        id: 'aws',
        onClick: () => {
          setCurrentCategory('aws');
          setMoodleCourses(null);
          void getAwsPath();
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
    const getRaveToken = async () => {
      try {
        const ravenToken = await getRavenToken();
        setTokenFromRaven(ravenToken as RavenTokenData);
        setValueOfToken(ravenToken as RavenTokenData);
      } catch (error) {
        console.error('Failed to get Raven Token', error);
      }
    };

    void getRaveToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once when the component mounts

  const memorizedToken = useMemo(() => {
    return tokeFromRaven;
  }, [tokeFromRaven]);

  return (
    <div className='formation__button_list'>
      {topics.map((topic, i) => (
        <button
          onClick={topic.onClick}
          className={`button-list ${
            currentCategory == topic.id ? 'active' : ''
          } ${
            topic.title == 'AWS' && memorizedToken == null
              ? 'hide__categoryyt'
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
