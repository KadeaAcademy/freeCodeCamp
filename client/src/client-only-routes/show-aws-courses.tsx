import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  getAwsCourses,
  getRavenTokenDataFromLocalStorage,
  getAwsPath
} from '../utils/ajax';

import { createFlashMessage } from '../components/Flash/redux';
import {
  Loader,
  Spacer,
  renderCourseCardSkeletons
} from '../components/helpers';
import CourseCard from '../components/CourseCard/course-card';
import awsLogo from '../assets/images/aws-logo.png';
import PathCard from '../components/PathCard/path-card';
import { convertTime } from '../utils/allFunctions';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../redux';

import { User } from '../redux/prop-types';
import envData from '../../../config/env.json';

const { apiLocation } = envData;

interface ShowAwsCoursesProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

type RavenCourse = {
  learningobjectid: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  launch_url: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  short_description: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  long_description: string;
  createddate: string;
  updateddate: string;
  contenttype: string;
  duration: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  skill_level: string;
};

interface RavenFetchCoursesDto {
  apiKey: string;
  token: string;
  fromDate: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  valid_to: string;
}

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

export function ShowAwsCourses(props: ShowAwsCoursesProps): JSX.Element {
  const { showLoading, isSignedIn } = props;
  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(true);

  const [ravenCourses, setRavenCourses] = useState<RavenCourse[]>([]);
  const [ravenPath, setRavenPath] = useState<RavenCourse[]>([]);
  const [courseNumber, setCourseNumber] = useState<number>(0);

  const ravenLocalToken = getRavenTokenDataFromLocalStorage();

  const getRavenResources = async (data: RavenFetchCoursesDto) => {
    const getReveanCourses = await getAwsCourses(data);
    setRavenCourses(getReveanCourses as RavenCourse[]);
  };

  const getRavenResourcesPath = async (data: RavenFetchCoursesDto) => {
    const getReveanCourses = await getAwsPath(data);
    setRavenPath(getReveanCourses as unknown as RavenCourse[]);
    // setCourseNumber(courseNumber + ravenPath.length);
  };

  const ravenData: RavenFetchCoursesDto = {
    apiKey: 'gyKJycM8xl1IooROdVQGB59tjL0CpaEk3XwLustN',
    token: ravenLocalToken?.token || '',
    fromDate: '01-01-2023',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    valid_to: '06-24-2024'
  };
  useEffect(() => {
    setCourseNumber(ravenPath.length + ravenCourses.length);
    console.log(courseNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ravenPath, ravenCourses]);
  useEffect(() => {
    void getRavenResourcesPath(ravenData);

    const timer = setTimeout(() => {
      if (isDataOnLoading) {
        setIsDataOnLoading(false);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDataOnLoading]);

  useEffect(() => {
    void getRavenResources(ravenData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      <Helmet title={`AWS Cours | Kadea Online`} />
      <Grid fluid={false} className='bg-light'>
        <Spacer size={1} />
        <div>
          <Row className='super-block-intro-page'>
            <Col md={12} sm={12} xs={12}>
              <p className='text-love-light fw-bold'>Cours</p>
              <h1 className='big-heading'>{`AWS Cours`}</h1>
              <Spacer size={1} />
            </Col>
            <Col className='' md={12} sm={12} xs={12}>
              <div className='alert bg-secondary standard-radius-5'>
                <p>
                  {`
                  Ce cours est conçu pour montrer aux participants comment 
                  optimiser l'utilisation du cloud AWS grâce à la compréhension 
                  de ces nombreux services et de leur intégration dans la création 
                  de solutions basées sur le cloud.
                  `}
                </p>
                <Spacer size={1} />
                <p>
                  {`
                  Etant donné que les solutions architecturales peuvent varier selon 
                  le secteur, le type d'application et la taille de l'entreprise, 
                  ce cours met l'accent sur les bonnes pratiques relatives au cloud AWS 
                  afin d'aider les participants à construire des solutions informatiques 
                  optimisées sur AWS. Cette formation présente également de nombreuses études 
                  de cas expliquant comment certains clients AWS ont conçu leurs infrastructures, 
                  mais aussi les stratégies et services qu'ils ont implémentés. 
                  A l'issue de cette formation, vous serez en capacité de créer une grande variété 
                  d'infrastructures en recourant aux différents services vu au travers de ce module.
                  `}
                </p>
              </div>
            </Col>
            <Spacer />
          </Row>
        </div>
      </Grid>

      <Grid fluid={false}>
        <Spacer size={1} />
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className='course__number'>
              <h2 className='big-subheading'>{`Parcours d'apprentissage`}</h2>
              <span>{courseNumber} cours</span>
            </div>
            <Spacer size={2} />
          </Col>
          <Col className='' md={12} sm={12} xs={12}>
            <div className='card-course-detail-container'>
              {!isDataOnLoading ? (
                <>
                  {ravenPath && ravenPath.length > 0 ? (
                    ravenPath.map((course, index) => (
                      <PathCard
                        key={course.name}
                        icon={awsLogo}
                        isAvailable={true}
                        isSignedIn={isSignedIn}
                        title={`${index + 1}. ${course.name}`}
                        buttonText={`Suivre le cours  `}
                        link={`${course.launch_url}`}
                        description={course.long_description}
                        duration={convertTime(course.duration)}
                        level={course.skill_level}
                      />
                    ))
                  ) : (
                    <div className='card-course-detail-container'>
                      {renderCourseCardSkeletons(6)}
                    </div>
                  )}
                  {ravenCourses && ravenCourses.length > 0 ? (
                    ravenCourses.map((course, index) => (
                      <CourseCard
                        key={course.name}
                        isAvailable={true}
                        isSignedIn={isSignedIn}
                        title={`${index + 1}. ${course.name}`}
                        buttonText={`Suivre le cours  `}
                        link={`${course.launch_url}`}
                        description={course.short_description}
                      />
                    ))
                  ) : (
                    <div className='card-course-detail-container'>
                      {renderCourseCardSkeletons(6)}
                    </div>
                  )}
                </>
              ) : (
                <div className='card-course-detail-container'>
                  {renderCourseCardSkeletons(6)}
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

ShowAwsCourses.displayName = 'ShowAwsCourses';

export default connect(mapStateToProps, mapDispatchToProps)(ShowAwsCourses);
