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
import { hardGoTo as navigate } from '../../../redux';
import { Link } from '../../helpers';

import './universal-nav-side-bar.css';
import { saveDataOnDb } from '../../../utils/ajax';

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

  return (
    <div className=''>
      <ul className='side-bar-nav-list'>
        {/* <li className='side-bar-nav-item'>
          <Link
            className=''
            key='admin-home'
            to={'/admin/admin-home'}
            activeClassName='active'
          >
            {'Accueil'}
          </Link>
        </li> */}

        <li className='side-bar-nav-item'>
          <Link
            className=''
            key='admin-members'
            to='/admin/all-members'
            partiallyActive={true}
            activeClassName='active'
          >
            {'Membres'}
          </Link>
        </li>

        <li className='side-bar-nav-item'>
          <Link
            className=''
            key='admin-home'
            to={'/admin/all-groups'}
            activeClassName='active'
          >
            {'Groupes'}
          </Link>
        </li>
        <li className='side-bar-nav-item'>
          <Link
            className=''
            key='admin-home'
            to={'/admin/all-roles'}
            activeClassName='active'
          >
            {'Rôles'}
          </Link>
        </li>
      </ul>
      <hr />
      <ul className='side-bar-nav-list'>
        <li className='side-bar-nav-item'>
          <Link
            className=''
            key='kadea-online-home'
            to='/'
            activeClassName='active'
          >
            {'Kadea online app'}
          </Link>
        </li>
        <li>
          <button onClick={void hundleUpdatedCourses}>Update Courses</button>
        </li>
      </ul>
    </div>
  );
};

SideBarNavLinks.displayName = 'SideBarNavLinks';

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(SideBarNavLinks));
