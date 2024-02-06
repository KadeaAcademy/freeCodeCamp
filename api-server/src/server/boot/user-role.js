import debug from 'debug';
import { ifNoUserRedirectHome } from '../utils/middleware';
import {
  insertUserRole,
  updateUserRole,
  getAllUsersRole,
  countUsersRoleDocuments,
  deleteUserRole,
  putUserInRole,
  deleteUserInRole
} from '../utils/user-role';

const log = debug('fcc:boot:user-group');

const sendNonUserToHome = ifNoUserRedirectHome();

function bootUserGroup(app) {
  const api = app.loopback.Router();

  api.post('/user-role/create', sendNonUserToHome, createOneUserRole);
  api.put('/user-role/update', sendNonUserToHome, updateOneUserRole);
  api.get('/all-users-roles', sendNonUserToHome, getUserRoleList);
  api.delete('/user-role/delete', sendNonUserToHome, removeUserRole);

  api.put('/user-role/add-user', sendNonUserToHome, addUserInRole);
  api.put('/user-role/remove-user', sendNonUserToHome, removeUserInRole);

  app.use(api);
}

async function createOneUserRole(req, res) {
  const { userRoleName } = req.body;
  log(userRoleName);

  try {
    if (userRoleName.length == 0) {
      throw new Error('This field should not be empty.');
    }
    let newUserRole = null;
    newUserRole = await insertUserRole({ userRoleName: userRoleName });
    if (!newUserRole.userRole) {
      throw new Error(newUserRole.error);
    }
    console.log('new', newUserRole);

    return res.json(newUserRole);
  } catch (error) {
    return res.json({
      newUserRole: null,
      error: error.message
    });
  }
}

async function updateOneUserRole(req, res) {
  // object req.body is { id: string, userGroupName: string }
  const { id } = req.body;
  log(req.body);
  try {
    if (!id || id.length == 0) {
      throw new Error('Please select a group');
    }
    const userGroupUpdated = await updateUserRole(req.body);
    if (userGroupUpdated) {
      return res.json({
        isUpdated: true,
        error: null
      });
    }
    throw new Error('Error in updating Group');
  } catch (error) {
    return res.json({
      isUpdated: false,
      error: error.message
    });
  }
}

async function getUserRoleList(req, res) {
  // destructure page and limit and set default values

  const { page, limit, classRoom } = req.query;

  try {
    let userRoleList = [];
    let usersRoleCount = [];
    const filter = {};
    if (classRoom) {
      filter.userGroupName = new RegExp(`${classRoom}`, 'i');
      userRoleList = await getAllUsersRole(page, limit, filter);
      usersRoleCount = await countUsersRoleDocuments(filter);
    } else {
      userRoleList = await getAllUsersRole(page, limit);
      usersRoleCount = await countUsersRoleDocuments();
    }

    return res.json({
      userRoleList: userRoleList,
      totalPages: Math.ceil(usersRoleCount.length / limit),
      currentPage: page,
      countUsersRole: usersRoleCount.length
    });
  } catch (error) {
    return res.json({
      userRoleList: null,
      totalPages: null,
      currentPage: null,
      countUsersRole: null
    });
  }
}

async function removeUserRole(req, res) {
  const { id } = req.body;
  log(req.body);

  try {
    if (!id || id.length == 0) {
      throw new Error('Please select a group');
    }
    const userGroupDeleted = await deleteUserRole(id);
    if (
      userGroupDeleted &&
      // eslint-disable-next-line no-prototype-builtins
      userGroupDeleted.hasOwnProperty('count') &&
      userGroupDeleted.count == 1
    ) {
      return res.json({
        isDeleted: true,
        message: null
      });
    }
    throw new Error('Error in deleting Group');
  } catch (error) {
    return res.json({
      isDeleted: false,
      message: error.message
    });
  }
}

async function addUserInRole(req, res) {
  const id = req.body.ids;
  const role = req.body.userRole;
  try {
    if (!role) {
      throw new Error('Please select group');
    }
    if (id.length == 0) {
      throw new Error('Please select user');
    }

    const userRoleAdded = await putUserInRole(id, role);
    if (userRoleAdded) {
      return res.json({
        isAdded: true,
        message: `User is now a ${role}`
      });
    }
  } catch (error) {
    return res.json({
      isAdded: false,
      message: 'User is not added in group'
    });
  }
}

async function removeUserInRole(req, res) {
  const ids = req.body.ids;
  const group = req.body.userGroup;
  try {
    if (!group) {
      throw new Error('Please select group');
    }
    if (!ids || ids.length == 0) {
      throw new Error('Please select user');
    }
    const userGroupRemoved = await deleteUserInRole(ids, group);
    if (userGroupRemoved) {
      res.json({
        isRemoved: true,
        message: 'User is removed in group'
      });
    }
  } catch (error) {
    return res.json({
      isRemoved: false,
      message: 'User is not removed in group'
    });
  }
}

export default bootUserGroup;
