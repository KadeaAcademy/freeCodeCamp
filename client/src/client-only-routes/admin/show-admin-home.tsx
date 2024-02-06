import { Row, Col } from '@freecodecamp/react-bootstrap';
import React from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

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

const { apiLocation, homeLocation } = envData;

// TODO: update types for actions
interface ShowAdminHomeProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

export function ShowAdminHome(props: ShowAdminHomeProps): JSX.Element {
  // const { t } = useTranslation();
  const { isSignedIn, user, navigate, showLoading } = props;
  // const { currentsSuperBlock } = user;

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (isSignedIn) {
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  if (
    !user.email.endsWith('@kinshasadigital.com') ||
    !user.email.endsWith('@kadea.co')
  ) {
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
