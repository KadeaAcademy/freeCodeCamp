import { isEmpty } from 'lodash';
import loopback from 'loopback';

export async function insertUserRole(
  userRole,
  UserRole = loopback.getModelByType('userRole')
) {
  try {
    const userRoleExist = await UserRole.find({ where: userRole });
    if (userRoleExist && userRoleExist.length > 0) {
      throw new Error('A Role already exists with this name');
    }
    const newUserRole = await UserRole.create(userRole);
    return {
      userRole: newUserRole,
      error: null
    };
  } catch (error) {
    return {
      userRole: null,
      error: error.message
    };
  }
}

export function updateUserRole(
  userRole,
  UserRole = loopback.getModelByType('userRole'),
  User = loopback.getModelByType('User')
) {
  return new Promise((resolve, reject) => {
    return UserRole.find(
      { where: { userRoleName: userRole.userRoleName } },
      (error, userRoleFound) => {
        if (userRoleFound.length != 0) {
          return reject(
            new Error('Failed to update, a Role already exists with this name')
          );
        }
        return UserRole.upsertWithWhere(
          {
            id: userRole.id
          },
          userRole,
          (error, countUserRoleUpdated) => {
            if (error) {
              return reject(error || 'Error in Updated Document');
            }
            if (countUserRoleUpdated) {
              UserRole.find(
                { where: { id: userRole.id } },
                function (err, userRoleFound) {
                  if (err) return reject(err);
                  if (userRoleFound) {
                    User.updateAll(
                      { role: userRoleFound.userRoleName },
                      { role: userRole.userRoleName },
                      function (err, users) {
                        if (err) return reject(err);
                        return resolve(users);
                      }
                    );
                  }
                }
              );
            }
            return resolve(countUserRoleUpdated);
          }
        );
      }
    );
  });
}

export function countUsersRoleDocuments(
  filter,
  UsersRole = loopback.getModelByType('userRole')
) {
  return new Promise((resolve, reject) => {
    if (filter) {
      UsersRole.find({ where: filter }, (err, count) => {
        if (err || isEmpty(count)) {
          return reject(err || 'can not count user group collection');
        }
        return resolve(count);
      });
    } else {
      UsersRole.find((err, count) => {
        if (err || isEmpty(count)) {
          return reject(err || 'can not count user group collection');
        }
        return resolve(count);
      });
    }
  });
}

export function deleteUserRole(
  userRoleId,
  UserRole = loopback.getModelByType('userRole'),
  User = loopback.getModelByType('User')
) {
  return new Promise((resolve, reject) => {
    UserRole.destroyById(userRoleId, (error, countUserRoleDeleted) => {
      if (error /* || isEmpty(count)*/) {
        return reject(error || 'Error in deleting Documents');
      }
      if (countUserRoleDeleted) {
        UserRole.find(
          { where: { id: userRoleId } },
          function (err, userRoleFound) {
            if (err) return reject(err);
            if (userRoleFound) {
              User.updateAll(
                { role: userRoleFound.userRoleName },
                { role: '' },
                function (err, users) {
                  if (err) return reject(err);
                  return resolve(users);
                }
              );
            }
          }
        );
      }
      return resolve(countUserRoleDeleted);
    });
  });
}

async function putUserInRoleFunction(ids, userRole, UserRole, User) {
  const users = await User.find({ where: { id: { inq: ids } } });

  if (users.length === 0) {
    return Promise.reject('No users found');
  }

  const usersNotInRole = users.filter(user => !user.role.includes(userRole));

  await Promise.all(
    usersNotInRole.map(async user => {
      await User.updateAll({ id: user.id }, { role: userRole });
    })
  );

  const countUser = await User.find({ where: { role: userRole } });
  console.log('user', countUser);

  await UserRole.updateAll(
    { userRoleName: userRole },
    { memberCount: countUser.length }
  );

  return users;
}

export async function putUserInRole(
  ids,
  userRole,
  User = loopback.getModelByType('User'),
  UserRole = loopback.getModelByType('userRole')
) {
  try {
    const usersAddedToRole = await putUserInRoleFunction(
      ids,
      userRole,
      UserRole,
      User
    );
    if (usersAddedToRole) return usersAddedToRole;
  } catch (err) {
    console.log('erro', err);
  }
}

async function removeUserFromRoleFunc(userGroup, ids, User, UserGroup) {
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

export async function deleteUserInRole(
  ids,
  userGroup,
  User = loopback.getModelByType('User'),
  UserGroup = loopback.getModelByType('userGroup')
) {
  try {
    const removeUserINGroup = await removeUserFromRoleFunc(
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

export function getAllUsersRole(
  page,
  limit,
  filter,
  UsersRole = loopback.getModelByType('userRole')
) {
  return new Promise((resolve, reject) => {
    if (filter) {
      UsersRole.find(
        {
          where: filter,
          skip: (page - 1) * limit,
          limit: limit * 1,
          order: 'id DESC'
        },
        (err, userRoles) => {
          if (err || isEmpty(userRoles)) {
            return reject(err || 'Noinstance group found');
          }
          resolve(userRoles);
        }
      );
    } else {
      UsersRole.find(
        { skip: (page - 1) * limit, limit: limit * 1, order: 'id DESC' },
        (err, userRoles) => {
          if (err || isEmpty(userRoles)) {
            return reject(err || 'Noinstance group found');
          }
          return resolve(userRoles);
        }
      );
    }
  });
}

export function countUsersGroupDocuments(
  filter,
  UsersRole = loopback.getModelByType('userRole')
) {
  return new Promise((resolve, reject) => {
    if (filter) {
      UsersRole.find({ where: filter }, (err, count) => {
        if (err || isEmpty(count)) {
          return reject(err || 'can not count user group collection');
        }
        return resolve(count);
      });
    } else {
      UsersRole.find((err, count) => {
        if (err || isEmpty(count)) {
          return reject(err || 'can not count user group collection');
        }
        return resolve(count);
      });
    }
  });
}
