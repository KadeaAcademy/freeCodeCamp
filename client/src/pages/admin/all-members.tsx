import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowAllMembers from '../../client-only-routes/admin/show-all-members';
import ShowActifMembers from '../../client-only-routes/admin/show-actif-members';
import ShowProgressionByMember from '../../client-only-routes/admin/show-progression-by-member';
import ShowTotalMembers from '../../client-only-routes/admin/show-total-members';
import ShowTotalCourses from '../../client-only-routes/admin/show-total-courses';
import RedirectHome from '../../components/redirect-home';

function AllMembers(): JSX.Element {
  return (
    <Router>
      {/* Routes spécifiques en premier */}
      <ShowActifMembers path={withPrefix('/admin/all-members/actif-members')} />
      <ShowProgressionByMember
        path={withPrefix('/admin/all-members/progression-by-member')}
      />
      <ShowTotalMembers path={withPrefix('/admin/all-members/total-members')} />
      <ShowTotalCourses path={withPrefix('/admin/all-members/total-courses')} />
      {/* Route générale en dernier */}
      <ShowAllMembers path={withPrefix('/admin/all-members')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

AllMembers.displayName = 'AllMembers';

export default AllMembers;
