import debug from 'debug';
import { check } from 'express-validator';
// import isURL from 'validator/lib/isURL';

import { isValidUsername } from '../../../../utils/validate';
import { alertTypes } from '../../common/utils/flash.js';
import { deprecatedEndpoint } from '../utils/deprecatedEndpoint';
import { ifNoUser401, createValidatorErrorHandler } from '../utils/middleware';

const log = debug('fcc:boot:settings');

export default function settingsController(app) {
  const api = app.loopback.Router();

  const updateMyUsername = createUpdateMyUsername(app);

  api.put('/update-privacy-terms', ifNoUser401, updatePrivacyTerms);

  api.post('/refetch-user-completed-challenges', deprecatedEndpoint);
  api.post(
    '/update-my-current-challenge',
    ifNoUser401,
    updateMyCurrentChallengeValidators,
    createValidatorErrorHandler(alertTypes.danger),
    updateMyCurrentChallenge
  );
  api.post('/update-my-portfolio', ifNoUser401, updateMyPortfolio);
  api.post('/update-my-theme', deprecatedEndpoint);
  api.put('/update-my-about', ifNoUser401, updateMyAbout);
  api.put('/update-my-education', ifNoUser401, updateMyEducation);
  api.put(
    '/update-my-currents-super-block',
    ifNoUser401,
    updateMyCurrentsSuperBlock
  );
  api.put('/update-my-work-experience', ifNoUser401, updateMyWorkExperience);
  api.put(
    '/update-my-email',
    ifNoUser401,
    updateMyEmailValidators,
    createValidatorErrorHandler(alertTypes.danger),
    updateMyEmail
  );
  api.put('/update-my-profileui', ifNoUser401, updateMyProfileUI);
  api.put('/update-my-username', ifNoUser401, updateMyUsername);
  api.put('/update-user-flag', ifNoUser401, updateUserFlag);

  app.use(api);
}

const standardErrorMessage = {
  type: 'danger',
  message: 'flash.wrong-updating'
};

const standardSuccessMessage = {
  type: 'success',
  message: 'flash.updated-preferences'
};

const createStandardHandler = (req, res, next) => err => {
  if (err) {
    res.status(500).json(standardErrorMessage);
    return next(err);
  }
  return res.status(200).json(standardSuccessMessage);
};

const standardProgressErrorMessage = {
  type: 'danger',
  message: 'Un problème est survenu lors de la mise à jour de ta progression.'
};

const standardProgressSuccessMessage = {
  type: 'success',
  message: 'Nous avons mis à jour ta progression.'
};

const createStandardProgressHandler = (req, res, next) => err => {
  if (err) {
    res.status(500).json(standardProgressErrorMessage);
    return next(err);
  }
  return res.status(200).json(standardProgressSuccessMessage);
};

const updateMyEmailValidators = [
  check('email').isEmail().withMessage('Email format is invalid.')
];

function updateMyEmail(req, res, next) {
  const {
    user,
    body: { email }
  } = req;
  return user
    .requestUpdateEmail(email)
    .subscribe(message => res.json({ message }), next);
}

const updateMyCurrentChallengeValidators = [
  check('currentChallengeId')
    .isMongoId()
    .withMessage('currentChallengeId is not a valid challenge ID')
];

function updateMyCurrentChallenge(req, res, next) {
  const {
    user,
    body: { currentChallengeId }
  } = req;
  return user.updateAttribute(
    'currentChallengeId',
    currentChallengeId,
    (err, updatedUser) => {
      if (err) {
        return next(err);
      }
      const { currentChallengeId } = updatedUser;
      return res.status(200).json(currentChallengeId);
    }
  );
}

function updateMyPortfolio(req, res, next) {
  const {
    user,
    body: { portfolio }
  } = req;
  // if we only have one key, it should be the id
  // user cannot send only one key to this route
  // other than to remove a portfolio item
  const requestDelete = Object.keys(portfolio).length === 1;
  return user
    .updateMyPortfolio(portfolio, requestDelete)
    .subscribe(message => res.json({ message }), next);
}

function updateMyProfileUI(req, res, next) {
  const {
    user,
    body: { profileUI }
  } = req;
  user.updateAttribute(
    'profileUI',
    profileUI,
    createStandardHandler(req, res, next)
  );
}

function updateMyAbout(req, res, next) {
  const {
    user,
    body: { name, location, gender, phone, whatsapp, codeTime, about, picture }
  } = req;
  log(name, location, gender, codeTime, about, phone, whatsapp, picture);
  // prevent dataurls from being stored
  // const update = isURL(picture, { require_protocol: true })
  //   ? { name, location, gender, codeTime, about, picture }
  //   : { name, location, gender, codeTime, about };
  const update = { name, location, gender, phone, whatsapp, codeTime, about };
  return user.updateAttributes(update, createStandardHandler(req, res, next));
}

function updateMyEducation(req, res, next) {
  const {
    user,
    body: { fieldOfStudy, levelOfStudy }
  } = req;
  log(fieldOfStudy, levelOfStudy);
  // prevent dataurls from being stored
  const update = { fieldOfStudy, levelOfStudy };
  return user.updateAttributes(update, createStandardHandler(req, res, next));
}

function updateMyCurrentsSuperBlock(req, res, next) {
  const {
    user,
    body: { currentsSuperBlock }
  } = req;
  log(currentsSuperBlock);
  // prevent dataurls from being stored
  const update = { currentsSuperBlock };
  return user.updateAttributes(
    update,
    createStandardProgressHandler(req, res, next)
  );
}

function updateMyWorkExperience(req, res, next) {
  const {
    user,
    body: { employedWhere, sinceWhen, position }
  } = req;
  log(employedWhere, sinceWhen, position);
  // prevent dataurls from being stored
  const update = { employedWhere, sinceWhen, position };
  return user.updateAttributes(update, createStandardHandler(req, res, next));
}

function createUpdateMyUsername(app) {
  const { User } = app.models;
  return async function updateMyUsername(req, res, next) {
    const { user, body } = req;
    const usernameDisplay = body.username.trim();
    const username = usernameDisplay.toLowerCase();
    if (
      username === user.username &&
      user.usernameDisplay &&
      usernameDisplay === user.usernameDisplay
    ) {
      return res.json({
        type: 'info',
        message: 'flash.username-used'
      });
    }
    const validation = isValidUsername(username);

    if (!validation.valid) {
      return res.json({
        type: 'info',
        message: `Username ${username} ${validation.error}`
      });
    }

    const exists =
      username === user.username ? false : await User.doesExist(username);

    if (exists) {
      return res.json({
        type: 'info',
        message: 'flash.username-taken'
      });
    }

    return user.updateAttributes({ username, usernameDisplay }, err => {
      if (err) {
        res.status(500).json(standardErrorMessage);
        return next(err);
      }

      return res.status(200).json({
        type: 'success',
        message: `flash.username-updated`,
        variables: { username: usernameDisplay }
      });
    });
  };
}

const updatePrivacyTerms = (req, res, next) => {
  const {
    user,
    body: { quincyEmails }
  } = req;
  const update = {
    acceptedPrivacyTerms: true,
    sendQuincyEmail: !!quincyEmails
  };
  return user.updateAttributes(update, err => {
    if (err) {
      res.status(500).json(standardErrorMessage);
      return next(err);
    }
    return res.status(200).json(standardSuccessMessage);
  });
};

function updateUserFlag(req, res, next) {
  const { user, body: update } = req;
  return user.updateAttributes(update, createStandardHandler(req, res, next));
}
