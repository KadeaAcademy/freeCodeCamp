import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowCourses from '../client-only-routes/show-courses';
import RedirectHome from '../components/redirect-home';

function Courses(): JSX.Element {
  return (
    <Router>
      <ShowCourses path={withPrefix('/courses')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

Courses.displayName = 'Courses';

export default Courses;
