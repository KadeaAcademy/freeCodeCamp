import React from 'react';
import { useParams } from '@reach/router';
import { Grid, Row } from '@freecodecamp/react-bootstrap';
import '../components/AwsCourses/AwsLearningPath/video-player.css';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import envData from '../../../config/env.json';
import { createFlashMessage } from '../components/Flash/redux';
import { Loader, Spacer } from '../components/helpers';
import VideoList from '../components/AwsCourses/AwsLearningPath/video-list';
import VideoPlayer from '../components/AwsCourses/AwsLearningPath/video-player';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../redux';

import { User } from '../redux/prop-types';
import datas from '../components/AwsCourses/AwsLearningPath/video-data.json';

const { apiLocation } = envData;

// TODO: update types for actions
interface ShowAwsLearningPathProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
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

export function ShowAwsLearningPath(
  props: ShowAwsLearningPathProps
): JSX.Element {
  const { showLoading, isSignedIn } = props;
  const params: Record<string, undefined> = useParams();
  const [selectedVideo, setSelectedVideo] = React.useState(datas.videos[0]);
  const awsCoursTitle: string | undefined =
    'course' in params ? params.course : '';

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      <Helmet
        title={`${
          awsCoursTitle ? awsCoursTitle.replace(/-/g, ' ') : 'AWS Course'
        } | Kadea Online`}
      />
      <Grid fluid={false} className='bg-light'>
        <Row>
          {'course' in params && (
            <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              <div className=''>
                <br />
                <p className='text-love-light fw-bold'>Cours</p>
                <h1 className=''>
                  {awsCoursTitle && awsCoursTitle.replace(/-/g, ' ')}
                </h1>
              </div>
            </div>
          )}
          <div className='col-lg-8 col-md-8 col-sm-12 col-xs-12'>
            <div>
              <Spacer size={1} />
              <VideoPlayer videoLink={selectedVideo?.videoUrl} />
              <Spacer size={1} />
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12 col-xs-12'>
            <div>
              <Spacer size={1} />
              <VideoList
                setSelectedVideo={setSelectedVideo}
                id={0}
                videoTitle={''}
                videoTime={''}
              />
              <Spacer size={1} />
            </div>
          </div>
        </Row>
        <Spacer size={1} />
      </Grid>
    </>
  );
}

ShowAwsLearningPath.displayName = 'ShowAwsLearningPath';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowAwsLearningPath);
