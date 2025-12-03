import {
  AddUserParams,
  GetAllGroupsParams,
  GroupList,
  UserList,
  GetMembersParams
} from '../../redux/prop-types';
import { addUserInGRoup, getDatabaseResource } from '../../utils/ajax';

export const getMembers = async ({
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
}: GetMembersParams): Promise<void> => {
  setIsLoadingMember(true);

  try {
    const memberList = await getDatabaseResource<UserList>(
      `/all-users?page=${currentPage}&limit=10&classRoom=${groupMembers}&memberName=${memberNameToSearch}`
    );

    if (memberList && !('error' in memberList)) {
      const inverseMemberList = memberList.userList.reverse();
      setMembers(inverseMemberList);
      setAllDataMembers(inverseMemberList);
      setCountUsers(memberList.countUsers);

      if (totalPages === 1) {
        setTotalPages(Number(memberList.totalPages));
        setCurrentPage(Number(memberList.currentPage));
      }
    } else {
      setMembers([]);
      setCountUsers(0);
    }
  } catch (error) {
    console.error('Error fetching members:', error);
    setMembers([]);
    setCountUsers(0);
  } finally {
    setIsLoadingMember(false);
  }
};

export const getAllGroups = async ({
  currentPage,
  setGroups
}: GetAllGroupsParams): Promise<void> => {
  try {
    const allGroups = await getDatabaseResource<GroupList>(
      `/all-users-group?page=${currentPage}`
    );

    if (allGroups?.userGroupList != null) {
      setGroups([
        { id: '0', userGroupName: 'all' },
        ...allGroups.userGroupList
      ]);
    } else {
      setGroups([{ id: '0', userGroupName: 'all' }]);
    }
  } catch (error) {
    console.error('Error fetching groups:', error);
    setGroups([{ id: '0', userGroupName: 'all' }]);
  }
};

export const addUser = async ({
  event,
  groupName,
  userId,
  setCountMemberGroupUpdate,
  countMemberGroupUpdate,
  setupdating
}: AddUserParams): Promise<void> => {
  event.preventDefault();

  const data = {
    ids: userId,
    userGroup: groupName
  };

  if (userId.length === 0) {
    console.warn('No user ID provided.');
    return;
  }

  try {
    const res = await addUserInGRoup(data);

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
  } catch (error) {
    console.error('Error adding user to group:', error);
    setupdating({
      isAddedStatus: false,
      message: 'An error occurred while adding the user.'
    });

    setTimeout(() => {
      setupdating({
        isAddedStatus: false,
        message: ''
      });
    }, 5000);
  }
};
