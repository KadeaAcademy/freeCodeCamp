import { Router } from '@reach/router';
import { withPrefix } from 'gatsby';
import React from 'react';

import ShowDashboard from '../client-only-routes/show-dashboard';
import RedirectHome from '../components/redirect-home';

function Dashboard(): JSX.Element {
  return (
    <Router>
      <ShowDashboard path={withPrefix('/dashboard')} />
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RedirectHome default={true} />
    </Router>
  );
}

Dashboard.displayName = 'Dashboard';

export default Dashboard;
