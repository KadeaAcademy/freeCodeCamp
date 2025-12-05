import React from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuestionCircle,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { hardGoTo as navigate } from '../../../redux';
import { Link } from '../../helpers';

export interface SideBarNavLinksProps {
  fetchState?: { pending: boolean };
  i18n?: object;
  t?: TFunction;
  user?: Record<string, unknown>;
  navigate?: (location: string) => void;
}

const mapDispatchToProps = {
  navigate
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const SideBarNavLinks = (_props: SideBarNavLinksProps): JSX.Element => {
  // const { navigate, user } = props;
  const location =
    typeof window !== 'undefined' ? window.location.pathname : '';

  const isActive = (path: string): boolean => {
    return location.includes(path);
  };

  const NavItem = ({ to, label }: { to: string; label: string }) => {
    const active = isActive(to);
    return (
      <li className='relative'>
        {active && (
          <div className='absolute left-0 top-0 bottom-0 w-1 bg-white' />
        )}
        <Link
          to={to}
          className={`block py-3 px-6 text-sm font-medium transition-colors ${
            active
              ? 'bg-[#1a1f36] text-white'
              : 'text-gray-400 hover:text-white hover:bg-[#1a1f36]'
          }`}
        >
          {label}
        </Link>
      </li>
    );
  };

  return (
    <div className='w-54 min-h-screen bg-[#0a0f24] text-white flex flex-col font-sans border-r border-gray-800 shrink-0'>
      {/* Header */}
      <div className='p-6 mb-4'>
        <div className='flex items-center gap-2 mb-1'>
          <div className='border border-white px-1 py-0.5 text-sm font-bold'>
            Kadea
          </div>
          <span className='font-bold text-lg'>Online</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className='flex-1 overflow-y-auto'>
        <ul className='space-y-1'>
          <NavItem to='/admin/all-members' label='Members' />
          <NavItem to='/admin/all-groups' label='Groups' />
          <NavItem to='/admin/all-roles' label='Assignments' />
          <NavItem to='/admin/admin-home' label='Reporting' />
          {/* <NavItem to='/settings/account' label='Account' /> */}
        </ul>

        {/* Divider */}
        <div className='h-px bg-gray-800 my-6 mx-6' />

        {/* Apps Section */}
        <div className='px-6 mb-2'>
          <h3 className='text-xs font-bold text-gray-500 uppercase tracking-wider mb-4'>
            Apps
          </h3>
          <Link
            to='/'
            className='flex items-center gap-3 text-gray-300 hover:text-white group'
          >
            <div className='w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-xs font-bold'>
              K
            </div>
            <span className='text-sm font-medium'>Kadea Online</span>
          </Link>
        </div>
      </nav>

      {/* Footer */}
      <div className='p-6 border-t border-gray-800'>
        <div className='space-y-4'>
          <Link
            to='/support'
            className='flex items-center justify-between text-gray-300 hover:text-white group'
          >
            <div className='flex items-center gap-3'>
              <FontAwesomeIcon
                icon={faQuestionCircle}
                className='text-gray-500 group-hover:text-white'
              />
              <span className='text-sm font-medium'>Support</span>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className='text-xs text-gray-600'
            />
          </Link>

          {/* <div
            className='flex items-center justify-between text-gray-300 hover:text-white cursor-pointer group'
            onClick={() => navigate && navigate('/')}
          >
            <div className='flex items-center gap-3'>
              <div className='w-6 h-6 rounded-full bg-blue-900 flex items-center justify-center text-xs text-blue-200'>
                {(user?.email as string)?.[0]?.toUpperCase() || 'U'}
              </div>
              <span className='text-sm font-medium truncate max-w-[120px]'>
                {user?.email || 'User'}
              </span>
            </div>
            <FontAwesomeIcon
              icon={faChevronRight}
              className='text-xs text-gray-600'
            />
          </div> */}
        </div>
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
