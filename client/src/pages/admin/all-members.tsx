import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowAllMembers from '../../client-only-routes/admin/show-all-members';
import RedirectHome from '../../components/redirect-home';

function AllMembers(): JSX.Element {
  return (
    <Router>
      <ShowAllMembers path={withPrefix('/admin/all-members')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

AllMembers.displayName = 'AllMembers';

export default AllMembers;
