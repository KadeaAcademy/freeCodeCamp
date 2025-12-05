import debug from 'debug';
import validator from 'validator';
import loopback from 'loopback';
import { ifNoUserRedirectHome } from '../utils/middleware';
import { insertUserGroup } from '../utils/user-group';

const log = debug('fcc:boot:user-bulk-import');
const sendNonUserToHome = ifNoUserRedirectHome();

function buildUsername(email) {
  const [local] = email.split('@');
  return (local || 'user').replace(/[^a-zA-Z0-9._-]/g, '') || 'user';
}

async function ensureUniqueUsername(base, User) {
  let candidate = base;
  let attempt = 0;
  // cap attempts to avoid long loops
  while (attempt < 50) {
    // eslint-disable-next-line no-await-in-loop
    const existing = await User.findOne({ where: { username: candidate } });
    if (!existing) return candidate;
    attempt += 1;
    candidate = `${base}_${attempt}`;
  }
  // fallback
  return `${base}_${Date.now()}`;
}

async function ensureGroupExists(groupName, UserGroup) {
  const existing = await UserGroup.findOne({
    where: { userGroupName: groupName }
  });
  if (existing) return existing;
  const created = await insertUserGroup(
    { userGroupName: groupName },
    UserGroup
  );
  if (created && created.userGroup) return created.userGroup;
  throw new Error(`Failed to create group ${groupName}`);
}

async function upsertUser(userInput, defaultRole, User) {
  const email = (userInput.email || '').toLowerCase().trim();
  if (!validator.isEmail(email)) {
    throw new Error('Invalid email');
  }

  const existing = await User.findOne({ where: { email } });
  const payload = {
    email,
    name:
      userInput.name ||
      `${userInput.firstName || ''} ${userInput.lastName || ''}`.trim(),
    gender: userInput.gender || '',
    phone: userInput.phone || '',
    whatsapp: userInput.whatsapp || '',
    role: userInput.role || defaultRole || 'user'
  };

  if (existing) {
    await User.updateAll({ id: existing.id }, payload);
    return existing.id;
  }

  const usernameBase = buildUsername(email);
  const username = await ensureUniqueUsername(usernameBase, User);
  const now = new Date();
  const createPayload = {
    ...payload,
    username,
    usernameDisplay: payload.name || username,
    acceptedPrivacyTerms: true,
    emailVerified: true,
    createAt: now,
    progressTimestamps: [],
    groups: []
  };

  const created = await User.create(createPayload);
  return created.id;
}

async function bulkImportUsers(req, res) {
  const { users = [], defaultRole = 'user' } = req.body || {};
  if (!Array.isArray(users) || users.length === 0) {
    return res
      .status(400)
      .json({ success: false, message: 'users array required' });
  }

  const User = loopback.getModelByType('User');
  const UserGroup = loopback.getModelByType('userGroup');

  const summary = { createdOrUpdated: 0, grouped: 0, errors: [] };
  const groupCache = new Map();

  for (let i = 0; i < users.length; i += 1) {
    const u = users[i];
    try {
      const userId = await upsertUser(u, defaultRole, User);
      summary.createdOrUpdated += 1;

      const cohort = (u.cohort || '').trim();
      if (cohort) {
        if (!groupCache.has(cohort)) {
          try {
            const group = await ensureGroupExists(cohort, UserGroup);
            groupCache.set(cohort, group);
          } catch (err) {
            log('group creation failed', cohort, err?.message);
          }
        }
        try {
          await User.updateAll(
            { id: userId, groups: { nin: [cohort] } },
            { $push: { groups: cohort } }
          );
          summary.grouped += 1;
        } catch (err) {
          log('add to group failed', cohort, err?.message);
        }
      }
    } catch (err) {
      summary.errors.push({
        email: u?.email,
        message: err?.message || 'unknown error'
      });
    }
  }

  return res.json({ success: true, ...summary });
}

function bootUserBulkImport(app) {
  const api = app.loopback.Router();
  api.post('/user/bulk-import', sendNonUserToHome, bulkImportUsers);
  app.use(api);
}

export default bootUserBulkImport;
