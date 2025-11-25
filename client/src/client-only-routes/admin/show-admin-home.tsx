import { Row, Col } from '@freecodecamp/react-bootstrap';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { createFlashMessage } from '../../components/Flash/redux';
import { Spacer } from '../../components/helpers';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector
} from '../../redux';

import { User } from '../../redux/prop-types';

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User) => ({
    showLoading,
    user
  })
);

const mapDispatchToProps = {
  createFlashMessage
};

export function ShowAdminHome(): JSX.Element {
  // TEMPORAIRE: Vérifications d'authentification désactivées pour le développement du design
  // À NE PAS COMMITER - Retirer ces commentaires avant le push
  // if (showLoading) {
  //   return <Loader fullScreen={true} />;
  // }

  // if (!isSignedIn) {
  //   navigate(`${apiLocation}/signin`);
  //   return <Loader fullScreen={true} />;
  // }

  // if (!user.email.includes('Super-admin') || !user.email.includes('Admin')) {
  //   navigate(`${homeLocation}`);
  //   return <Loader fullScreen={true} />;
  // }

  return (
    <>
      <Helmet title={`Tableau de bord | Kadea Online`} />

      <div className=''>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className=''>
              <h1
                className='big-subheading'
                style={{ overflowWrap: 'break-word' }}
              >
                {'Dashboardhghhhh'}
              </h1>
            </div>
          </Col>
        </Row>
        <Spacer size={1} />
        <Row>
          <Col md={6} sm={6} xs={6}>
            <div className=''>
              <p
                className='text-responsive'
                style={{ overflowWrap: 'break-word' }}
              >
                {`
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rem repellat excepturi itaque nulla optio quisquam quaerat
                    iusto qui cumque, deleniti necessitatibus et magni ab
                    tenetur amet in totam ut. Voluptatum?
                    `}
              </p>
            </div>
          </Col>
          <Col md={6} sm={6} xs={6}>
            <div className=''>
              <p
                className='text-responsive'
                style={{ overflowWrap: 'break-word' }}
              >
                {`
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Rem repellat excepturi itaque nulla optio quisquam quaerat
                    iusto qui cumque, deleniti necessitatibus et magni ab
                    tenetur amet in totam ut. Voluptatum?
                    `}
              </p>
            </div>
          </Col>
        </Row>
        <Spacer size={1} />
      </div>
    </>
  );
}

ShowAdminHome.displayName = 'ShowAdminHome';

export default connect(mapStateToProps, mapDispatchToProps)(ShowAdminHome);
