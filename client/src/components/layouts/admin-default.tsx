import fontawesome from '@fortawesome/fontawesome';
import React, { Component, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Grid, Row, Col } from '@freecodecamp/react-bootstrap';
import { isBrowser } from '../../../utils';
import { Spacer } from '../../components/helpers';
import {
  fetchUser,
  isSignedInSelector,
  onlineStatusChange,
  serverStatusChange,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector,
  userSelector,
  executeGA
} from '../../redux';
import { UserFetchState, User } from '../../redux/prop-types';
import Flash from '../Flash';
import { flashMessageSelector, removeFlashMessage } from '../Flash/redux';

// import Footer from '../FooterNew/footer';
import SideBar from '../SideBar';
import OfflineWarning from '../OfflineWarning';
import ProfilePlaceholder from '../../assets/images/undraw_profile.svg';
// import { Spacer } from '../helpers';

// preload common fonts
import './fonts.css';
import './global.css';
import './variables.css';
import './admin.css';

fontawesome.config.autoAddCss = false;

const mapStateToProps = createSelector(
  isSignedInSelector,
  flashMessageSelector,
  isOnlineSelector,
  isServerOnlineSelector,
  userFetchStateSelector,
  userSelector,
  (
    isSignedIn,
    flashMessage,
    isOnline: boolean,
    isServerOnline: boolean,
    fetchState: UserFetchState,
    user: User
  ) => ({
    isSignedIn,
    flashMessage,
    hasMessage: !!flashMessage.message,
    isOnline,
    isServerOnline,
    fetchState,
    theme: user.theme,
    user
  })
);

type StateProps = ReturnType<typeof mapStateToProps>;

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchUser,
      removeFlashMessage,
      onlineStatusChange,
      serverStatusChange,
      executeGA
    },
    dispatch
  );

type DispatchProps = ReturnType<typeof mapDispatchToProps>;

interface AdminDefaultLayoutProps extends StateProps, DispatchProps {
  children: ReactNode;
  pathname: string;
  showFooter?: boolean;
  t: TFunction;
  useTheme?: boolean;
}

class AdminDefaultLayout extends Component<AdminDefaultLayoutProps> {
  static displayName = 'AdminDefaultLayout';

  componentDidMount() {
    const { isSignedIn, fetchUser, pathname, executeGA } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
    executeGA({ type: 'page', data: pathname });

    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
  }

  componentDidUpdate(prevProps: AdminDefaultLayoutProps) {
    const { pathname, executeGA } = this.props;
    const { pathname: prevPathname } = prevProps;
    if (pathname !== prevPathname) {
      executeGA({ type: 'page', data: pathname });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateOnlineStatus);
    window.removeEventListener('offline', this.updateOnlineStatus);
  }

  updateOnlineStatus = () => {
    const { onlineStatusChange } = this.props;
    const isOnline =
      isBrowser() && 'navigator' in window ? window.navigator.onLine : null;
    return typeof isOnline === 'boolean' ? onlineStatusChange(isOnline) : null;
  };

  render() {
    const {
      children,
      hasMessage,
      fetchState,
      flashMessage,
      isOnline,
      isServerOnline,
      isSignedIn,
      removeFlashMessage,
      t,
      theme = 'default',
      user,
      useTheme = true
    } = this.props;

    if (!isSignedIn) {
      return <>{children}</>;
    }

    // if (
    //   !user.email.endsWith('@kinshasadigital.com') ||
    //   !user.email.endsWith('@kadea.co')
    // ) {
    //   return <>{children}</>;
    // }

    return (
      <div className='page-wrapper'>
        <Helmet
          bodyAttributes={{
            class: useTheme
              ? `${theme === 'default' ? 'light-palette' : 'dark-palette'}`
              : 'light-palette'
          }}
          meta={[
            {
              name: 'description',
              content: t('metaTags:description')
            },
            { name: 'keywords', content: t('metaTags:keywords') }
          ]}
        >
          <style>{fontawesome.dom.css()}</style>
        </Helmet>
        <OfflineWarning
          isOnline={isOnline}
          isServerOnline={isServerOnline}
          isSignedIn={isSignedIn}
        />
        {hasMessage && flashMessage ? (
          <>
            <Flash
              flashMessage={flashMessage}
              removeFlashMessage={removeFlashMessage}
            />
          </>
        ) : null}
        <Grid fluid={true} className='bg-dark-gray margin-0'>
          <main>
            <div className=''>
              <Row>
                <Col md={2} sm={2} xs={2} className='text-light bg-dark-gray'>
                  <SideBar fetchState={fetchState} user={user} />
                </Col>
                <Col md={10} sm={10} xs={10} className='bg-light'>
                  <Row className='admin-profile-bar'>
                    <Col md={6} sm={6} xs={6} className='padding-0'>
                      <div></div>
                    </Col>
                    <Col
                      md={6}
                      sm={6}
                      xs={6}
                      className='padding-0 admin-profil-item'
                    >
                      <div className='profile-name'>
                        {user.name?.length > 0 ? user.name : user.email}
                      </div>
                      <div>
                        <img
                          src={ProfilePlaceholder}
                          alt='Profil'
                          className='img-profile rounded-circle'
                        />
                      </div>
                    </Col>
                  </Row>
                  <div className={`admin-default-layout`}>{children}</div>
                  <Spacer />
                </Col>
              </Row>
            </div>
          </main>
        </Grid>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(AdminDefaultLayout));
