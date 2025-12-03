import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowActifMembers from '../../../client-only-routes/admin/show-actif-members';
import RedirectHome from '../../../components/redirect-home';

function ActifMembers(): JSX.Element {
  return (
    <Router>
      <ShowActifMembers path={withPrefix('/admin/all-members/actif-members')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

ActifMembers.displayName = 'ActifMembers';

export default ActifMembers;
