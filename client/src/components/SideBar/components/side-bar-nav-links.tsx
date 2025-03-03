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
import { saveDataOnDb, saveKadeaCoursesOnDb } from '../../../utils/ajax';

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
      await saveKadeaCoursesOnDb();
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
    <div className='flex flex-col min-h-screen w-64 bg-white white:bg-white-900 border-r border-gray-200 dark:border-gray-800 shadow-lg'>
      {/* Logo Section */}
      <div className='flex items-center p-6 border-b border-gray-800 bg-gray-900'>
        <svg
          className='w-6 h-6 mr-3 text-purple-500 self-start'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          width={30}
          height={30}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'
          />
        </svg>
        <div className='flex flex-col'>
          <h1 className='text-xl font-bold text-white'>Dashboard</h1>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className='flex-1 p-4'>
        <div className='space-y-8'>
          {/* Main Menu */}
          <div className='flex flex-col space-y-1 text-sm  pt-4'>
            <h2 className='px-3 text-xs font-semibold text-Red-700 uppercase tracking-wider mb-3 colore-red-text'>
              Menu Principal
            </h2>
            <ul className='flex flex-col space-y-2 p-12 padding-12'>
              <li className='list-none liste-None p-0 m-0 space-y-2'>
                <Link
                  to='/admin/all-members'
                  className='flex items-center px-3 py-2 rounded-md text-sm font-medium
                           text-gray-700 no-underline  
                           
                            text-decoration-none'
                >
                  <svg
                    className='w-5 h-5 mr-3 p-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    width={30}
                    height={30}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
                    />
                  </svg>
                  Membres
                </Link>
              </li>

              <li className='list-none liste-None p-0 m-0 space-y-2'>
                <Link
                  to='/admin/all-groups'
                  className='flex items-center px-3 py-2 rounded-md text-sm font-medium
                           text-gray-700
                          
                           text-decoration-none'
                >
                  <svg
                    className='w-5 h-5 mr-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    width={30}
                    height={30}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                  Groupes
                </Link>
              </li>

              <li className='list-none liste-None p-0 m-0 space-y-2'>
                <Link
                  to='/admin/all-roles'
                  className='flex items-center px-3 py-2 rounded-md text-sm font-medium
                           text-gray-700 
                           dark:text-gray-300 
                          text-decoration-none'
                >
                  <svg
                    className='w-5 h-5 mr-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    width={30}
                    height={30}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857'
                    />
                  </svg>
                  Rôles
                </Link>
              </li>
            </ul>
          </div>

          {/* Applications Section */}
          <div className='border-t border-gray-200 dark:border-gray-800 pt-4'>
            <h2 className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider colore-red-text'>
              Applications
            </h2>
            <ul className='flex flex-col space-y-2 p-12 padding-12'>
              <li className='list-none liste-None p-0 m-0 space-y-2'>
                <Link
                  to='/'
                  className='flex items-center px-3 py-2 rounded-md text-sm font-medium
                           text-gray-700 
                           dark:text-gray-300 
                           text-decoration-none'
                >
                  <svg
                    className='w-5 h-5 mr-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    width={30}
                    height={30}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                    />
                  </svg>
                  Kadea online app
                </Link>
              </li>

              <li className='list-none liste-None p-0 m-0 space-y-2'>
                <button
                  /* eslint-disable @typescript-eslint/no-misused-promises */
                  onClick={hundleUpdatedCourses}
                  className='w-full flex items-center px-3 py-2 rounded-md text-sm font-medium
                           text-gray-700 
                           dark:text-gray-300 '
                >
                  <svg
                    className='w-5 h-5 mr-3'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    width={24}
                    height={24}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
                    />
                  </svg>
                  Update Courses
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

SideBarNavLinks.displayName = 'SideBarNavLinks';

export default connect(
  null,
  mapDispatchToProps
)(withTranslation()(SideBarNavLinks));
