import fontawesome from '@fortawesome/fontawesome';
import React, { Component, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { Grid } from '@freecodecamp/react-bootstrap';
import { isBrowser } from '../../../utils';
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
    theme: user?.theme || 'default',
    user: user || ({} as User)
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

    // TEMPORAIRE : Toutes les restrictions d'accès désactivées pour le développement
    // TODO: Réactiver les restrictions avant le passage en staging

    // if (!isSignedIn) {
    //   return <>{children}</>;
    // }

    // Vérifier l'accès : Super-admin, Admin, ou judah@kadea.co
    // const isSuperAdmin = user?.role === 'Super-admin';
    // const isAdmin = user?.role === 'Admin';
    // const isJudahEmail = user?.email === 'judah@kadea.co';

    // if (!isSuperAdmin && !isAdmin && !isJudahEmail) {
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
        <Grid
          fluid={true}
          className='margin-0'
          style={{ background: '#f8f9fa', padding: 0, position: 'relative' }}
        >
          <main
            style={{
              display: 'flex',
              minHeight: '100vh',
              position: 'relative'
            }}
          >
            {/* Sidebar */}
            <SideBar fetchState={fetchState} user={user || ({} as User)} />

            {/* Main Content */}
            <div
              style={{
                marginLeft: '220px',
                flex: 1,
                width: 'calc(100% - 220px)',
                position: 'relative',
                zIndex: 1
              }}
            >
              {/* Header Bar */}
              <div
                className='admin-profile-bar'
                style={{
                  background: '#ffffff',
                  padding: '0.4375rem 2rem',
                  borderBottom: '1px solid #e5e7eb',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#1a1a1a',
                    fontFamily:
                      "'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                  }}
                >
                  Home
                </span>
                <div className='admin-profil-item'>
                  <div
                    className='profile-name'
                    style={{ marginRight: '0.75rem' }}
                  >
                    {user?.name?.length > 0
                      ? user.name
                      : user?.email || 'Utilisateur'}
                  </div>
                  <div>
                    <img
                      src={ProfilePlaceholder}
                      alt='Profil'
                      className='img-profile rounded-circle'
                    />
                  </div>
                </div>
              </div>

              {/* Page Content */}
              <div
                className='admin-default-layout'
                style={{
                  background: '#f8f9fa',
                  minHeight: 'calc(100vh - 73px)'
                }}
              >
                {children}
              </div>
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
