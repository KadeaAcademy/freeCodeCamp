import { Row, Col } from '@freecodecamp/react-bootstrap';
import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// eslint-disable-next-line import/no-unresolved
import envData from '../../../../config/env.json';
import { createFlashMessage } from '../../components/Flash/redux';
import { Loader, Spacer } from '../../components/helpers';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../../redux';

import { User } from '../../redux/prop-types';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const { apiLocation, homeLocation } = envData;

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn: boolean) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

interface ShowAdminHomeProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
}

export function ShowAdminHome(props: ShowAdminHomeProps): JSX.Element {
  const { showLoading, isSignedIn, navigate, user } = props;

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  // Vérifier que l'utilisateur existe
  if (!user) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  // Vérifier l'accès : Super-admin, Admin, ou judah@kadea.co
  const isSuperAdmin = user.role === 'Super-admin';
  const isAdmin = user.role === 'Admin';
  const isJudahEmail = user.email === 'judah@kadea.co';

  if (!isSuperAdmin && !isAdmin && !isJudahEmail) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${homeLocation}`);
    return <Loader fullScreen={true} />;
  }

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
