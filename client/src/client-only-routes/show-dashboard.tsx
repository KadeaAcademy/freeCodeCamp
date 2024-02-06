import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getExternalResource } from '../utils/ajax';

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

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

export function ShowDashboard(props: ShowDashboardProps): JSX.Element {
  // const { t } = useTranslation();
  const { isSignedIn, user, navigate, showLoading } = props;
  const { currentsSuperBlock, email } = user;

  const [moodleCourses, setMoodleCourses] = useState<MoodleCourse[] | null>();
  const [dataLoadingMessage, setDataLoadingMessage] = useState<string>(
    'Chargement en cours ...'
  );

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
                          <div className='block-ui bg-secondary standard-radius-5'>
                            <CoursCardProgress
                              challengeCount={totalChallenges}
                              completedChallengeCount={totalCompletedChallenges}
                              coursName={
                                superBlockTranslatedName &&
                                superBlockTranslatedName?.length > 0
                                  ? superBlockTranslatedName
                                  : superBlockName
                              }
                              superBlockPath={superBlockPath}
                            />
                          </div>
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
                          <CoursCardProgress
                            challengeCount={100}
                            completedChallengeCount={moodleCourse.progress}
                            coursName={moodleCourse.displayname}
                            sameTab={true}
                            external={true}
                            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                            superBlockPath={`${moodleBaseUrl}/course/view.php?id=${moodleCourse.id}`}
                          />
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
