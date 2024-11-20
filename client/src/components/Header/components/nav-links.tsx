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
import {
  faBars,
  faXmark,
  faExternalLink
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Fragment, useState, useEffect, RefObject } from 'react';
import { TFunction, withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import envData from '../../../../../config/env.json';
import { hardGoTo as navigate } from '../../../redux';
import { Link } from '../../helpers';
import useWindowSize from './use-window-size';

const { apiLocation } = envData;

export interface NavLinksProps {
  fetchState?: { pending: boolean };
  i18n: Object;
  innerRef?: RefObject<HTMLButtonElement>;
  t: TFunction;
  user?: Record<string, unknown>;
  navigate?: (location: string) => void;
}

const mapDispatchToProps = {
  navigate
};

export const NavLinks = (props: NavLinksProps): JSX.Element => {
  const [isDropdown, setIsDropdown] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [width, height] = useWindowSize();
  const {
    innerRef,
    fetchState,
    user: { username, role },
    navigate
  }: NavLinksProps = props;

  const { pending } = fetchState;

  // ------------IsDropdown Handler------------
  // console.log('userRole', role);
  const handleIsDropdown = () => {
    if (width < 1000) {
      setIsDropdown(isDropdown ? false : true);
      if (isDropdown) {
        document.body.style.overflowY = null;
      } else {
        document.body.style.overflowY = 'hidden';
      }
    }
  };
  const stockerUrlCourante = (): void => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href;

      // Stocker l'URL dans le localStorage
      localStorage.setItem('currentUrlForRedirection', currentUrl);

      handleIsDropdown;
    }
  };

  useEffect(() => {
    if (width > 1000) {
      document.body.style.overflowY = null;
      setIsDropdown(false);
    }
  }, [width]);

  useEffect(() => {
    const urlredirectionAfterLogin = localStorage.getItem(
      'currentUrlForRedirection'
    );
    if (urlredirectionAfterLogin) {
      localStorage.removeItem('currentUrlForRedirection');
      navigate(`${urlredirectionAfterLogin}`);
    }
  }, [navigate]);

  return pending ? (
    <div className='nav-skeleton' />
  ) : (
    <div className=''>
      <label htmlFor='show-menu' className='menu-icon'>
        <FontAwesomeIcon
          icon={isDropdown ? faXmark : faBars}
          onClick={handleIsDropdown}
        />
      </label>
      <input type='checkbox' id='show-menu' />
      <ul className={isDropdown ? 'nav-list show-menu' : 'nav-list'}>
        <li className='nav-item'>
          <Link
            onClick={handleIsDropdown}
            className=''
            key='learn'
            to={'/'}
            ref={innerRef}
            activeClassName='active'
          >
            {'Accueil'}
          </Link>
        </li>

        <li className='nav-item'>
          <Link
            onClick={handleIsDropdown}
            className=''
            key='courses'
            to='/catalogue'
            ref={innerRef}
            activeClassName='active'
          >
            {'Catalogue'}
          </Link>
        </li>

        <li className='nav-item'>
          <Link
            onClick={handleIsDropdown}
            external={true}
            className=''
            key='Kadea-academy'
            to='https://www.kinshasadigital.academy/'
          >
            {'Académie '}
            <FontAwesomeIcon icon={faExternalLink} />
          </Link>
        </li>

        {username && (
          <Fragment key='profile-settings'>
            <li className='nav-item'>
              <Link
                onClick={handleIsDropdown}
                className=''
                key='dashboard'
                sameTab={false}
                to={`/dashboard`}
                ref={innerRef}
                activeClassName='active'
              >
                {'Tableau de bord'}
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                onClick={handleIsDropdown}
                className=''
                key='settings'
                sameTab={false}
                to={`/settings`}
                ref={innerRef}
                activeClassName='active'
              >
                {'Profil'}
              </Link>
            </li>
          </Fragment>
        )}

        {role == 'Admin' ||
          (role == 'Super-admin' && (
            <li className='nav-item'>
              <a
                onClick={stockerUrlCourante}
                className=''
                href={`/admin/all-members`}
                key='dashbord'
                ref={innerRef}
              >
                {'Back office'}
              </a>
            </li>
          ))}

        {!username && (
          <li className='nav-item'>
            <a
              onClick={stockerUrlCourante}
              className='nav-signin-btn'
              href={`${apiLocation}/signin`}
              key='signin'
              ref={innerRef}
            >
              {'Connexion'}
            </a>
          </li>
        )}

        {username && (
          <Fragment key='signout-frag'>
            <li className='nav-item'>
              <a
                onClick={handleIsDropdown}
                className='nav-signout-btn'
                href={`${apiLocation}/signout`}
                key='sign-out'
                ref={innerRef}
              >
                {'Déconnexion'}
              </a>
            </li>
          </Fragment>
        )}
      </ul>
    </div>
  );
};

NavLinks.displayName = 'NavLinks';

export default connect(null, mapDispatchToProps)(withTranslation()(NavLinks));
