import React, { useState, useEffect } from 'react';
import { useParams } from '@reach/router';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getExternalResource } from '../utils/ajax';

import { createFlashMessage } from '../components/Flash/redux';
import {
  Loader,
  Spacer,
  renderCourseCardSkeletons
} from '../components/helpers';
import CourseCard from '../components/CourseCard/course-card';
import PhBookBookmark from '../assets/images/ph-book-bookmark-thin.svg';

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
interface ShowLearningPathDetailProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
  location?: { state: { description: string } };
}

type MoodleCourse = {
  id: number;
  shortname: string;
  categoryid: number;
  categorysortorder: number;
  fullname: string;
  displayname: string;
  summary: string;
  visible: number;
};

type MoodleCoursesCatalogue = {
  courses: MoodleCourse[];
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

export function ShowLearningPathDetail(
  props: ShowLearningPathDetailProps
): JSX.Element {
  const { showLoading, isSignedIn, location } = props;
  const params: Record<string, undefined> = useParams();
  const [moodleCourses, setMoodleCourses] = useState<MoodleCourse[]>();
  const [isDataOnLoading, setIsDataOnLoading] = useState<boolean>(true);

  const categoryName: string | undefined =
    'category' in params ? params.category : '';
  const categoryId: string | undefined =
    'categoryId' in params ? params.categoryId : '';

  const getMoodleCourses = async () => {
    const moodleCatalogue = await getExternalResource<MoodleCoursesCatalogue>(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_course_get_courses_by_field&field=category&value=${categoryId}&moodlewsrestformat=json`
    );
    if (moodleCatalogue != null) {
      setMoodleCourses(
        moodleCatalogue.courses.filter(moodleCourse => {
          return moodleCourse.visible == 1;
        })
      );
    } else {
      setMoodleCourses([]);
    }
  };

  useEffect(() => {
    void getMoodleCourses();
    const timer = setTimeout(() => {
      if (isDataOnLoading) {
        setIsDataOnLoading(false);
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
      <Helmet
        title={`${
          categoryName ? categoryName.replace(/-/g, ' ') : ''
        } | Kadea Online`}
      />
      <Grid fluid={false} className='bg-light'>
        <Spacer size={1} />
        <div>
          <Row className='super-block-intro-page'>
            <Col md={12} sm={12} xs={12}>
              <p className='text-love-light fw-bold'>Parcours</p>
              <h1 className='big-heading'>
                {categoryName ? categoryName.replace(/-/g, ' ') : ''}
              </h1>
              <Spacer size={1} />
            </Col>
            <Col className='' md={12} sm={12} xs={12}>
              <div className='alert bg-secondary standard-radius-5'>
                {location && location.state && location.state.description && (
                  <div
                    className='text-responsive'
                    dangerouslySetInnerHTML={{
                      __html: location.state.description
                    }}
                  ></div>
                )}
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
            <h2 className='big-subheading'>{`Cours`}</h2>
            <Spacer size={2} />
          </Col>
          <Col className='' md={12} sm={12} xs={12}>
            {!isDataOnLoading ? (
              <div>
                {moodleCourses && moodleCourses.length > 0 ? (
                  <div className='card-course-detail-container'>
                    {moodleCourses.map((course, index) => {
                      return (
                        <CourseCard
                          key={index + course.id}
                          icon={PhBookBookmark}
                          isAvailable={course.visible == 1}
                          isSignedIn={isSignedIn}
                          sameTab={true}
                          external={true}
                          title={`${course.displayname}`}
                          buttonText={`Suivre le cours  `}
                          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                          link={`${moodleBaseUrl}/course/view.php?id=${course.id}`}
                          description={course.summary}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <>
                    <div className='block-ui bg-secondary'>
                      <p className='h3'>{`Aucun cours pour l'instant`}</p>
                    </div>
                    <Spacer size={1} />
                  </>
                )}
              </div>
            ) : (
              <div className='card-course-detail-container'>
                {renderCourseCardSkeletons(2)}
              </div>
            )}
          </Col>
        </Row>
      </Grid>
    </>
  );
}

ShowLearningPathDetail.displayName = 'ShowLearningPathDetail';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowLearningPathDetail);
