import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowAllRoles from '../../client-only-routes/admin/show-all-roles';
import RedirectHome from '../../components/redirect-home';

function AllRoles(): JSX.Element {
  return (
    <Router>
      <ShowAllRoles path={withPrefix('/admin/all-roles')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

AllRoles.displayName = 'AllRoles';

export default AllRoles;
