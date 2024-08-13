import { Grid } from '@freecodecamp/react-bootstrap';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import LearnLayout from '../components/layouts/learn';

import {
  userFetchStateSelector,
  isSignedInSelector,
  userSelector
} from '../redux';

// import AsSeenIn from './components/as-seen-in';
import RegistrationToAcademy from '../components/landing/components/registration-to-academy';
// import LandingTop from './components/landing-top';
// import LandingDetails from '../components/landing/components/landing-details';
// import LandingLearn from './components/landing-learn';
// import LandingGoals from './components/landing-goals';
import WhatCanYouDo from '../components/landing/whatCanYouDo/what-can-you-do';
// import YourCareer from './yourCareer/your-career';
import Hero from '../components/landing/hero/hero';
import StartCOding from '../components/landing/start-coding/start-coding';
import WhatWillYouLearn from '../components/landing/what-will-you-learn/what-will-you-learn';
import HowWillYouLearn from '../components/landing/how-will-you-learn/how-will-you-learn';
import Vodacom from '../components/landing/vodacom-branding-section/vodacom-branding';
import Partners from '../components/landing/partners/partners';

import '../components/landing/landing.css';

interface FetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
}

interface User {
  name: string;
  username: string;
  completedChallengeCount: number;
}

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState: FetchState, isSignedIn: boolean, user: User) => ({
    fetchState,
    isSignedIn,
    user
  })
);

interface Slug {
  slug: string;
}

interface LearnPageProps {
  isSignedIn: boolean;
  fetchState: FetchState;
  state: Record<string, unknown>;
  user: User;
  data: {
    challengeNode: {
      challenge: {
        fields: Slug;
      };
    };
  };
}

function LearnPage({ isSignedIn }: LearnPageProps) {
  // const { t } = useTranslation();

  return (
    <LearnLayout>
      {/* <Helmet title={t('metaTags:title')} /> */}
      <Helmet title={`Apprendre à coder - gratuitement | Kadea Online`} />
      <main className='landing-page bg-light'>
        <div className='hero-main-bg'>
          <Grid>
            <Hero pageName={'landing'} isSignedIn={isSignedIn} />
          </Grid>
        </div>
        {/* <Hero pageName={'landing'} isSignedIn={isSignedIn} /> */}
        <Vodacom />

        {/* <div className='bg-secondary'>
          <Grid>
            <LandingTop pageName={'landing'} isSignedIn={isSignedIn} />
          </Grid>
        </div> */}

        <div className='as-seen-in'>
          <Grid>
            <RegistrationToAcademy />
          </Grid>
        </div>

        {/* <Grid>
          <LandingDetails isSignedIn={isSignedIn} />
        </Grid> */}
        <div className='dotted-bg'>
          <Grid>
            <WhatWillYouLearn isSignedIn={isSignedIn} />
          </Grid>
        </div>

        {/* <Grid>
          <LandingLearn />
        </Grid> */}
        <HowWillYouLearn />

        {/* <div className='bg-light-gray'>
          <Grid>
            <WhatCanYouDo />
          </Grid>
        </div> */}
        <div className=''>
          <Grid>
            <WhatCanYouDo />
          </Grid>
        </div>

        <StartCOding isSignedIn={isSignedIn} />

        <div className=''>
          <Grid>
            <Partners />
          </Grid>
        </div>

        {/* <div className='as-seen-in'>
          <Grid>
            <YourCareer isSignedIn={isSignedIn} />
          </Grid>
        </div> */}
      </main>
    </LearnLayout>
  );
}

LearnPage.displayName = 'LearnPage';

export default connect(mapStateToProps, null)(LearnPage);

export const query = graphql`
  query FirstChallenge {
    challengeNode(challenge: { order: { eq: 0 }, challengeOrder: { eq: 0 } }) {
      challenge {
        fields {
          slug
        }
      }
    }
  }
`;
