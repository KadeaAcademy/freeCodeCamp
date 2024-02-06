import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowAwsCourses from '../client-only-routes/show-aws-courses';
import RedirectHome from '../components/redirect-home';

function AwsCourses(): JSX.Element {
  return (
    <Router>
      <ShowAwsCourses path={withPrefix('/aws-courses')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

AwsCourses.displayName = 'AwsCourses';

export default AwsCourses;
