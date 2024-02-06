import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import {
  userSelector,
  userFetchStateSelector,
  isSignedInSelector
} from '../../../redux';
import Map from '../../Map/index';

import { Spacer } from '../../helpers';

import '../intro.css';
// import { User } from '../../../redux/prop-types';

type FetchState = {
  pending: boolean;
  complete: boolean;
  errored: boolean;
};

type User = {
  acceptedPrivacyTerms: boolean;
  phone: string;
  name: string;
};

const mapStateToProps = createSelector(
  userFetchStateSelector,
  isSignedInSelector,
  userSelector,
  (fetchState: FetchState, isSignedIn, user: User) => ({
    fetchState,
    isSignedIn,
    user
  })
);

type IntroDescriptionProps = {
  isSignedIn?: boolean;
  fetchState: FetchState;
  user: User;
};

function IntroDescription({
  isSignedIn,
  user: { phone, name }
}: IntroDescriptionProps): JSX.Element {
  return (
    <div className='intro-description'>
      <h1>
        {`
        Bienvenue sur Kadea Online !
        `}
      </h1>
      <Spacer />
      <p>
        {`
          Si vous êtes novice en programmation, nous vous recommandons 
          de commencer par le début et de parcourir nos cours dans l'ordre.
        `}
      </p>
      <p>
        {`
          La pratique est la clé. Et ce programme vous donnera 
          des milliers d'heures de pratique de la programmation.
        `}
      </p>
      <p>
        {`
          
        `}
      </p>
      <Spacer />
      {isSignedIn && name && phone ? (
        <Map
          forLanding={true}
          single={true}
          className='btn-primary link-button'
          text='Lancez-vous maintenant 2!'
          keyPrefix='landing-details'
        />
      ) : (
        <a
          href={`/settings?/learn/responsive-web-design/`}
          className='btn-primary link-button'
        >
          {'Lancez-vous maintenant '}
        </a>
      )}
      <Spacer />
    </div>
  );
}

IntroDescription.displayName = 'IntroDescription';
export default connect(mapStateToProps)(IntroDescription);
