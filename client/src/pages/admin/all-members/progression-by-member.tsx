import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowProgressionByMember from '../../../client-only-routes/admin/show-progression-by-member';
import RedirectHome from '../../../components/redirect-home';

function ProgressionByMember(): JSX.Element {
  return (
    <Router>
      <ShowProgressionByMember
        path={withPrefix('/admin/all-members/progression-by-member')}
      />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

ProgressionByMember.displayName = 'ProgressionByMember';

export default ProgressionByMember;
