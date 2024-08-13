import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import {
  Spacer,
  renderCourseCardSkeletons,
  splitArray
} from '../../../components/helpers';

import LaptopIcon from '../../../assets/images/laptop.svg';
import AlgoIcon from '../../../assets/images/algorithmIcon.svg';
import LaediesActIcon from '../../../assets/images/partners/we-act-logo.png';
import awsLogo from '../../../assets/images/aws-logo.png';
import './what-will-you-learn.css';

import CourseCard from '../../CourseCard/course-card';

interface LandingDetailsProps {
  isSignedIn?: true;
}
import envData from '../../../../../config/env.json';
import {
  MoodleCourse,
  MoodleCourseCategory,
  MoodleCoursesCatalogue
} from '../../../client-only-routes/show-courses';
import {
  addRavenTokenToLocalStorage,
  generateRavenTokenAcces,
  getAwsCourses,
  getExternalResource,
  getRavenTokenDataFromLocalStorage
} from '../../../utils/ajax';
import { convertTime } from '../../../utils/allFunctions';
import sortCourses from '../../helpers/sort-course';
import CourseFilterList from './filter/course-filter';

const { moodleApiBaseUrl, moodleApiToken, ravenAwsApiKey, moodleBaseUrl } =
  envData;
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

const WhatWillYouLearn = ({ isSignedIn }: LandingDetailsProps): JSX.Element => {
  const [courseCategories, setCourseCategories] = useState<
    MoodleCourseCategory[] | null
  >();
  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(false);
  const [moodleCourses, setMoodleCourses] =
    useState<MoodleCoursesCatalogue | null>();
  const [ravenCourses, setRavenCourses] = useState<
    RavenCourse[] | null | undefined
  >([]);
  const [currentCategory, setCurrentCategory] = useState<string>('Populaires');

  const getRavenResources = async () => {
    await getRavenToken();

    const ravenLocalToken = getRavenTokenDataFromLocalStorage();
    const ravenData: RavenFetchCoursesDto = {
      apiKey: ravenAwsApiKey,
      token: ravenLocalToken?.token || '',
      currentPage: 1,
      fromDate: '01-01-2023',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      valid_to: '06-24-2024'
    };
    const getReveanCourses = await getAwsCourses(ravenData);
    setRavenCourses(getReveanCourses as RavenCourse[]);
  };

  const getRavenToken = async () => {
    const ravenLocalToken = getRavenTokenDataFromLocalStorage();

    if (ravenLocalToken === null) {
      const generateRavenToken = await generateRavenTokenAcces();

      if (generateRavenToken) {
        addRavenTokenToLocalStorage(generateRavenToken as RavenTokenData);
      }
    }
  };

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

  const allCourses = [
    ...(ravenCourses || []),
    ...(moodleCourses?.result ? moodleCourses.result.flat() : [])
  ];

  const formatdate = (data: number) => {
    return new Date(data * 1000).toLocaleDateString();
  };

  useEffect(() => {
    void getMoodleCourseCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    void getMoodleCourses();
    console.log(isSignedIn); //this for slint debogue

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
    void getRavenResources();
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

  return (
    <div className='landing-top'>
      <div>
        <h2 className='big-heading text-love-light text-center'>{`Le cours populaires`}</h2>
        <br />

        <CourseFilterList
          courseCategories={courseCategories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
          setIsDataOnLoading={setIsDataOnLoading}
          setMoodleCourses={setMoodleCourses}
          setRavenCourses={setRavenCourses}
        />
      </div>
      <Spacer size={2} />

      <div className='card-course-detail-container-landing'>
        {!isDataOnLoading ? (
          <>
            {currentCategory == 'Populaires' && (
              <>
                <CourseCard
                  icon={LaptopIcon}
                  sponsorIcon={LaediesActIcon}
                  alt=''
                  isAvailable={true}
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
            {allCourses.map((course, index) => {
              if ('launch_url' in course) {
                // Vérifie si le cours est un cours Raven
                return (
                  <CourseCard
                    key={index}
                    icon={awsLogo}
                    isAvailable={true}
                    title={`${index + 1}. ${course.name}`}
                    buttonText={`Suivre le cours`}
                    link={`${course.launch_url}`}
                    duration={convertTime(course.duration)}
                    description={course.short_description}
                  />
                );
              } else {
                // Si ce n'est pas un cours Raven, c'est un cours Moodle
                return (
                  <CourseCard
                    key={index + course.id}
                    isAvailable={course.visible == 1}
                    sameTab={true}
                    external={true}
                    title={`${course.displayname}`}
                    buttonText={`Suivre le cours`}
                    createAt={formatdate(course.timecreated)}
                    link={`${moodleBaseUrl}/course/view.php?id=${course.id}`}
                    description={course.summary}
                  />
                );
              }
            })}{' '}
          </>
        ) : (
          <div className='card-course-detail-container'>
            {renderCourseCardSkeletons(6)}
          </div>
        )}
      </div>
      <Spacer size={2} />
      <div>
        <Link className='course-cta' to='/catalogue'>
          {'Voir tous les cours'}
        </Link>
      </div>
    </div>
  );
};

WhatWillYouLearn.displayName = 'WhatWillYouLearn';
export default WhatWillYouLearn;
1;
