/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import {
  faChevronLeft,
  faChevronRight,
  faSearch,
  faXmark,
  faAngleDoubleRight,
  faAngleDoubleLeft,
  faEllipsisH,
  faDownload,
  faInfoCircle // Ajouté pour le composant Invitations
} from '@fortawesome/free-solid-svg-icons';

import { mkConfig, generateCsv, download } from 'export-to-csv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Member, Group, UserList } from '../../redux/prop-types';
import { getDatabaseResource } from '../../utils/ajax';

// === AJOUT DU COMPOSANT INVITATIONS ===
interface InvitationsProps {
  groups: Group[];
}

const Invitations = ({ groups }: InvitationsProps): JSX.Element => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 font-sans'>
      {/* Colonne Gauche : Add a member */}
      <div className='bg-[#F5FAFF] p-8 rounded-sm'>
        <h3 className='text-lg font-bold text-gray-900 mb-2'>Add a member</h3>
        <p className='text-sm text-gray-600 mb-6'>
          Update your plan to add more seats for paid members.
        </p>

        <form className='space-y-4'>
          {/* Role */}
          <div>
            <label className='block text-sm font-bold text-gray-700 mb-1'>
              Role *
            </label>
            <select className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3 bg-white border'>
              <option>Admin (dashboard only)</option>
              <option>Member</option>
            </select>
          </div>

          {/* Full Name */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Full name
            </label>
            <input
              type='text'
              className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3 border'
            />
          </div>

          {/* Email */}
          <div>
            <label className='block text-sm font-bold text-gray-700 mb-1'>
              Email *
            </label>
            <input
              type='email'
              placeholder='name@yourcompany.com'
              className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3 border'
            />
          </div>

          {/* Group */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Group
            </label>
            <select className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3 bg-white border text-gray-500'>
              <option value=''>Select an option...</option>
              {groups
                .filter(g => g.userGroupName !== 'all')
                .map(g => (
                  <option key={g.userGroupName} value={g.userGroupName}>
                    {g.userGroupName}
                  </option>
                ))}
            </select>
          </div>

          <div className='pt-2'>
            <button
              type='button'
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Send invite
            </button>
          </div>
        </form>
      </div>

      {/* Colonne Droite : Add members in bulk */}
      <div className='bg-[#F5FAFF] p-8 rounded-sm'>
        <h3 className='text-lg font-bold text-gray-900 mb-2'>
          Add members in bulk
        </h3>
        <p className='text-sm text-gray-600 mb-4'>
          Add more seats to invite members in bulk.
        </p>

        <div className='mb-6'>
          {/* <a
            href='#'
            className='text-sm text-blue-600 hover:text-blue-800 hover:underline font-medium'
          >
            Download CSV template
          </a> */}
        </div>

        <form className='space-y-4'>
          {/* Upload File */}
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Upload file *
            </label>
            <div className='flex items-center border border-gray-300 rounded-md bg-gray-200'>
              <label className='cursor-pointer bg-white text-gray-500 px-3 py-2 border-r border-gray-300 text-sm hover:bg-gray-50'>
                Choose file
                <input type='file' className='hidden' accept='.csv' />
              </label>
              <span className='px-3 text-sm text-gray-500'>No file chosen</span>
            </div>
          </div>

          {/* Choose Group */}
          <div>
            <div className='flex justify-between items-center mb-1'>
              <label className='block text-sm font-medium text-gray-500'>
                Choose a group
              </label>
              <FontAwesomeIcon
                icon={faInfoCircle}
                className='text-gray-400 h-3 w-3'
              />
            </div>
            <select
              disabled
              className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm py-2 px-3 bg-gray-200 border text-gray-500 cursor-not-allowed'
            >
              <option>Select an option...</option>
            </select>
          </div>

          <div className='pt-2'>
            <button
              type='button'
              disabled
              className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-500 bg-gray-300 cursor-not-allowed'
            >
              Send invites
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
// ===================================

interface TableMembersProps {
  members?: Member[];
  groups: Group[];
  allListMembers?: Member[];
  countUsers?: number;
  currentPage: number;
  totalPages: number;
  currentGroupMembers: string;
  showMemberDetails: (member: Member) => void;
  navigateToPage: (forwardOrBackward: boolean | number) => void;
  handleChangeGroup: (event: React.ChangeEvent<HTMLSelectElement>) => void;

  searchMember: (memberName: string) => void;
  addUsers: (
    event: React.ChangeEvent<HTMLInputElement>,
    groupName: string,
    userId: string[]
  ) => void;
  removeUsers: (
    event: React.ChangeEvent<HTMLInputElement>,
    userIds: string[],
    groupName: string
  ) => void;
  updatingMembersGroup?: { isAddedStatus: boolean; message: string };

  isLoadingMemberState: boolean;
}

export function TableMembers(props: TableMembersProps): JSX.Element {
  const {
    members,
    countUsers,
    groups,
    navigateToPage,
    currentPage,
    totalPages,
    currentGroupMembers,
    showMemberDetails,
    handleChangeGroup,
    searchMember,
    addUsers,
    removeUsers,
    updatingMembersGroup,
    isLoadingMemberState
  } = props;

  const [activeTab, setActiveTab] = useState<'Members' | 'Invitations'>(
    'Members'
  ); // === AJOUT DU STATE TAB ===
  const [memberName, setMemberName] = useState<string>('');
  const [selectedGroupMembers, setSelectedGroupMembers] = useState<string[]>(
    []
  );

  const [selectedGroupName, setSelectedGroupName] = useState<string>('');
  const [membersForExport, setMembersForExport] = useState<Member[]>();

  const handleSearchMember = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchMember(memberName);
  };

  const handleClearSearchMemberInput = () => {
    setMemberName('');
    searchMember('');
  };

  const handleChangeSearchMemberInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const memberNameInputValue = event.target.value;
    setMemberName(memberNameInputValue);
  };

  const handleChangeGroupName = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const groupMembersInput = event.target.value;
    setSelectedGroupName(groupMembersInput);
  };

  const handleSelectedGroupMembers = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    const isChecked = selectedGroupMembers.includes(value);

    if (isChecked) {
      setSelectedGroupMembers(selectedGroupMembers.filter(id => id !== value));
    } else {
      setSelectedGroupMembers([...selectedGroupMembers, value]);
    }
  };

  const isMemberChecked = (memberId: string): boolean => {
    return selectedGroupMembers.includes(memberId);
  };

  const getAllMembersForExport = async () => {
    try {
      const memberList = await getDatabaseResource<UserList>(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `/all-users?limit=100000`
      );
      if (memberList != null && !('error' in memberList)) {
        const inverseMemberList = memberList.userList.reverse();
        setMembersForExport([...inverseMemberList]);
      } else {
        setMembersForExport([]);
      }
    } catch (error) {
      console.error('Error fetching members for export:', error);
      setMembersForExport([]);
    }
  };

  const dateFormat = (dateString: string) => {
    const date = new Date(dateString);
    // Format simple comme sur la maquette : 2/6/23
    return date.toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: '2-digit'
    });
  };

  const exportUsers = (membersToExport: Member[]) => {
    const csvConfig = mkConfig({ useKeysAsHeaders: true });
    const mockData = membersToExport.map(member => {
      return {
        Email: member.email,
        Nom: member.name,
        Telephone: member.phone,
        Whatsapp: member.whatsapp,
        Genre: member.gender,
        Ville: member.location,
        DateInscription:
          new Date(member.createAt) > new Date(new Date().getTime() - 120000)
            ? ''
            : dateFormat(member.createAt),
        coursSuivis:
          member.currentsSuperBlock.length > 0
            ? member.currentsSuperBlock
                .map(currentSuperBlock => {
                  return currentSuperBlock.superBlockName;
                })
                .join(',')
            : 'Aucun'
      };
    });

    const csv = generateCsv(csvConfig)(mockData);
    download(csvConfig)(csv);
  };

  useEffect(() => {
    void getAllMembersForExport();
  }, []);

  // Reset la sélection quand on change de groupe ou qu'une action est finie
  useEffect(() => {
    setSelectedGroupMembers([]);
    setSelectedGroupName('');
  }, [currentGroupMembers, updatingMembersGroup]);

  return (
    <div className='w-full bg-white p-6'>
      {/* Top Header Section */}
      <div className='flex justify-between items-center mb-8'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Members</h1>
          <p className='text-sm text-gray-600 mt-1'>
            {countUsers} seats used, 0 seats remaining |{' '}
            <span className='text-blue-600 cursor-pointer hover:underline text-sm'>
              Add seats
            </span>
          </p>
        </div>
        {/* On cache le bouton export si on est sur l'onglet Invitations */}
        {activeTab === 'Members' && (
          <div className='flex gap-2'>
            <button
              className='inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md
         text-white bg-blue-500 hover:bg-blue-600 focus:outline-none
         focus:ring-blue-500 border border-transparent disabled:opacity-50
         transition-none '
              disabled={!membersForExport || membersForExport.length === 0}
              onClick={() => {
                if (membersForExport && membersForExport.length > 0) {
                  exportUsers(membersForExport);
                }
              }}
            >
              <FontAwesomeIcon icon={faDownload} className='mr-2' />
              Export
            </button>
          </div>
        )}
      </div>

      {/* Tabs - MIS À JOUR AVEC LOGIQUE ET CLASSES */}
      <div className='border-b border-gray-200 mb-6'>
        <nav className='-mb-px flex space-x-8'>
          <button
            className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                bg-transparent focus:outline-none
                transition-colors duration-200 ease-in-out
                ${
                  activeTab === 'Members'
                    ? ' text-gray-900 border-b-blue-600 border-transparent'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-transparent'
                }
              `}
            onClick={() => setActiveTab('Members')}
            type='button'
          >
            Members
          </button>
          <button
            className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                bg-transparent focus:outline-none
                transition-colors duration-200 ease-in-out
                ${
                  activeTab === 'Invitations'
                    ? 'text-gray-900 border-b-blue-600 border-transparent'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-transparent'
                }
              `}
            onClick={() => setActiveTab('Invitations')}
            type='button'
          >
            Invitations
          </button>
        </nav>
      </div>

      {/* === RENDU CONDITIONNEL === */}
      {activeTab === 'Invitations' ? (
        <Invitations groups={groups} />
      ) : (
        <>
          {/* Filters Row */}
          <div className='grid grid-cols-12 gap-6 mb-6 items-end'>
            {/* Group Select */}
            <div className='col-span-3'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Group
              </label>
              <div className='relative'>
                <select
                  className='block w-full pl-3 pr-10 py-2 text-black focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md  shadow-sm'
                  value={currentGroupMembers}
                  onChange={e => {
                    const event = {
                      target: { value: e.target.value },
                      // eslint-disable-next-line @typescript-eslint/no-empty-function
                      preventDefault: () => {}
                    } as React.ChangeEvent<HTMLSelectElement>;
                    handleChangeGroup(event);
                  }}
                >
                  <option value='all'>All</option>
                  {groups
                    .filter(g => g.userGroupName !== 'all')
                    .map(group => (
                      <option
                        key={group.userGroupName}
                        value={group.userGroupName}
                      >
                        {group.userGroupName}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* Member Search */}
            <div className='col-span-3'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Member
              </label>
              <div className='relative rounded-md shadow-sm'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FontAwesomeIcon icon={faSearch} className='text-gray-400' />
                </div>
                <form onSubmit={handleSearchMember}>
                  <input
                    type='text'
                    className='focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md border py-2'
                    placeholder='Search members...'
                    value={memberName}
                    onChange={handleChangeSearchMemberInput}
                  />
                </form>
                {memberName && (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
                  <div
                    className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer'
                    onClick={handleClearSearchMemberInput}
                  >
                    <FontAwesomeIcon
                      icon={faXmark}
                      className='text-gray-400 hover:text-gray-600'
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Spacer to align Invitation status to the right (like mockup) or keep grid */}
            <div className='col-span-3'></div>

            {/* Invitation Status (Static for UI match) */}
            <div className='col-span-3'>
              <label className='block text-sm font-medium text-gray-700 mb-1'>
                Invitation status
              </label>
              <select
                disabled
                className='block w-full pl-3 pr-10 py-2 text-base border-gray-200 bg-gray-50 text-gray-400 sm:text-sm rounded-md border shadow-sm cursor-not-allowed'
              >
                <option>Select an option</option>
              </select>
            </div>
          </div>

          {/* Groups Management Actions (Only shown when group selected) */}
          <div className='mb-4 flex gap-2 items-center min-h-[40px]'>
            {selectedGroupMembers.length > 0 && (
              <>
                <span className='text-sm text-gray-600 mr-2'>
                  {selectedGroupMembers.length} selected
                </span>
                <div className='flex items-center gap-2'>
                  <select
                    className='text-sm text-black border-gray-300 rounded-md border shadow-sm py-1.5 pl-2 pr-8'
                    value={selectedGroupName}
                    onChange={handleChangeGroupName}
                  >
                    <option value=''>Move to group...</option>
                    {groups
                      .filter(g => g.userGroupName !== 'all')
                      .map(group => (
                        <option
                          key={group.userGroupName}
                          value={group.userGroupName}
                        >
                          {group.userGroupName}
                        </option>
                      ))}
                  </select>
                  <button
                    className='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 disabled:opacity-50'
                    disabled={
                      !selectedGroupName ||
                      selectedGroupName === currentGroupMembers
                    }
                    onClick={() => {
                      // Adaptation pour respecter la signature de addUsers (event, groupName, userIds)
                      const event = {
                        target: { value: '' }
                      } as React.ChangeEvent<HTMLInputElement>;
                      addUsers(event, selectedGroupName, selectedGroupMembers);
                    }}
                  >
                    Add
                  </button>
                  <button
                    className='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-red-600 hover:bg-red-700 disabled:opacity-50'
                    disabled={
                      groups.length <= 1 || currentGroupMembers === 'all'
                    }
                    onClick={() => {
                      const event = {
                        target: { value: '' }
                      } as React.ChangeEvent<HTMLInputElement>;
                      removeUsers(
                        event,
                        selectedGroupMembers,
                        currentGroupMembers
                      );
                    }}
                  >
                    Remove
                  </button>
                </div>
                {updatingMembersGroup?.message && (
                  <span
                    className={`text-sm ml-2 ${
                      updatingMembersGroup.isAddedStatus
                        ? 'text-green-600'
                        : 'text-red-600'
                    }`}
                  >
                    {updatingMembersGroup.message}
                  </span>
                )}
              </>
            )}
          </div>

          {/* Data Table */}
          <div className='flex flex-col'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-white'>
                      <tr>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider'
                        >
                          <div className='flex items-center gap-2'>
                            <input
                              type='checkbox'
                              className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                              onChange={e => {
                                if (e.target.checked && members) {
                                  setSelectedGroupMembers(
                                    members.map(m => m.id)
                                  );
                                } else {
                                  setSelectedGroupMembers([]);
                                }
                              }}
                              checked={
                                members &&
                                members.length > 0 &&
                                selectedGroupMembers.length === members.length
                              }
                            />
                            Email
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider'
                        >
                          Name
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider'
                        >
                          Role
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider'
                        >
                          Joined
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-bold text-gray-900 uppercase tracking-wider'
                        >
                          Groups
                        </th>
                        <th scope='col' className='relative px-6 py-3'>
                          <span className='sr-only'>Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      {isLoadingMemberState ? (
                        <tr>
                          <td
                            colSpan={6}
                            className='px-6 py-4 text-center text-sm text-gray-500'
                          >
                            Loading members...
                          </td>
                        </tr>
                      ) : !members || members.length === 0 ? (
                        <tr>
                          <td
                            colSpan={6}
                            className='px-6 py-4 text-center text-sm text-gray-500'
                          >
                            No members found.
                          </td>
                        </tr>
                      ) : (
                        members.map(member => (
                          <tr
                            key={member.id}
                            className='hover:bg-gray-50 group'
                          >
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600'>
                              <div className='flex items-center gap-2'>
                                <input
                                  type='checkbox'
                                  className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded'
                                  checked={isMemberChecked(member.id)}
                                  value={member.id}
                                  onChange={handleSelectedGroupMembers}
                                />
                                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                                <span
                                  className='cursor-pointer hover:underline'
                                  onClick={() => showMemberDetails(member)}
                                >
                                  {member.email}
                                </span>
                              </div>
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                              {member.name || '-'}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                              {/* Affichage du Rôle */}
                              Admin
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 italic'>
                              {member.createAt
                                ? dateFormat(member.createAt)
                                : 'Pending'}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
                              {/* Correction pour l'affichage des groupes */}
                              {member.groups && member.groups.length > 0
                                ? Array.isArray(member.groups)
                                  ? member.groups.join(', ')
                                  : 'Groupes'
                                : ''}
                            </td>
                            <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                              <button
                                className='text-blue-600 hover:text-blue-900 font-bold mr-4 border-none hover:bg-gray-400 cursor-pointer'
                                onClick={() => showMemberDetails(member)}
                              >
                                Edit
                              </button>
                              <button className='text-gray-400 hover:text-gray-600 border-none hover:bg-gray-400 cursor-pointe'>
                                <FontAwesomeIcon icon={faEllipsisH} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-4'>
            <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
              <div>
                <p className='text-sm text-gray-700'>
                  Showing page{' '}
                  <span className='font-medium'>{currentPage}</span> of{' '}
                  <span className='font-medium'>{totalPages}</span>
                </p>
              </div>
              <div>
                <nav
                  className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
                  aria-label='Pagination'
                >
                  <button
                    onClick={() => navigateToPage(1)}
                    disabled={currentPage === 1}
                    className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed'
                  >
                    <span className='sr-only'>First</span>
                    <FontAwesomeIcon
                      icon={faAngleDoubleLeft}
                      className='h-3 w-3'
                    />
                  </button>
                  <button
                    onClick={() => navigateToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed'
                  >
                    <span className='sr-only'>Previous</span>
                    <FontAwesomeIcon icon={faChevronLeft} className='h-3 w-3' />
                  </button>

                  {/* Current Page Indicator */}
                  <span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600'>
                    {currentPage}
                  </span>

                  <button
                    onClick={() => navigateToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed'
                  >
                    <span className='sr-only'>Next</span>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className='h-3 w-3'
                    />
                  </button>
                  <button
                    onClick={() => navigateToPage(totalPages)}
                    disabled={currentPage === totalPages}
                    className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:bg-gray-100 disabled:cursor-not-allowed'
                  >
                    <span className='sr-only'>Last</span>
                    <FontAwesomeIcon
                      icon={faAngleDoubleRight}
                      className='h-3 w-3'
                    />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
