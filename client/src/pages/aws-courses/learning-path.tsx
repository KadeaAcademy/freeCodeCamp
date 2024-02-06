import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowAwsLearningPath from '../../client-only-routes/show-aws-learning-path';
import RedirectHome from '../../components/redirect-home';

function Learningpath(): JSX.Element {
  return (
    <Router>
      <ShowAwsLearningPath
        path={withPrefix('/aws-courses/learning-path/:course')}
      />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

Learningpath.displayName = 'Learningpath';

export default Learningpath;
