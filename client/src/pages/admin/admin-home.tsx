import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowAdminHome from '../../client-only-routes/admin/show-admin-home';
import RedirectHome from '../../components/redirect-home';

function AdminHome(): JSX.Element {
  return (
    <Router>
      <ShowAdminHome path={withPrefix('/admin/admin-home')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

AdminHome.displayName = 'AdminHome';

export default AdminHome;
