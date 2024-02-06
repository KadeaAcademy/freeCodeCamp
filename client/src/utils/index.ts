/*
 * This regex is not for validation, it is purely to see
 * if we are looking at something like what we want to validate
 * before we try to validate.
 *  /^[a-zA-Z]+ [a-zA-Z]+$/
 */
export const maybeEmailRE = /.*@.*\.\w\w/;
export const maybeUrlRE = /https?:\/\/.*\..*/;
export const hasProtocolRE = /^http/;
export const hasToBeValidName = /^[a-zA-Z]+ [a-zA-Z]+$/;
export const validLinkedInLinkRE =
  /^(((https:\/\/|http:\/\/|))(www.|)linkedin.com\/in\/)([\w-]{3,})/gi;
export const validGitHubLinkRE =
  /^(((https:\/\/|http:\/\/|))(www.|)github.com\/)([\w-]{3,})/gi;
