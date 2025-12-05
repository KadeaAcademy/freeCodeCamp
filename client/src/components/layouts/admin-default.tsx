import fontawesome from '@fortawesome/fontawesome';
import React, { Component, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
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
// import './fonts.css';
// import './global.css';
// import './variables.css';
// import './admin.css';

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

    if (!isSignedIn) {
      return <>{children}</>;
    }

    // Vérifier l'accès : Super-admin, Admin, ou judah@kadea.co
    const isSuperAdmin = user?.role === 'Super-admin';
    const isAdmin = user?.role === 'Admin';
    const isJudahEmail = user?.email === 'judah@kadea.co';

    if (!isSuperAdmin && !isAdmin && !isJudahEmail) {
      return <>{children}</>;
    }

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
        <div className='min-h-screen bg-gray-50'>
          <main className='flex min-h-screen relative'>
            {/* Sidebar */}
            <SideBar fetchState={fetchState} user={user || ({} as User)} />

            {/* Main Content */}
            <div className='flex-1 relative z-0 min-w-0'>
              {/* Header Bar */}
              <div className='bg-white px-8 py-4 border-b border-gray-200 flex justify-end items-center h-[73px]'>
                <div className='flex items-center gap-3'>
                  <div className='text-right'>
                    <div className='text-sm font-medium text-gray-900'>
                      {user?.name?.length > 0
                        ? user.name
                        : user?.email || 'Utilisateur'}
                    </div>
                    <div className='text-xs text-gray-500'>
                      {user?.role || 'Admin'}
                    </div>
                  </div>
                  <img
                    src={ProfilePlaceholder}
                    alt='Profil'
                    className='w-10 h-10 rounded-full border border-gray-200'
                  />
                </div>
              </div>

              {/* Page Content */}
              <div className='p-8'>{children}</div>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(AdminDefaultLayout));
