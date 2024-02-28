import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowLearningPathDetail from '../client-only-routes/show-learning-path-detail';
import ShowLearningPath from '../client-only-routes/show-learning-path';
import ShowFccCourses from '../client-only-routes/show-fcc-courses';
import RedirectHome from '../components/redirect-home';
import ShowAwsCourses from '../client-only-routes/show-aws-courses';

function Learningpath(): JSX.Element {
  return (
    <Router>
      <ShowLearningPathDetail
        path={withPrefix('/learning-path/:category/:categoryId')}
      />
      <ShowFccCourses path={withPrefix('/learning-path/developpement-web')} />
      <ShowAwsCourses path={withPrefix('/learning-path/aws')} />
      <ShowLearningPath path={withPrefix('/learning-path')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

Learningpath.displayName = 'Learningpath';

export default Learningpath;
