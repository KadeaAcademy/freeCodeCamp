import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowAllGroups from '../../client-only-routes/admin/show-all-groups';
import RedirectHome from '../../components/redirect-home';

function AllGroups(): JSX.Element {
  return (
    <Router>
      <ShowAllGroups path={withPrefix('/admin/all-groups')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

AllGroups.displayName = 'AllGroups';

export default AllGroups;
