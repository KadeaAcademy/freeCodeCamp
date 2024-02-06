/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/prop-types */
// @ts-nocheck
import React from 'react';
import { Link } from '../../helpers';
import NavLinks from './nav-links';
import NavLogo from './nav-logo';
import './universal-nav.css';

export interface UniversalNavProps {
  displayMenu?: boolean;
  fetchState?: { pending: boolean };
  toggleDisplayMenu?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  user?: Record<string, unknown>;
}
export const UniversalNav = ({
  displayMenu,
  toggleDisplayMenu,
  user,
  fetchState
}: UniversalNavProps): JSX.Element => {
  return (
    <nav className='nav-bar '>
      <div className='container menu-bar'>
        <Link className='link-logo' to='/'>
          <NavLogo />
        </Link>

        <NavLinks
          displayMenu={displayMenu}
          fetchState={fetchState}
          toggleDisplayMenu={toggleDisplayMenu}
          user={user}
        />
      </div>
    </nav>
  );
};

UniversalNav.displayName = 'UniversalNav';
export default UniversalNav;
