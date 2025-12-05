import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// eslint-disable-next-line import/no-unresolved
import envData from '../../../../config/env.json';
import { createFlashMessage } from '../../components/Flash/redux';
import { Loader } from '../../components/helpers';
import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../../redux';

import { User } from '../../redux/prop-types';
import { MembersTab } from './components/MembersTab';
import { ProgressTab } from './components/ProgressTab';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const { apiLocation, homeLocation } = envData;

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn: boolean) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

interface ShowAdminHomeProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

export function ShowAdminHome(props: ShowAdminHomeProps): JSX.Element {
  const { showLoading, isSignedIn, navigate, user } = props;
  const [activeTab, setActiveTab] = useState('Members');
  // const [selectedGroup, setSelectedGroup] = useState('All');

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  // Vérifier que l'utilisateur existe
  if (!user) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  // Vérifier l'accès : Super-admin, Admin, ou judah@kadea.co
  const isSuperAdmin = user.role === 'Super-admin';
  const isAdmin = user.role === 'Admin';
  const isJudahEmail = user.email === 'judah@kadea.co';

  if (!isSuperAdmin && !isAdmin && !isJudahEmail) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${homeLocation}`);
    return <Loader fullScreen={true} />;
  }

  const tabs = ['Members', 'Progress', 'Completions', 'Content', 'Usage'];

  return (
    <>
      <Helmet title={`Reporting | Kadea Online`} />

      <div className='w-full'>
        {/* Header Section */}
        <div className='mb-6'>
          <div className='flex justify-between items-baseline mb-4'>
            <h1 className='text-2xl font-bold text-gray-900'>Reporting</h1>
            <div className='text-sm text-gray-600'>
              6 seats used, 0 seats remaining |{' '}
              <button className='text-blue-600 hover:text-blue-800 hover:underline bg-transparent border-none p-0 cursor-pointer'>
                Add seats
              </button>
            </div>
          </div>
          {/* Navigation Tabs */}
          <div className='border-b border-gray-200'>
            <nav className='-mb-px flex space-x-8'>
              {tabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  type='button' // Bonne pratique pour éviter les submits involontaires
                  className={`
                    whitespace-nowrap py-4 px-1 border-0 border-b-2 font-medium text-sm
                    bg-transparent focus:outline-none focus:ring-0
                    transition-colors duration-200 ease-in-out hover:border-transparent hover:bg-transparent hover:text-gray-900
                    ${
                      activeTab === tab
                        ? 'border-blue-600 text-gray-900'
                        : 'border-transparent text-gray-500'
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className='mt-6'>
          {activeTab === 'Members' && <MembersTab />}
          {activeTab === 'Progress' && <ProgressTab />}
          {/* Placeholder for other tabs */}
          {['Completions', 'Content', 'Usage'].includes(activeTab) && (
            <div className='text-center py-10 text-gray-500'>
              {activeTab} tab content coming soon...
            </div>
          )}
        </div>
      </div>
    </>
  );
}

ShowAdminHome.displayName = 'ShowAdminHome';

export default connect(mapStateToProps, mapDispatchToProps)(ShowAdminHome);
