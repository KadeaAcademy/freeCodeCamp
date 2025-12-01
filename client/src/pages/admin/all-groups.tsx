import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowAllGroups from '../../client-only-routes/admin/show-all-groups';

function AllGroups(): JSX.Element {
  const basePath = '/admin/all-groups';
  const prefixedPath = withPrefix(basePath);

  return (
    <Router>
      {/* Routes multiples pour assurer la compatibilité */}
      <ShowAllGroups path={prefixedPath} />
      <ShowAllGroups path={basePath} />
      <ShowAllGroups path='/admin/all-groups/' />
      {/* Route catch-all pour éviter RedirectHome */}
      <ShowAllGroups path='/*' />
      {/* TEMPORAIRE : Désactiver RedirectHome pour forcer l'affichage */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {/* <RedirectHome default={true} /> */}
    </Router>
  );
}

AllGroups.displayName = 'AllGroups';

export default AllGroups;
