import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import validator from 'validator';
// eslint-disable-next-line import/no-unresolved
import envData from '../../../../config/env.json';

import { addUserInGRoup, remoevUserInGRoup } from '../../utils/ajax';
import { createFlashMessage } from '../../components/Flash/redux';
import { Loader } from '../../components/helpers';
import { Member, Group, User } from '../../redux/prop-types';

import {
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  hardGoTo as navigate
} from '../../redux';

import './admin-global.css';
import { TableMembers } from './table-members';
import { DetailMember } from './detail-members';
import { getAllGroups, getMembers } from './all-server-request-members';

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

interface ShowAllMembersProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
}

export function ShowAllMembers(props: ShowAllMembersProps): JSX.Element {
  const { showLoading, isSignedIn, navigate, user } = props;
  const [members, setMembers] = useState<Member[]>();
  const [allDataMembers, setAllDataMembers] = useState<Member[]>();

  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [countUsers, setCountUsers] = useState<number>();
  const [memberNameToSearch, setMemberNameToSearch] = useState<string>('');
  const [groupMembers, setGroupMembers] = useState<string>('all');
  const [groups, setGroups] = useState<Group[]>([]);
  const [updating, setupdating] =
    useState<{ isAddedStatus: boolean; message: string }>();
  const [countMemberGroupUpdate, setCountMemberGroupUpdate] =
    useState<number>(1);
  const [isLoadingMember, setIsLoadingMember] = useState<boolean>(false);
  // const data={
  //   id:"64d39b958b1fd17adc0e8f28",
  //   userGroup:"C3"
  // }

  useEffect(() => {
    const fetchMembersAndGrours = async () => {
      try {
        await getMembers({
          currentPage,
          groupMembers,
          memberNameToSearch,
          setMembers,
          setAllDataMembers,
          setCountUsers,
          setIsLoadingMember,
          setTotalPages,
          setCurrentPage,
          totalPages
        });
        await getAllGroups({ currentPage, setGroups });
      } catch (error) {
        console.error('Error fetching members:', error);
        setMembers([]);
        setCountUsers(0);
      } finally {
        setIsLoadingMember(false);
      }
    };
    void fetchMembersAndGrours();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, groupMembers, memberNameToSearch]);

  const showMemberDetails = (member: Member | null) => {
    setSelectedMember(member);
  };

  const returnToTable = () => {
    setSelectedMember(null);
  };

  const navigateToPage = (page: number | boolean) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
    } else if (typeof page === 'boolean') {
      setCurrentPage(prev => (page ? prev + 1 : prev - 1));
    }
  };

  const handleChangeGroupMembers = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    event.preventDefault();
    const groupMembersInput = event.target.value.slice();
    setGroupMembers(groupMembersInput);
    setCurrentPage(1);
    setTotalPages(1);
  };

  const searchMember = (memberNameInput = '') => {
    const memberName = memberNameInput;
    setMemberNameToSearch(memberName);
  };

  const addUser = (
    event: React.ChangeEvent<HTMLInputElement>,
    groupName: string,
    userId: string[]
  ) => {
    event.preventDefault();
    const data = {
      ids: userId,
      userGroup: groupName
    };

    if (userId.length !== 0) {
      let res;
      void (async () => {
        res = await addUserInGRoup(data);

        if (res && res.isAdded) {
          setCountMemberGroupUpdate(countMemberGroupUpdate + 1);

          setupdating({
            isAddedStatus: res.isAdded,
            message: res.message
          });
          setTimeout(() => {
            setupdating({
              isAddedStatus: false,
              message: ''
            });
          }, 5000);
        }
      })();
    }
  };

  const removeUser = (
    event: React.ChangeEvent<HTMLInputElement>,
    userIds: string[],
    groupName: string
  ) => {
    event.preventDefault();
    const data = {
      ids: userIds,
      userGroup: groupName
    };

    let res;
    void (async () => {
      res = await remoevUserInGRoup(data);
      setCountMemberGroupUpdate(countMemberGroupUpdate + 1);

      if (res && res.isRemoved) {
        setupdating({
          isAddedStatus: res.isRemoved,
          message: res.message
        });
        setTimeout(() => {
          setupdating({
            isAddedStatus: false,
            message: ''
          });
        }, 5000);
      }
    })();
  };

  if (showLoading) {
    return <Loader fullScreen={true} />;
  }

  if (!isSignedIn) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  // Vérifier l'accès : Super-admin, Admin, ou judah@kadea.co
  const isSuperAdmin = validator.equals(user.role, 'Super-admin');
  const isAdmin = validator.equals(user.role, 'Admin');
  const isJudahEmail = user.email === 'judah@kadea.co';

  if (!isSuperAdmin && !isAdmin && !isJudahEmail) {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    navigate(`${homeLocation}`);
    return <Loader fullScreen={true} />;
  }

  return (
    <>
      <Helmet title={`Tableau de bord - Membres | Kadea Online`} />

      {!selectedMember ? (
        <TableMembers
          members={members}
          groups={groups}
          countUsers={countUsers}
          currentPage={currentPage}
          totalPages={totalPages}
          navigateToPage={navigateToPage}
          showMemberDetails={showMemberDetails}
          handleChangeGroup={handleChangeGroupMembers}
          searchMember={searchMember}
          addUsers={addUser}
          removeUsers={removeUser}
          currentGroupMembers={groupMembers}
          updatingMembersGroup={updating}
          isLoadingMemberState={isLoadingMember}
          allListMembers={allDataMembers}
        />
      ) : (
        <div className='modern-admin-container'>
          <div className='modern-admin-header'>
            <button
              className='modern-btn modern-btn-secondary'
              onClick={returnToTable}
              style={{ marginBottom: '1rem' }}
            >
              ← Retour à la liste
            </button>
            <h1 className='modern-admin-title'>Détail membre</h1>
          </div>
          <DetailMember member={selectedMember} returnToTable={returnToTable} />
        </div>
      )}
    </>
  );
}

ShowAllMembers.displayName = 'ShowAllMembers';

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllMembers);
