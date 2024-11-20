import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowCourses from '../client-only-routes/show-courses';

import RedirectHome from '../components/redirect-home';
import MyCatalogue from '../client-only-routes/catalogue/show-cours-by-category';
import { routes } from '../utils/routes';

function Courses(): JSX.Element {
  return (
    <Router>
      <ShowCourses path={withPrefix(routes.catalogue.index)} />
      {/* <MyCatalogue path={withPrefix(routes.catalogue.programmation)} /> */}
      <MyCatalogue path={withPrefix(routes.catalogue.catalogueTitle)} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

Courses.displayName = 'Courses';

export default Courses;
