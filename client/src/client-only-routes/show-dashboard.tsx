import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  addRavenTokenToLocalStorage,
  generateRavenTokenAcces,
  getAwsUserCoursesProgress,
  getExternalResource,
  getRavenTokenDataFromLocalStorage,
  removeRavenTokenFromLocalStorage
} from '../utils/ajax';

import envData from '../../../config/env.json';
import { createFlashMessage } from '../components/Flash/redux';
import { Loader, Spacer } from '../components/helpers';
import CoursCardProgress from '../components/Dashboard/cours-card-progress';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../redux';

import { User } from '../redux/prop-types';

import renderCourseProgressSkeletons from '../components/helpers/render-course-progress-skeleton';

const { apiLocation, moodleApiBaseUrl, moodleApiToken, moodleBaseUrl } =
  envData;

// TODO: update types for actions
interface ShowDashboardProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

type MoodleUser = {
  id: number;
  email: string;
};
interface RavenTokenData {
  token: string;
  expiresIn: number;
  validFrom: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  valid_to: string;
}

type MoodleCourse = {
  id: number;
  displayname: string;
  progress: number;
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
interface RavenFetchUserCoursesProgressDto {
  token: string;
  fromDate: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  valid_to: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  email_id: string;
}
interface RavenFetchUserCoursesProgressDtogress {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  learningobject_id: number;
  name: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  display_name: string;
  progress: number;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  launch_url: string;
}
const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

export function ShowDashboard(props: ShowDashboardProps): JSX.Element {
  // const { t } = useTranslation();
  const { isSignedIn, user, navigate, showLoading } = props;
  const { currentsSuperBlock, email } = user;

  const [moodleCourses, setMoodleCourses] = useState<MoodleCourse[] | null>();
  const [ravenCoursesProgress, setRavenCoursesProgress] = useState<
    RavenFetchUserCoursesProgressDtogress[] | null
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataLoadingMessage, setDataLoadingMessage] = useState<string>(
    'Chargement en cours ...'
  );

  console.log('progression rsven ', ravenCoursesProgress);

  const getRavenProgress = async (email: string) => {
    setIsLoading(true);
    await getRavenToken();

    const ravenLocalToken = getRavenTokenDataFromLocalStorage();
    const ravenData: RavenFetchUserCoursesProgressDto = {
      token: ravenLocalToken?.token || '',
      fromDate: '01-01-2023',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      valid_to: '06-24-2024',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      email_id: email
    };
    const getReveanCourses = await getAwsUserCoursesProgress(ravenData);

    console.log('les ', getReveanCourses);
    if (getReveanCourses) {
      setRavenCoursesProgress(
        getReveanCourses as RavenFetchUserCoursesProgressDtogress[]
      );
      setIsLoading(false);
    }
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
      console.log('validitime', ravenTokenData.valid_to);
      // 1 heure en millisecondes
      const oneHourInMillis = 60 * 60 * 1000;
      // Calculer la différence de temps en millisecondes
      const timeDifference =
        tokenExpirationTime.getTime() - currentTime.getTime();
      console.log(
        'les temps actu',
        timeDifference,
        'time',
        currentTime.getTime(),
        'token:',
        tokenExpirationTime.getTime(),
        'compo:',
        timeDifference <= oneHourInMillis,
        'test:',
        oneHourInMillis
      );

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

  const getMoodleProgressCourses = async () => {
    const moodleUser = await getExternalResource<MoodleUser[]>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_user_get_users_by_field&moodlewsrestformat=json&field=email&values[0]=${email}`
    );
    if (moodleUser != null && moodleUser.length > 0) {
      const moodleUserCoursesProgress = await getExternalResource<
        MoodleCourse[]
      >(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=${moodleUser[0].id}`
      );
      if (
        moodleUserCoursesProgress != null &&
        moodleUserCoursesProgress.length > 0
      ) {
        setMoodleCourses(moodleUserCoursesProgress);
      } else {
        setMoodleCourses(null);
      }
    } else {
      setMoodleCourses(null);
    }
  };

  useEffect(() => {
    void getRavenProgress(email);
    void getMoodleProgressCourses();
    const timer = setTimeout(() => {
      if (
        (!currentsSuperBlock || currentsSuperBlock.length == 0) &&
        moodleCourses == null
      ) {
        setDataLoadingMessage(`Aucun cours suivi pour l'instant`);
      }
    }, 3000);
    return () => {
      setMoodleCourses([]); // cleanup useEffect to perform a React state update
      clearTimeout(timer);
    };
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
      {/* <Helmet title={`${t('buttons.settings')} | Code Learning Plateform`} /> */}
      <Helmet title={`Tableau de bord | Kadea Online`} />
      <Grid fluid={false} className='bg-light'>
        <main>
          <div className=''>
            <Spacer size={1} />
            <Row className='super-block-intro-page'>
              <Col md={12} sm={12} xs={12}>
                <div className=''>
                  <h1
                    className='big-subheading'
                    style={{ overflowWrap: 'break-word' }}
                  >
                    {'Mes cours'}
                  </h1>
                </div>
              </Col>

              {currentsSuperBlock && currentsSuperBlock.length > 0 && (
                <>
                  {currentsSuperBlock.map(
                    (
                      {
                        totalChallenges,
                        totalCompletedChallenges,
                        superBlockName,
                        superBlockTranslatedName,
                        superBlockPath
                      },
                      index
                    ) => {
                      return (
                        <Col key={index} className='' md={12} sm={12} xs={12}>
                          <Spacer size={1} />
                          <>
                            {!isLoading ? (
                              <div className='block-ui bg-secondary standard-radius-5'>
                                <CoursCardProgress
                                  challengeCount={totalChallenges}
                                  completedChallengeCount={
                                    totalCompletedChallenges
                                  }
                                  coursName={
                                    superBlockTranslatedName &&
                                    superBlockTranslatedName?.length > 0
                                      ? superBlockTranslatedName
                                      : superBlockName
                                  }
                                  superBlockPath={superBlockPath}
                                />
                              </div>
                            ) : (
                              <>
                                <div className='block-ui bg-secondary standard-radius-5'>
                                  {' '}
                                  {renderCourseProgressSkeletons(1)}
                                </div>
                                <Spacer size={1} />{' '}
                                <div className='block-ui bg-secondary standard-radius-5'>
                                  {' '}
                                  {renderCourseProgressSkeletons(1)}
                                </div>
                                <Spacer size={1} />{' '}
                                <div className='block-ui bg-secondary standard-radius-5'>
                                  {' '}
                                  {renderCourseProgressSkeletons(1)}
                                </div>{' '}
                              </>
                            )}
                          </>

                          <Spacer size={1} />
                        </Col>
                      );
                    }
                  )}
                </>
              )}

              {moodleCourses != null && moodleCourses?.length > 0 && (
                <>
                  {moodleCourses.map((moodleCourse, index) => {
                    return (
                      <Col key={index} className='' md={12} sm={12} xs={12}>
                        <Spacer size={1} />
                        <div className='block-ui bg-secondary standard-radius-5'>
                          {!isLoading ? (
                            <CoursCardProgress
                              challengeCount={100}
                              completedChallengeCount={moodleCourse.progress}
                              coursName={moodleCourse.displayname}
                              sameTab={true}
                              external={true}
                              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                              superBlockPath={`${moodleBaseUrl}/course/view.php?id=${moodleCourse.id}`}
                            />
                          ) : (
                            renderCourseProgressSkeletons(2)
                          )}
                        </div>
                        <Spacer size={1} />
                      </Col>
                    );
                  })}
                </>
              )}
              {ravenCoursesProgress && ravenCoursesProgress.length > 0 && (
                <>
                  {ravenCoursesProgress.map((ravenCourse, index) => {
                    return (
                      <Col key={index} className='' md={12} sm={12} xs={12}>
                        <Spacer size={1} />
                        <div className='block-ui bg-secondary standard-radius-5'>
                          {!isLoading ? (
                            <CoursCardProgress
                              challengeCount={100}
                              completedChallengeCount={ravenCourse.progress}
                              coursName={ravenCourse.display_name}
                              sameTab={true}
                              external={true}
                              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                              superBlockPath={ravenCourse.launch_url}
                            />
                          ) : (
                            renderCourseProgressSkeletons(2)
                          )}
                        </div>
                        <Spacer size={1} />
                      </Col>
                    );
                  })}
                </>
              )}

              {(!currentsSuperBlock || currentsSuperBlock.length == 0) &&
                moodleCourses == null && (
                  <Col className='' md={12} sm={12} xs={12}>
                    <Spacer size={1} />
                    <div className='block-ui bg-secondary'>
                      <p className='h3'>{dataLoadingMessage}</p>
                    </div>
                    <Spacer size={1} />
                  </Col>
                )}
            </Row>
            <Spacer size={1} />
          </div>
          <Spacer size={2} />
        </main>
      </Grid>
    </>
  );
}

ShowDashboard.displayName = 'ShowDashboard';

export default connect(mapStateToProps, mapDispatchToProps)(ShowDashboard);
