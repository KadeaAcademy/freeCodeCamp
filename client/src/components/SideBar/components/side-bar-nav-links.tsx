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
  faArrowUpRightFromSquare,
  faIdBadge,
  faLayerGroup,
  faRightFromBracket,
  faRotateRight,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { hardGoTo as navigate } from '../../../redux';
import { Link } from '../../helpers';

import './universal-nav-side-bar.css';
import { saveDataOnDb } from '../../../utils/ajax';
import envData from '../../../../../config/env.json';

export interface SideBarNavLinksProps {
  fetchState?: { pending: boolean };
  i18n: Object;
  t: TFunction;
  user?: Record<string, unknown>;
  navigate?: (location: string) => void;
}

const mapDispatchToProps = {
  navigate
};

export const SideBarNavLinks = (): JSX.Element => {
  const { apiLocation } = envData;
  const hundleUpdatedCourses = async () => {
    try {
      await saveDataOnDb();
    } catch (error) {
      console.error(
        'erreur lors de la sauvegarde des données dans la bd:',
        error.message,
        error.name,
        error.status
      );
    }
  };

  const mainLinks = [
    {
      key: 'admin-members',
      to: '/admin/all-members',
      label: 'Membres',
      icon: faUserGroup,
      partiallyActive: true
    },
    {
      key: 'admin-groups',
      to: '/admin/all-groups',
      label: 'Groupes',
      icon: faLayerGroup
    },
    {
      key: 'admin-roles',
      to: '/admin/all-roles',
      label: 'Rôles',
      icon: faIdBadge
    }
  ];

  const adminLinks = [
    {
      key: 'kadea-online-home',
      to: '/',
      label: 'Kadea online app',
      icon: faArrowUpRightFromSquare
    }
  ];

  return (
    <div className='side-bar-nav-wrapper'>
      <div className='side-bar-section-label'>Menu</div>
      <ul className='side-bar-nav-list'>
        {mainLinks.map(link => (
          <li className='side-bar-nav-item' key={link.key}>
            <Link
              className='side-bar-link'
              to={link.to}
              partiallyActive={link.partiallyActive}
              activeClassName='active'
            >
              <FontAwesomeIcon icon={link.icon} className='side-bar-icon' />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='side-bar-section-label'>Admin</div>
      <ul className='side-bar-nav-list'>
        {adminLinks.map(link => (
          <li className='side-bar-nav-item' key={link.key}>
            <Link
              className='side-bar-link'
              to={link.to}
              activeClassName='active'
            >
              <FontAwesomeIcon icon={link.icon} className='side-bar-icon' />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <button
        className='side-bar-utility-button'
        onClick={() => void hundleUpdatedCourses()}
        type='button'
      >
        <FontAwesomeIcon icon={faRotateRight} className='side-bar-icon' />
        <span>Mettre à jour les cours</span>
      </button>

      <div className='side-bar__footer'>
        <a className='side-bar-utility-button' href={`${apiLocation}/signout`}>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            className='side-bar-icon'
          />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

SideBarNavLinks.displayName = 'SideBarNavLinks';

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(SideBarNavLinks));
