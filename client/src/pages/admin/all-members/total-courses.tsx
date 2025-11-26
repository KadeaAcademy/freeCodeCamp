import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowTotalCourses from '../../../client-only-routes/admin/show-total-courses';
import RedirectHome from '../../../components/redirect-home';

function TotalCourses(): JSX.Element {
  return (
    <Router>
      <ShowTotalCourses path={withPrefix('/admin/all-members/total-courses')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

TotalCourses.displayName = 'TotalCourses';

export default TotalCourses;
