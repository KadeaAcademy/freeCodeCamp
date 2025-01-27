import {
  Row,
  Col

  // InputGroup
} from '@freecodecamp/react-bootstrap';
import React, { useState, useEffect } from 'react';
import Helmet from 'react-helmet';
// import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import validator from 'validator';
import { addUserInGRoup, remoevUserInGRoup } from '../../utils/ajax';
import envData from '../../../../config/env.json';
import { createFlashMessage } from '../../components/Flash/redux';
import { Loader, Spacer } from '../../components/helpers';
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
const { apiLocation, homeLocation } = envData;

// TODO: update types for actions
interface ShowAllMembersProps {
  createFlashMessage: typeof createFlashMessage;
  isSignedIn: boolean;
  navigate: (location: string) => void;
  showLoading: boolean;
  user: User;
  path?: string;
}

const mapStateToProps = createSelector(
  signInLoadingSelector,
  userSelector,
  isSignedInSelector,
  (showLoading: boolean, user: User, isSignedIn) => ({
    showLoading,
    user,
    isSignedIn
  })
);

const mapDispatchToProps = {
  createFlashMessage,
  navigate
};

export function ShowAllMembers(props: ShowAllMembersProps): JSX.Element {
  const { isSignedIn, navigate, showLoading, user } = props;

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
    navigate(`${apiLocation}/signin`);
    return <Loader fullScreen={true} />;
  }

  if (!validator.equals(user.role, 'Super-admin')) {
    if (!validator.equals(user.role, 'Admin')) {
      navigate(`${homeLocation}`);
      return <Loader fullScreen={true} />;
    }
  }

  return (
    <>
      <Helmet title={`Tableau de bord - Membres | Kadea Online`} />

      <div className=''>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className=''>
              <h1
                className='big-subheading'
                style={{ overflowWrap: 'break-word' }}
              >
                {!selectedMember ? 'Membres' : 'Détail membre'}
              </h1>
            </div>
          </Col>
        </Row>
        <Spacer size={1} />
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
          <DetailMember member={selectedMember} returnToTable={returnToTable} />
        )}
        <Spacer size={1} />
      </div>
    </>
  );
}

ShowAllMembers.displayName = 'ShowAllMembers';

export default connect(mapStateToProps, mapDispatchToProps)(ShowAllMembers);
