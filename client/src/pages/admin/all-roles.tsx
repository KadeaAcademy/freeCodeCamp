/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';

// ON RETIRE L'IMPORT DU LAYOUT TEMPORAIREMENT
// import { AdminDefaultLayout } from '../../components/layouts';

import ShowAllRoles from '../../client-only-routes/admin/show-all-roles';
import RedirectHome from '../../components/redirect-home';

const AllRolesPage = (): JSX.Element => {
  // ON RETIRE LE WRAPPER <AdminDefaultLayout>
  return (
    <Router basepath={withPrefix('/admin/all-roles')}>
      <ShowAllRoles path='/' />
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
};

export default AllRolesPage;
