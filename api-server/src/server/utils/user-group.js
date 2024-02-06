import { isEmpty } from 'lodash';
import loopback from 'loopback';

export async function insertUserGroup(
  userGroup,
  UserGroup = loopback.getModelByType('userGroup')
) {
  try {
    const userGroupExist = await UserGroup.find({ where: userGroup });
    if (userGroupExist && userGroupExist.length > 0) {
      throw new Error('A group already exists with this name');
    }
    const newUserGroup = await UserGroup.create(userGroup);
    return {
      userGroup: newUserGroup,
      error: null
    };
  } catch (error) {
    return {
      userGroup: null,
      error: error.message
    };
  }
}

export function updateUserGroup(
  userGroup,
  UserGroup = loopback.getModelByType('userGroup'),
  User = loopback.getModelByType('User')
) {
  return new Promise((resolve, reject) => {
    console.log(userGroup, 'les goup avant');
    return UserGroup.find(
      { where: { userGroupName: userGroup.userGroupName } },
      (error, userGroupFound) => {
        if (userGroupFound.length != 0) {
          return reject(
            new Error('Failed to update, a group already exists with this name')
          );
        }
        return UserGroup.upsertWithWhere(
          {
            id: userGroup.id
          },
          userGroup,
          (error, countUserGroupUpdated) => {
            if (error) {
              return reject(error || 'Error in Updated Document');
            }
            if (countUserGroupUpdated) {
              UserGroup.find(
                { where: { id: userGroup.id } },
                function (err, userGroupFound) {
                  if (err) return reject(err);
                  if (userGroupFound) {
                    User.updateAll(
                      { userGroup: userGroupFound.userGroupName },
                      { userGroup: userGroup.userGroupName },
                      function (err, users) {
                        if (err) return reject(err);
                        return resolve(users);
                      }
                    );
                  }
                }
              );
            }
            return resolve(countUserGroupUpdated);
          }
        );
      }
    );
  });
}

export function getAllUsersGroup(
  page,
  limit,
  filter,
  UsersGroup = loopback.getModelByType('userGroup')
) {
  return new Promise((resolve, reject) => {
    if (filter) {
      UsersGroup.find(
        {
          where: filter,
          skip: (page - 1) * limit,
          limit: limit * 1,
          order: 'id DESC'
        },
        (err, users) => {
          if (err || isEmpty(users)) {
            return reject(err || 'Noinstance group found');
          }
          resolve(console.log(users));
        }
      );
    } else {
      UsersGroup.find(
        { skip: (page - 1) * limit, limit: limit * 1, order: 'id DESC' },
        (err, users) => {
          if (err || isEmpty(users)) {
            return reject(err || 'Noinstance group found');
          }
          return resolve(users);
        }
      );
    }
  });
}

export function countUsersGroupDocuments(
  filter,
  UsersGroup = loopback.getModelByType('userGroup')
) {
  return new Promise((resolve, reject) => {
    if (filter) {
      UsersGroup.find({ where: filter }, (err, count) => {
        if (err || isEmpty(count)) {
          return reject(err || 'can not count user group collection');
        }
        return resolve(count);
      });
    } else {
      UsersGroup.find((err, count) => {
        if (err || isEmpty(count)) {
          return reject(err || 'can not count user group collection');
        }
        return resolve(count);
      });
    }
  });
}

export function deleteUserGroup(
  userGroupId,
  UserGroup = loopback.getModelByType('userGroup'),
  User = loopback.getModelByType('User')
) {
  return new Promise((resolve, reject) => {
    UserGroup.destroyById(userGroupId, (error, countUserGroupDeleted) => {
      if (error /* || isEmpty(count)*/) {
        return reject(error || 'Error in deleting Documents');
      }
      if (countUserGroupDeleted) {
        UserGroup.find(
          { where: { id: userGroupId } },
          function (err, userGroupFound) {
            if (err) return reject(err);
            if (userGroupFound) {
              User.updateAll(
                { userGroup: userGroupFound.userGroupName },
                { userGroup: '' },
                function (err, users) {
                  if (err) return reject(err);
                  return resolve(users);
                }
              );
            }
          }
        );
      }
      return resolve(countUserGroupDeleted);
    });
  });
}

async function putUserInGroupFunction(ids, userGroup, UserGroup, User) {
  const users = await User.find({ where: { id: { inq: ids } } });

  if (users.length === 0) {
    return Promise.reject('No users found');
  }

  const usersNotInGroup = users.filter(
    user => !user.groups.includes(userGroup)
  );

  await Promise.all(
    usersNotInGroup.map(async user => {
      await User.updateAll({ id: user.id }, { $push: { groups: userGroup } });
    })
  );

  const countUser = await User.find({ where: { groups: userGroup } });
  console.log('user', countUser);

  await UserGroup.updateAll(
    { userGroupName: userGroup },
    { memberCount: countUser.length }
  );

  return users;
}

export async function putUserInGroup(
  ids,
  userGroup,
  User = loopback.getModelByType('User'),
  UserGroup = loopback.getModelByType('userGroup')
) {
  try {
    const usersAddedToGroup = await putUserInGroupFunction(
      ids,
      userGroup,
      UserGroup,
      User
    );
    if (usersAddedToGroup) return usersAddedToGroup;
  } catch (err) {
    console.log('erro', err);
  }
}

async function removeUserFromGroupFunc(userGroup, ids, User, UserGroup) {
  const users = await User.find({ where: { id: { inq: ids } } });

  if (users.length === 0) {
    return Promise.reject('No users found');
  }

  const usersInGroup = users.filter(user => user.groups.includes(userGroup));

  await Promise.all(
    usersInGroup.map(async user => {
      await User.updateAll({ id: user.id }, { $pull: { groups: userGroup } });
    })
  );

  const countUser = await User.find({ where: { groups: userGroup } });
  console.log('user', countUser);

  await UserGroup.updateAll(
    { userGroupName: userGroup },
    { memberCount: countUser.length }
  );

  return users;
}

export async function deleteUserInGroup(
  ids,
  userGroup,
  User = loopback.getModelByType('User'),
  UserGroup = loopback.getModelByType('userGroup')
) {
  try {
    const removeUserINGroup = await removeUserFromGroupFunc(
      userGroup,
      ids,
      User,
      UserGroup
    );
    if (removeUserINGroup) return removeUserINGroup;
  } catch (err) {
    return err;
  }
}

export function getUserByGroup(filter, User = loopback.getModelByType('User')) {
  return new Promise((resolve, reject) =>
    User.find({ where: { groups: { $in: filter } } }, (err, users) => {
      if (err || isEmpty(users)) {
        return reject(err || 'can not find user in this group');
      }
      return resolve(users);
    })
  );
}
