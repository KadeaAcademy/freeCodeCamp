import fontawesome from '@fortawesome/fontawesome';
import React, { Component, ReactNode } from 'react';
import Helmet from 'react-helmet';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { createSelector } from 'reselect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
import envData from '../../../../config/env.json';
// import { Spacer } from '../helpers';

// preload common fonts
import './fonts.css';
import './global.css';
import './variables.css';
import './admin.css';

const { apiLocation } = envData;

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

interface AdminDefaultLayoutState {
  isDropdownOpen: boolean;
}

class AdminDefaultLayout extends Component<
  AdminDefaultLayoutProps,
  AdminDefaultLayoutState
> {
  static displayName = 'AdminDefaultLayout';
  private dropdownRef = React.createRef<HTMLDivElement>();

  constructor(props: AdminDefaultLayoutProps) {
    super(props);
    this.state = {
      isDropdownOpen: false
    };
  }

  componentDidMount() {
    const { isSignedIn, fetchUser, pathname, executeGA } = this.props;
    if (!isSignedIn) {
      fetchUser();
    }
    executeGA({ type: 'page', data: pathname });

    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOnlineStatus);
    document.addEventListener('mousedown', this.handleClickOutside);
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
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  toggleDropdown = () => {
    this.setState(prevState => ({ isDropdownOpen: !prevState.isDropdownOpen }));
  };

  handleClickOutside = (event: MouseEvent) => {
    if (
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target as Node)
    ) {
      this.setState({ isDropdownOpen: false });
    }
  };

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
        <div className='admin-layout-wrapper'>
          <SideBar fetchState={fetchState} user={user} />
          <main className='admin-main-content'>
            <div className='admin-profile-bar'>
              <div className='admin-profile-left'></div>
              <div className='admin-profil-item'>
                <div className='profile-dropdown' ref={this.dropdownRef}>
                  <button
                    className='profile-badge'
                    onClick={this.toggleDropdown}
                    type='button'
                  >
                    <div className='profile-name'>
                      {user.name?.length > 0 ? user.name : user.email}
                    </div>
                    <div className='profile-avatar'>
                      {user.picture ? (
                        <img
                          src={user.picture}
                          alt='Profil'
                          className='img-profile'
                        />
                      ) : (
                        (user.email?.[0] || 'U').toUpperCase()
                      )}
                    </div>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className='profile-chevron'
                    />
                  </button>
                  {this.state.isDropdownOpen && (
                    <div className='profile-dropdown-menu'>
                      <div className='profile-dropdown-email'>{user.email}</div>
                      <a
                        href={`${apiLocation}/signout`}
                        className='profile-dropdown-logout'
                      >
                        Logout
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className='admin-content-separator' />
            <div className={`admin-default-layout`}>{children}</div>
            <Spacer />
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
