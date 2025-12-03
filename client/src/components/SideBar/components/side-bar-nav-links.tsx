/* eslint-disable jsx-a11y/no-onchange */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
// @ts-nocheck
import React from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faFileAlt,
  faUsers,
  faUserFriends,
  faUserShield,
  faSignOutAlt,
  faPlay
} from '@fortawesome/free-solid-svg-icons';
import { hardGoTo as navigate } from '../../../redux';
import { Link } from '../../helpers';

import '../modern-sidebar.css';

export interface SideBarNavLinksProps {
  fetchState?: { pending: boolean };
  i18n?: Object;
  t?: TFunction;
  user?: Record<string, unknown>;
  navigate?: (location: string) => void;
}

const mapDispatchToProps = {
  navigate
};

export const SideBarNavLinks = (props: SideBarNavLinksProps): JSX.Element => {
  const { navigate } = props;
  const location =
    typeof window !== 'undefined' ? window.location.pathname : '';

  const isActive = (path: string): boolean => {
    return location.includes(path);
  };

  return (
    <div
      className='modern-sidebar'
      style={{
        display: 'flex',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 1050,
        visibility: 'visible',
        opacity: 1
      }}
    >
      {/* Header with Logo */}
      <div className='modern-sidebar-header'>
        <div className='modern-sidebar-logo'>
          <FontAwesomeIcon icon={faPlay} />
        </div>
        <h1 className='modern-sidebar-title'>Kadea Online</h1>
      </div>

      {/* Navigation */}
      <nav className='modern-sidebar-nav'>
        {/* General Navigation Section */}
        <div className='modern-nav-section'>
          <h2 className='modern-nav-section-title'>General Navigation</h2>
          <ul className='modern-nav-list'>
            <li className='modern-nav-item'>
              <Link
                to='/admin/admin-home'
                className={`modern-nav-link ${
                  isActive('/admin/admin-home') ? 'active' : ''
                }`}
              >
                <span className='modern-nav-icon'>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <span>Home</span>
              </Link>
            </li>
            <li className='modern-nav-item'>
              <Link
                to='/admin/all-members'
                className={`modern-nav-link ${
                  isActive('/admin/all-members') ? 'active' : ''
                }`}
              >
                <span className='modern-nav-icon'>
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <span>Membres</span>
              </Link>
            </li>
            <li className='modern-nav-item'>
              <Link
                to='/admin/all-groups'
                className={`modern-nav-link ${
                  isActive('/admin/all-groups') ? 'active' : ''
                }`}
              >
                <span className='modern-nav-icon'>
                  <FontAwesomeIcon icon={faUserFriends} />
                </span>
                <span>Groupes</span>
              </Link>
            </li>
            <li className='modern-nav-item'>
              <Link
                to='/admin/all-roles'
                className={`modern-nav-link ${
                  isActive('/admin/all-roles') ? 'active' : ''
                }`}
              >
                <span className='modern-nav-icon'>
                  <FontAwesomeIcon icon={faUserShield} />
                </span>
                <span>Rôles</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* ADMIN Section */}
        <div className='modern-nav-section'>
          <h2 className='modern-nav-section-title'>ADMIN</h2>
          <ul className='modern-nav-list'>
            <li className='modern-nav-item'>
              <Link
                to='/admin/admin-home'
                className={`modern-nav-link ${
                  isActive('/admin/admin-home') ? 'active' : ''
                }`}
              >
                <span className='modern-nav-icon'>
                  <FontAwesomeIcon icon={faFileAlt} />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className='modern-nav-item'>
              <Link
                to='/admin/all-members'
                className={`modern-nav-link ${
                  isActive('/admin/all-members') ? 'active' : ''
                }`}
              >
                <span className='modern-nav-icon'>
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <span>Users</span>
              </Link>
            </li>
            <li className='modern-nav-item'>
              <Link
                to='/admin/all-groups'
                className={`modern-nav-link ${
                  isActive('/admin/all-groups') ? 'active' : ''
                }`}
              >
                <span className='modern-nav-icon'>
                  <FontAwesomeIcon icon={faUserFriends} />
                </span>
                <span>Cohorts</span>
              </Link>
            </li>
            <li className='modern-nav-item'>
              <Link
                to='/admin/all-roles'
                className={`modern-nav-link ${
                  isActive('/admin/all-roles') ? 'active' : ''
                }`}
              >
                <span className='modern-nav-icon'>
                  <FontAwesomeIcon icon={faUserShield} />
                </span>
                <span>Roles</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Footer with Logout */}
      <div className='modern-sidebar-footer'>
        <button
          className='modern-logout-btn'
          onClick={() => {
            if (navigate) {
              navigate('/');
            }
          }}
        >
          <span className='modern-logout-icon'>
            <FontAwesomeIcon icon={faSignOutAlt} />
          </span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

SideBarNavLinks.displayName = 'SideBarNavLinks';

const ConnectedSideBarNavLinks = connect(
  null,
  mapDispatchToProps
)(withTranslation()(SideBarNavLinks));

export default ConnectedSideBarNavLinks;
