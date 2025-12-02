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
import { faPlay } from '@fortawesome/free-solid-svg-icons';
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

  // Home icon SVG
  const HomeIcon = () => (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      className='h-4 w-4'
      aria-hidden='true'
    >
      <path
        fill='currentColor'
        d='m219.31 108.68l-80-80a16 16 0 0 0-22.62 0l-80 80A15.87 15.87 0 0 0 32 120v96a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56h32v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-96a15.87 15.87 0 0 0-4.69-11.32M208 208h-48v-56a8 8 0 0 0-8-8h-48a8 8 0 0 0-8 8v56H48v-88l80-80l80 80Z'
      />
    </svg>
  );

  // Users icon SVG
  const UsersIcon = () => (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      className='h-4 w-4'
      aria-hidden='true'
    >
      <path
        fill='currentColor'
        d='M117.12 157.81a60 60 0 1 0-66.24 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.85 8a80 80 0 0 1 138.5 0a8 8 0 0 0 13.86-8a95.83 95.83 0 0 0-47.75-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m213.85 98.7a8 8 0 0 1-11.08 2.22a79.83 79.83 0 0 0-21.85-9.59a4 4 0 0 1-3.09-3.18a52 52 0 0 0-103.66 0a4 4 0 0 1-3.09 3.18a79.83 79.83 0 0 0-21.85 9.59a8 8 0 1 1-8.86-13.3a95.62 95.62 0 0 1 50.22-20.22a60 60 0 1 1 73.08 0a95.62 95.62 0 0 1 50.22 20.22a8 8 0 0 1 2.29 11.08'
      />
    </svg>
  );

  // Groups icon SVG
  const GroupsIcon = () => (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      className='h-4 w-4'
      aria-hidden='true'
    >
      <path
        fill='currentColor'
        d='M117.12 157.81a60 60 0 1 0-66.24 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.85 8a80 80 0 0 1 138.5 0a8 8 0 0 0 13.86-8a95.83 95.83 0 0 0-47.75-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m213.85 98.7a8 8 0 0 1-11.08 2.22a79.83 79.83 0 0 0-21.85-9.59a4 4 0 0 1-3.09-3.18a52 52 0 0 0-103.66 0a4 4 0 0 1-3.09 3.18a79.83 79.83 0 0 0-21.85 9.59a8 8 0 1 1-8.86-13.3a95.62 95.62 0 0 1 50.22-20.22a60 60 0 1 1 73.08 0a95.62 95.62 0 0 1 50.22 20.22a8 8 0 0 1 2.29 11.08'
      />
    </svg>
  );

  // Roles icon SVG
  const RolesIcon = () => (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 256 256'
      className='h-4 w-4'
      aria-hidden='true'
    >
      <path
        fill='currentColor'
        d='M172 120a44 44 0 1 1-44-44a44.05 44.05 0 0 1 44 44m60 72a95.62 95.62 0 0 0-15.6-52.68a76 76 0 1 0-132.8 0A95.9 95.9 0 0 0 16 192a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8M56 140a60 60 0 1 1 60 60a60.07 60.07 0 0 1-60-60m144 40H32a80.11 80.11 0 0 1 78.24-63.39a76.09 76.09 0 0 0 35.52 0A80.11 80.11 0 0 1 200 180'
      />
    </svg>
  );

  return (
    <nav
      role='navigation'
      aria-label='Primary'
      className='modern-sidebar flex flex-col gap-2 py-4 bg-gray-50 border-r border-gray-200 h-full'
    >
      {/* Header with Logo */}
      <div className='px-4 mb-4 flex items-center gap-2'>
        <Link to='/' className='flex items-center gap-2'>
          <div className='modern-sidebar-logo'>
            <FontAwesomeIcon icon={faPlay} />
          </div>
          <span className='font-semibold text-lg tracking-tight'>
            Kadea Online
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <ul className='flex flex-col text-sm font-medium flex-1 overflow-y-auto'>
        {/* Home */}
        <li>
          <Link
            to='/admin/admin-home'
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              isActive('/admin/admin-home')
                ? 'font-bold text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <HomeIcon />
            <span>Home</span>
          </Link>
        </li>

        {/* Members */}
        <li>
          <Link
            to='/admin/all-members'
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              isActive('/admin/all-members')
                ? 'font-bold text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <UsersIcon />
            <span>Members</span>
          </Link>
        </li>

        {/* Groups */}
        <li>
          <Link
            to='/admin/all-groups'
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              isActive('/admin/all-groups')
                ? 'font-bold text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <GroupsIcon />
            <span>Groups</span>
          </Link>
        </li>

        {/* Roles */}
        <li>
          <Link
            to='/admin/all-roles'
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              isActive('/admin/all-roles')
                ? 'font-bold text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <RolesIcon />
            <span>Roles</span>
          </Link>
        </li>

        {/* ADMIN Section */}
        <li className='mt-6'>
          <h4 className='px-2 py-1 mb-2 text-sm font-semibold rounded-md uppercase'>
            Admin
          </h4>
        </li>

        {/* Users */}
        <li>
          <Link
            to='/admin/all-members'
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              isActive('/admin/all-members')
                ? 'font-bold text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <span>Users</span>
          </Link>
        </li>

        {/* Cohorts */}
        <li>
          <Link
            to='/admin/all-groups'
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              isActive('/admin/all-groups')
                ? 'font-bold text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <span>Cohorts</span>
          </Link>
        </li>

        {/* Roles */}
        <li>
          <Link
            to='/admin/all-roles'
            className={`flex items-center gap-2 px-4 py-2 rounded ${
              isActive('/admin/all-roles')
                ? 'font-bold text-gray-900 bg-gray-100'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <span>Roles</span>
          </Link>
        </li>
      </ul>

      {/* Footer with Logout */}
      <div className='mt-auto px-4'>
        <button
          type='button'
          className='logout-button'
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 500,
            letterSpacing: '0.025em',
            borderRadius: '0.375rem',
            minWidth: '6rem',
            padding: '0.5rem 0.75rem',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            backgroundColor: '#ffffff',
            color: '#4b5563',
            border: '1px solid rgba(229, 229, 229, 0.7)',
            width: '100%',
            cursor: 'pointer'
          }}
          onClick={() => {
            if (navigate) {
              navigate('/');
            }
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

SideBarNavLinks.displayName = 'SideBarNavLinks';

const ConnectedSideBarNavLinks = connect(
  null,
  mapDispatchToProps
)(withTranslation()(SideBarNavLinks));

export default ConnectedSideBarNavLinks;
