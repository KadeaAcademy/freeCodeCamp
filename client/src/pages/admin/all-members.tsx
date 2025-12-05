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
  // On définit la base de l'URL pour cette section
  const basePath = '/admin/all-members';

  return (
    <Router basepath={withPrefix(basePath)}>
      {/*
         1. La route principale "/" correspondra à /admin/all-members
         C'est celle-ci qui affichera votre liste de membres
      */}
      <ShowAllMembers path='/' />

      {/*
         2. Les sous-routes.
         Exemple: /admin/all-members/actif-members correspondra à path="actif-members"
      */}
      <ShowActifMembers path='actif-members' />
      <ShowProgressionByMember path='progression-by-member' />
      <ShowTotalMembers path='total-members' />
      <ShowTotalCourses path='total-courses' />

      {/*
         3. Redirection par défaut.
         Si l'URL est /admin/all-members/nimporte-quoi, on redirige.
      */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

AllMembers.displayName = 'AllMembers';

export default AllMembers;
