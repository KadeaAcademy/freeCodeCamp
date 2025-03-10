import dedent from 'dedent';
import { check } from 'express-validator';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { isEmail } from 'validator';

import { jwtSecret } from '../../../../config/secrets';

import { decodeEmail } from '../../common/utils';
import {
  createPassportCallbackAuthenticator,
  devSaveResponseAuthCookies,
  devLoginRedirect
} from '../component-passport';
import { wrapHandledError } from '../utils/create-handled-error.js';
import { removeCookies } from '../utils/getSetAccessToken';
import { ifUserRedirectTo, ifNoUserRedirectHome } from '../utils/middleware';
import { getRedirectParams } from '../utils/redirection';

const passwordlessGetValidators = [
  check('email')
    .isBase64()
    .withMessage('Email should be a base64 encoded string.'),
  check('token')
    .exists()
    .withMessage('Token should exist.')
    // based on strongloop/loopback/common/models/access-token.js#L15
    .isLength({ min: 64, max: 64 })
    .withMessage('Token is not the right length.')
];

module.exports = function enableAuthentication(app) {
  // enable loopback access control authentication. see:
  // loopback.io/doc/en/lb2/Authentication-authorization-and-permissions.html
  app.enableAuth();
  const ifUserRedirect = ifUserRedirectTo();
  const ifNoUserRedirect = ifNoUserRedirectHome();
  const devSaveAuthCookies = devSaveResponseAuthCookies();
  const devLoginSuccessRedirect = devLoginRedirect();
  const api = app.loopback.Router();

  // Use a local mock strategy for signing in if we are in dev mode.
  // Otherwise we use auth0 login. We use a string for 'true' because values
  // set in the env file will always be strings and never boolean.
  if (process.env.LOCAL_MOCK_AUTH === 'true') {
    api.get(
      '/signin',
      passport.authenticate('devlogin'),
      devSaveAuthCookies,
      devLoginSuccessRedirect
    );
  } else {
    api.get('/signin', ifUserRedirect, (req, res, next) => {
      const { returnTo, origin, pathPrefix } = getRedirectParams(req);
      console.log('origin : ', origin);
      console.log('pathPrefix : ', pathPrefix);
      console.log('retun : ', returnTo);
      const state = jwt.sign({ returnTo, origin, pathPrefix }, jwtSecret);

      return passport.authenticate('auth0-login', { state })(req, res, next);
    });

    api.get(
      '/auth/auth0/callback',
      createPassportCallbackAuthenticator('auth0-login', { provider: 'auth0' })
    );
  }

  api.get('/signout', (req, res) => {
    const { origin, returnTo } = getRedirectParams(req);
    req.logout();
    req.session.destroy(err => {
      if (err) {
        throw wrapHandledError(
          new Error(`nous n'avons pas pu détruire la session`),
          {
            type: 'info',
            message: `Nous n'avons pas pu vous déconnecter, veuillez réessayer dans un moment.`,
            redirectTo: origin
          }
        );
      }
      removeCookies(req, res);

      /**
       * logout user session from Auth0
       * doc url: https://auth0.com/blog/create-a-simple-and-secure-node-express-app/
       */
      // make url for login out to Auth0
      const logoutURL = new URL(
        `https://${process.env.AUTH0_DOMAIN}/v2/logout`
      );

      /**
       * make params for auth0 logout url
       * URLSearchParams nodjs object tuto :
       * https://www.linkedin.com/pulse/how-migrate-from-querystring-urlsearchparams-nodejs-vladim%C3%ADr-gorej/?trk=articles_directory
       */
      const searchString = new URLSearchParams({
        // federated: 'federated',
        client_id: process.env.AUTH0_CLIENT_ID,
        returnTo: returnTo
      }).toString();
      // add params to logoutURL
      logoutURL.search = searchString;
      // make Api call for login out user to Auth0
      res.redirect(logoutURL);
      // End logout user from Auth0
      // res.redirect(returnTo);
    });
  });

  api.get(
    '/confirm-email',
    ifNoUserRedirect,
    passwordlessGetValidators,
    createGetPasswordlessAuth(app)
  );

  app.use(api);
};

const defaultErrorMsg = dedent`
    Oops, something is not right,
    please request a fresh link to sign in / sign up.
  `;

function createGetPasswordlessAuth(app) {
  const {
    models: { AuthToken, User }
  } = app;
  return function getPasswordlessAuth(req, res, next) {
    const {
      query: { email: encodedEmail, token: authTokenId, emailChange } = {}
    } = req;
    const { origin } = getRedirectParams(req);
    const email = decodeEmail(encodedEmail);
    if (!isEmail(email)) {
      return next(
        wrapHandledError(new TypeError('decoded email is invalid'), {
          type: 'info',
          message: 'The email encoded in the link is incorrectly formatted',
          redirectTo: `${origin}/signin`
        })
      );
    }
    // first find
    return (
      AuthToken.findOne$({ where: { id: authTokenId } })
        .flatMap(authToken => {
          if (!authToken) {
            throw wrapHandledError(
              new Error(`no token found for id: ${authTokenId}`),
              {
                type: 'info',
                message: defaultErrorMsg,
                redirectTo: `${origin}/signin`
              }
            );
          }
          // find user then validate and destroy email validation token
          // finally retun user instance
          return User.findOne$({ where: { id: authToken.userId } }).flatMap(
            user => {
              if (!user) {
                throw wrapHandledError(
                  new Error(`no user found for token: ${authTokenId}`),
                  {
                    type: 'info',
                    message: defaultErrorMsg,
                    redirectTo: `${origin}/signin`
                  }
                );
              }
              if (user.email !== email) {
                if (!emailChange || (emailChange && user.newEmail !== email)) {
                  throw wrapHandledError(
                    new Error('user email does not match'),
                    {
                      type: 'info',
                      message: defaultErrorMsg,
                      redirectTo: `${origin}/signin`
                    }
                  );
                }
              }
              return authToken
                .validate$()
                .map(isValid => {
                  if (!isValid) {
                    throw wrapHandledError(new Error('token is invalid'), {
                      type: 'info',
                      message: `
                        Looks like the link you clicked has expired,
                        please request a fresh link, to sign in.
                      `,
                      redirectTo: `${origin}/signin`
                    });
                  }
                  return authToken.destroy$();
                })
                .map(() => user);
            }
          );
        })
        // at this point token has been validated and destroyed
        // update user and log them in
        .map(user => user.loginByRequest(req, res))
        .do(() => {
          if (emailChange) {
            req.flash('success', 'flash.email-valid');
          } else {
            req.flash('success', 'flash.signin-success');
          }
          return res.redirectWithFlash(`${origin}/learn`);
        })
        .subscribe(() => {}, next)
    );
  };
}
