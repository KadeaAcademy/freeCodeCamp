import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowAllRoles from '../../client-only-routes/admin/show-all-roles';

function AllRoles(): JSX.Element {
  const basePath = '/admin/all-roles';
  const prefixedPath = withPrefix(basePath);

  return (
    <Router>
      {/* Routes multiples pour assurer la compatibilité */}
      <ShowAllRoles path={prefixedPath} />
      <ShowAllRoles path={basePath} />
      <ShowAllRoles path='/admin/all-roles/' />
      {/* Route catch-all pour éviter RedirectHome */}
      <ShowAllRoles path='/*' />
      {/* TEMPORAIRE : Désactiver RedirectHome pour forcer l'affichage */}
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      {/* <RedirectHome default={true} /> */}
    </Router>
  );
}

AllRoles.displayName = 'AllRoles';

export default AllRoles;
