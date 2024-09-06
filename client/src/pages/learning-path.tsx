import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowMoodleCategory from '../client-only-routes/learning-path/show-moodle-learning-path-detail';
import ShowLearningPathsIndex from '../client-only-routes/show-learning-path';
import ShowFullstackCourses from '../client-only-routes/learning-path/show-fullstack-path-detail';
import RedirectHome from '../components/redirect-home';
import ShowAwsCourses from '../client-only-routes/learning-path/show-aws-courses';
import routes from '../utils/routes';

function Learningpath(): JSX.Element {
  return (
    <Router>
      <ShowMoodleCategory path={withPrefix(routes.learningPath.moodle)} />
      <ShowAwsCourses path={withPrefix(routes.learningPath.aws)} />
      <ShowFullstackCourses path={withPrefix(routes.learningPath.fullstack)} />
      <ShowLearningPathsIndex path={withPrefix(routes.learningPath.index)} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

Learningpath.displayName = 'Learningpath';

export default Learningpath;
