import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowTotalMembers from '../../../client-only-routes/admin/show-total-members';
import RedirectHome from '../../../components/redirect-home';

function TotalMembers(): JSX.Element {
  return (
    <Router>
      <ShowTotalMembers path={withPrefix('/admin/all-members/total-members')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

TotalMembers.displayName = 'TotalMembers';

export default TotalMembers;
