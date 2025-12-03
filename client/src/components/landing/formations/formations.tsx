import React, { useEffect, useState } from 'react';
import './formation.css';
import { FaAngleDown } from 'react-icons/fa';
import { useSetRecoilState } from 'recoil';
import LaptopIcon from '../../../assets/images/laptop.svg';
import AlgoIcon from '../../../assets/images/algorithmIcon.svg';
import clockIcon from '../../../assets/icons/iconeHorloge.svg';
import awsLogo from '../../../assets/images/aws-logo.png';
import { Image } from '../../../../../tools/ui-components/src/image/image';
import { convertTime } from '../../../utils/allFunctions';
import {
  MoodleCourse,
  MoodleCourseCategory,
  MoodleCoursesCatalogue,
  RavenCourse
} from '../../../client-only-routes/show-courses';
import {
  getAwsPath,
  getDataFromDb,
  getExternalResource
} from '../../../utils/ajax';
import { Link, splitArray } from '../../helpers';
import sortCourses from '../../helpers/sort-course';
import { myDataMoodle, myDataRaven } from '../../../redux/atoms';
import CoursesFilterSection from './filter-section';
import envData from './../../../../../config/env.json';

const popularCourses = [
  {
    title: 'Responsive Web Design',
    asset: LaptopIcon,
    link: '/learn/responsive-web-design/'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    asset: AlgoIcon,
    link: '/learn/javascript-algorithms-and-data-structures'
  }
];

const { moodleApiBaseUrl, moodleApiToken, moodleBaseUrl } = envData;

function Formations() {
  const [courseCategories, setCourseCategories] = useState<
    MoodleCourseCategory[] | null
  >();
  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(false);
  const [moodleCourses, setMoodleCourses] =
    useState<MoodleCoursesCatalogue | null>();
  const [ravenCourses, setRavenCourses] = useState<
    RavenCourse[] | null | undefined
  >([]);
  const [currentCategory, setCurrentCategory] = useState<string>('popular');
  const setMyAllRavenCourse = useSetRecoilState(myDataRaven);
  const setMyAllMoodleCourse = useSetRecoilState(myDataMoodle);

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
      return sortedCourses;
    } else {
      setMoodleCourses(null);
    }
  };

  const allCourses = [
    ...(ravenCourses || []),
    ...(moodleCourses?.result ? moodleCourses.result.flat() : [])
  ];

  const AllPopularCourses = [
    ...popularCourses,
    ...(ravenCourses?.splice(
      Math.floor(Math.random() * (1 - ravenCourses.length) + 1),
      2
    ) || []), // Prend les deux premiers RavenCourse
    ...(moodleCourses?.result
      ? moodleCourses.result
          .flat()
          .splice(Math.floor(Math.random() * (0 - 6) + 5), 2)
      : [])
  ];

  useEffect(() => {
    void getMoodleCourseCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    const fetchData = () => {
      try {
        // Séparer les cours Raven et Moodle
        const ravenAllCourses = getDataFromDb() as unknown as RavenCourse[];

        const ravenDataWhenEmptyDb = getAwsPath() as unknown as RavenCourse[];
        if (ravenAllCourses.length > 0) {
          setMyAllRavenCourse(ravenAllCourses);
        } else {
          setMyAllRavenCourse(ravenDataWhenEmptyDb);
        }

        const moodleCourses =
          getMoodleCourseCategory as unknown as MoodleCoursesCatalogue;
        setMyAllMoodleCourse(moodleCourses);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    void fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id='trainings' className='formation'>
      <h2 className='formation__title'>
        Découvre les formations gratuites de Kadea{' '}
        <span className='formation__title-rouge'>Online</span>
      </h2>
      <CoursesFilterSection
        courseCategories={courseCategories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        setIsDataOnLoading={setIsDataOnLoading}
        setMoodleCourses={setMoodleCourses}
        setRavenCourses={setRavenCourses}
      />
      <div className='trainings-list'>
        {isDataOnLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                className='training-card flex-col items-start'
                key={i.valueOf()}
              >
                <div className='skeleton-title no-margin'></div>
                <div className='skeleton-title load'></div>
              </div>
            ))
          : currentCategory == 'popular'
          ? AllPopularCourses.map((course, i) => {
              if ('asset' in course) {
                return (
                  <Link
                    to={course.link}
                    className='training-card'
                    key={i.valueOf()}
                  >
                    <div className='training-img'>
                      <Image
                        src={course.asset}
                        alt={`${course.title} cover image`}
                      />
                    </div>
                    <div className='training-details'>
                      <h3 className='training-title'>{course.title}</h3>
                    </div>
                  </Link>
                );
              } else if ('launch_url' in course) {
                return (
                  <Link
                    to={course.launch_url}
                    className='training-card'
                    key={i.valueOf()}
                  >
                    <div className='training-img'>
                      <Image src={awsLogo} alt={`course cover image`} />
                    </div>
                    <div className='training-details'>
                      <h3 className='training-title'>{`${i + 1}. ${
                        course.name
                      }`}</h3>
                      <div className='training-stats'>
                        <div className='stat'>
                          <Image src={clockIcon} alt='Clock icon' />
                          <span>{convertTime(course.duration)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              } else {
                return (
                  <Link
                    to={`${moodleBaseUrl}/course/view.php?id=${course.id}`}
                    className='training-card'
                    key={i.valueOf()}
                  >
                    <div className='training-img'>
                      <Image src={AlgoIcon} alt={`course cover image`} />
                    </div>
                    <div className='training-details'>
                      <h3 className='training-title'>{`${course.displayname}`}</h3>
                    </div>
                  </Link>
                );
              }
            })
          : allCourses.map((course, i) => {
              if ('launch_url' in course) {
                // Vérifie si le cours est un cours Raven
                return (
                  <Link
                    to={course.launch_url}
                    className='training-card'
                    key={i.valueOf()}
                  >
                    <div className='training-img'>
                      <Image src={awsLogo} alt={`course cover image`} />
                    </div>
                    <div className='training-details'>
                      <h3 className='training-title'>{`${i + 1}. ${
                        course.name
                      }`}</h3>
                      <div className='training-stats'>
                        <div className='stat'>
                          <Image src={clockIcon} alt='Clock icon' />
                          <span>{convertTime(course.duration)}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              } else {
                // Si ce n'est pas un cours Raven, c'est un cours Moodle
                return (
                  <Link
                    to={`${moodleBaseUrl}/course/view.php?id=${course.id}`}
                    className='training-card'
                    key={i.valueOf()}
                  >
                    <div className='training-img'>
                      <Image src={AlgoIcon} alt={`course cover image`} />
                    </div>
                    <div className='training-details'>
                      <h3 className='training-title'>{`${course.displayname}`}</h3>
                    </div>
                  </Link>
                );
              }
            })}
      </div>
      <Link to='/catalogue' className='more-courses'>
        <span>Plus de cours</span>
        <span className='text-primary'>
          <FaAngleDown />
        </span>
      </Link>
    </section>
  );
}

export default Formations;
