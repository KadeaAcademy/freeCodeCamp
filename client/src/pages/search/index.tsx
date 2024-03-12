import React from 'react';
import { Router } from '@reach/router';
import Searches from '../../client-only-routes/show-search';
import RedirectHome from '../../components/redirect-home';

function Search(): JSX.Element {
  return (
    <Router basepath={'/search'}>
      <Searches path={'/'} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

Search.displayName = 'Search';

export default Search;
