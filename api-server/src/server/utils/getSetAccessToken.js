import { isBefore } from 'date-fns';
import jwt from 'jsonwebtoken';

import { jwtSecret as _jwtSecret } from '../../../../config/secrets';

export const authHeaderNS = 'X-fcc-access-token';
export const jwtCookieNS = 'jwt_access_token';

export function createCookieConfig(req) {
  return {
    signed: !!req.signedCookies,
    domain: process.env.COOKIE_DOMAIN || 'localhost'
  };
}

export function setAccessTokenToResponse(
  { accessToken },
  req,
  res,
  jwtSecret = _jwtSecret
) {
  const cookieConfig = {
    ...createCookieConfig(req),
    maxAge: accessToken.ttl || 77760000000
  };
  const jwtAccess = jwt.sign({ accessToken }, jwtSecret);
  res.cookie(jwtCookieNS, jwtAccess, cookieConfig);
  return;
}

export function getAccessTokenFromRequest(req, jwtSecret = _jwtSecret) {
  let maybeToken =
    (req.headers && req.headers[authHeaderNS]) ||
    (req.signedCookies && req.signedCookies[jwtCookieNS]) ||
    (req.cookie && req.cookie[jwtCookieNS]) ||
    (req.headers && req.headers.authorization) ||
    null;

  if (!maybeToken) {
    return {
      accessToken: null,
      error: errorTypes.noTokenFound
    };
  }
  // Si le token vient des headers d'autorisation, il est déjà nettoyé
  if (typeof maybeToken === 'string' && maybeToken.startsWith('s%3A')) {
    maybeToken = maybeToken.replace('s%3A', '');
    const tokenParts = maybeToken.split('.');
    maybeToken = tokenParts.slice(0, 3).join('.');
  }

  let token;
  try {
    token = jwt.verify(maybeToken, jwtSecret);
    console.log('après verification', token);
  } catch (err) {
    return { accessToken: null, error: errorTypes.invalidToken };
  }

  const { accessToken } = token;
  const { created, ttl } = accessToken;
  const valid = isBefore(Date.now(), Date.parse(created) + ttl);
  if (!valid) {
    return {
      accessToken: null,
      error: errorTypes.expiredToken
    };
  }
  return { accessToken, error: '', jwt: maybeToken };
}
export function removeCookies(req, res) {
  const config = createCookieConfig(req);
  res.clearCookie(jwtCookieNS, config);
  res.clearCookie('access_token', config);
  res.clearCookie('userId', config);
  res.clearCookie('_csrf', config);
  res.clearCookie('csrf_token', config);
  return;
}

export const errorTypes = {
  noTokenFound: 'No token found',
  invalidToken: 'Invalid token',
  expiredToken: 'Token timed out'
};
