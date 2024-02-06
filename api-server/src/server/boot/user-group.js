import debug from 'debug';
import { ifNoUserRedirectHome } from '../utils/middleware';
import {
  insertUserGroup,
  updateUserGroup,
  getAllUsersGroup,
  countUsersGroupDocuments,
  deleteUserGroup,
  putUserInGroup,
  deleteUserInGroup
} from '../utils/user-group';

const log = debug('fcc:boot:user-group');

const sendNonUserToHome = ifNoUserRedirectHome();

function bootUserGroup(app) {
  const api = app.loopback.Router();

  api.post('/user-group/create', sendNonUserToHome, createOneUserGroup);
  api.put('/user-group/update', sendNonUserToHome, updateOneUserGroup);
  api.get('/all-users-group', sendNonUserToHome, getUserGroupList);
  api.delete('/user-group/delete', sendNonUserToHome, removeUserGroup);

  api.put('/user-group/add-user', sendNonUserToHome, addUserIngroup);
  api.put('/user-group/remove-user', sendNonUserToHome, removeUserINGroup);

  app.use(api);
}

async function createOneUserGroup(req, res) {
  const { userGroupName } = req.body;
  log(userGroupName);

  try {
    if (userGroupName.length == 0) {
      throw new Error('This field should not be empty.');
    }
    let newUserGroup = null;
    newUserGroup = await insertUserGroup({ userGroupName: userGroupName });
    if (!newUserGroup.userGroup) {
      throw new Error(newUserGroup.error);
    }

    return res.json(newUserGroup);
  } catch (error) {
    return res.json({
      newUserGroup: null,
      error: error.message
    });
  }
}

async function updateOneUserGroup(req, res) {
  // object req.body is { id: string, userGroupName: string }
  const { id } = req.body;
  log(req.body);
  try {
    if (!id || id.length == 0) {
      throw new Error('Please select a group');
    }
    const userGroupUpdated = await updateUserGroup(req.body);
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

async function getUserGroupList(req, res) {
  // destructure page and limit and set default values

  const { page, limit, classRoom } = req.query;

  try {
    let userGroupList = [];
    let usersGroupCount = [];
    const filter = {};
    if (classRoom) {
      filter.userGroupName = new RegExp(`${classRoom}`, 'i');
      userGroupList = await getAllUsersGroup(page, limit, filter);
      usersGroupCount = await countUsersGroupDocuments(filter);
    } else {
      userGroupList = await getAllUsersGroup(page, limit);
      usersGroupCount = await countUsersGroupDocuments();
    }

    return res.json({
      userGroupList: userGroupList,
      totalPages: Math.ceil(usersGroupCount.length / limit),
      currentPage: page,
      countUsersGroup: usersGroupCount.length
    });
  } catch (error) {
    return res.json({
      userGroupList: null,
      totalPages: null,
      currentPage: null,
      countUsersGroup: null
    });
  }
}

async function removeUserGroup(req, res) {
  const { id } = req.body;
  log(req.body);

  try {
    if (!id || id.length == 0) {
      throw new Error('Please select a group');
    }
    const userGroupDeleted = await deleteUserGroup(id);
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

async function addUserIngroup(req, res) {
  const id = req.body.ids;
  const group = req.body.userGroup;
  try {
    if (!group) {
      throw new Error('Please select group');
    }
    if (id.length == 0) {
      throw new Error('Please select user');
    }

    const userGroupAdded = await putUserInGroup(id, group);
    if (userGroupAdded) {
      return res.json({
        isAdded: true,
        message: `User is added in group ${group}`
      });
    }
  } catch (error) {
    return res.json({
      isAdded: false,
      message: 'User is not added in group'
    });
  }
}

async function removeUserINGroup(req, res) {
  const ids = req.body.ids;
  const group = req.body.userGroup;
  try {
    if (!group) {
      throw new Error('Please select group');
    }
    if (!ids || ids.length == 0) {
      throw new Error('Please select user');
    }
    const userGroupRemoved = await deleteUserInGroup(ids, group);
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
