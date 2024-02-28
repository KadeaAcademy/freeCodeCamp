import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getExternalResource } from '../utils/ajax';

import { createFlashMessage } from '../components/Flash/redux';
import { Loader, Spacer } from '../components/helpers';
// import '../components/CourseCard/courses-card.css';
import CourseCard from '../components/CourseCard/course-card';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../redux';

import { User } from '../redux/prop-types';
import envData from '../../../config/env.json';

const { apiLocation, moodleBaseUrl, moodleApiBaseUrl, moodleApiToken } =
  envData;

// TODO: update types for actions
interface ShowAwsCoursesProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

type MoodleCourse = {
  id: number;
  shortname: string;
  categoryid: number;
  categorysortorder: number;
  fullname: string;
  displayname: string;
  summary: string;
};

// type RavenTokenFormat = {
//   status: string,
//   message: string
// }

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
  const [moodleCourses, setMoodleCourses] = useState<MoodleCourse[]>();
  // const [ravenToken] = useState<RavenTokenFormat>();

  const getMoodleCourses = async () => {
    const moodleCatalogue = await getExternalResource<MoodleCourse[]>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_course_get_courses&moodlewsrestformat=json`
    );

    if (moodleCatalogue != null) {
      setMoodleCourses(moodleCatalogue);
    } else {
      setMoodleCourses([]);
    }
  };

  // const generateAccessToken = async () => {
  //   const ravenTokenAccess = await generateRaven360AccessToken<RavenTokenFormat>(
  //     // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  //     `${ravenAwsBaseUrl}/gettoken`,
  //     {
  //       apiKey: ravenAwsApiKey as string,
  //       clientId: ravenAwsClientId as string,
  //       clientSecret: ravenAwsClientSecretId as string
  //     }
  //   );

  //   console.log('ravenTokenAccess : ', ravenTokenAccess)

  //   if (ravenTokenAccess != null) {
  //     setRavenToken(ravenTokenAccess);
  //   } else {
  //     setRavenToken({} as RavenTokenFormat);
  //   }
  // };

  // useEffect(() => {
  //   void generateAccessToken();
  // }, []);

  useEffect(() => {
    void getMoodleCourses();
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
            <h2 className='big-subheading'>{`Parcours d'apprentissage`}</h2>
            <Spacer size={2} />
          </Col>
          <Col className='' md={12} sm={12} xs={12}>
            <div className='card-course-detail-container'>
              {moodleCourses &&
                moodleCourses.length >= 0 &&
                moodleCourses.map((course, index) => {
                  return (
                    // <CourseCard
                    //   key={course.id}
                    //   isAvailable={true}
                    //   isSignedIn={isSignedIn}
                    //   title={`${index + 1}. ${course.displayname}`}
                    //   buttonText={`Suivre le cours  `}
                    //   link={`/aws-courses/learning-path/${course.fullname.replace(
                    //     / /g,
                    //     '-'
                    //   )}`}
                    // />
                    <>
                      <CourseCard
                        key={course.id}
                        isAvailable={true}
                        isSignedIn={isSignedIn}
                        title={`${index + 1}. ${course.displayname}`}
                        buttonText={`Suivre le cours  `}
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        link={`${moodleBaseUrl}/course/view.php?id=${course.id}`}
                        description={course.summary}
                      />
                    </>
                  );
                })}
            </div>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

ShowAwsCourses.displayName = 'ShowAwsCourses';

export default connect(mapStateToProps, mapDispatchToProps)(ShowAwsCourses);
