import cookies from 'browser-cookies';
import envData from '../../../config/env.json';

import type {
  ChallengeFile,
  CompletedChallenge,
  User
} from '../redux/prop-types';
import { RavenCourse } from '../client-only-routes/show-courses';

const { apiLocation } = envData;

const base = apiLocation;

const defaultOptions: RequestInit = {
  credentials: 'include'
};

// csrf_token is passed to the client as a cookie. The client must send
// this back as a header.
function getCSRFToken() {
  const token =
    typeof window !== 'undefined' ? cookies.get('csrf_token') : null;
  return token ?? '';
}

// TODO: Might want to handle flash messages as close to the request as possible
// to make use of the Response object (message, status, etc)
async function get<T>(path: string): Promise<T> {
  return fetch(`${base}${path}`, defaultOptions).then<T>(res => res.json());
}

export function post<T = void>(path: string, body: unknown): Promise<T> {
  return request('POST', path, body);
}

function put<T = void>(path: string, body: unknown): Promise<T> {
  return request('PUT', path, body);
}

function deleteRequest<T = void>(path: string, body: unknown): Promise<T> {
  return request('DELETE', path, body);
}

async function request<T>(
  method: 'POST' | 'PUT' | 'DELETE',
  path: string,
  body: unknown,
  token = null
): Promise<T> {
  const options: RequestInit = {
    ...defaultOptions,
    method,
    headers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'CSRF-Token': token ?? getCSRFToken(),
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };
  return fetch(`${base}${path}`, options).then<T>(res => res.json());
}

//liste des descriptions pour chaque parcours affichée sous le parcours

export type CourseCategoryTitle =
  | 'Développement'
  | 'Design'
  | 'Bureautique'
  | 'Marketing'
  | 'Communication'
  | 'artificielle';

export interface CourseDetails {
  titre: string;
  summury: string;
  description: string;
}

export const courseDescriptions: Record<CourseCategoryTitle, CourseDetails> = {
  Développement: {
    titre: 'Développement Web',
    summury: `Dans ce parcours, tu apprendras à créer des pages Web avec HTML pour le contenu, CSS pour la conception, et JavaScript pour rendre les sites interactifs. Tu découvriras également les algorithmes, les structures de données, et les bases du langage JavaScript.`,
    description: `Dans ce parcours, tu apprendras les langages que les développeurs
    utilisent pour créer des pages Web : HTML (Hypertext Markup Language)
    pour le contenu, et CSS (Cascading Style Sheets) pour la conception.
    Ensuite, tu apprendras à créer des pages Web adaptées à différentes tailles d'écran et
    enfin, Tu vas utiliser le JavaScript pour rendre tes sites interactifs.
    Tu apprendras les Algorithm, Data Structures, et les principes fondamentaux du langage de programmation JavaScript.`
  },
  Design: {
    titre: 'Design',
    summury: `Apprends les bases du design : typographie, théorie des couleurs, mise en page. Utilise Figma et Adobe XD pour créer des prototypes de qualité.`,
    description: `Dans ce parcours, tu apprendras les principes fondamentaux du design, y compris la typographie, la théorie des couleurs, et la mise en page.
    Tu utiliseras des outils tels que Figma et Adobe XD pour créer des maquettes et des prototypes de haute qualité. 
    En outre, tu apprendras à collaborer avec des développeurs pour transformer tes conceptions en produits réels.`
  },
  Bureautique: {
    titre: 'Bureautique',
    summury: `Maîtrise Word, Excel, PowerPoint, Outlook et OneNote. Crée des documents impeccables et analyse des données complexes avec nos cours interactifs.`,
    description: `Notre parcours complet de bureautique vous accompagne pas à pas, du niveau débutant à expert, pour maîtriser Word, Excel, PowerPoint, Outlook et OneNote. Grâce à nos cours en ligne interactifs et à nos exercices pratiques, vous acquerrez les compétences nécessaires pour créer des documents impeccables, analyser des données complexes et gérer efficacement votre boîte mail. À la fin de ce parcours, vous serez certifié et prêt à relever tous les défis de votre vie professionnelle.`
  },
  Marketing: {
    titre: 'Marketing',
    summury: `Apprends les outils et techniques du marketing digital. Crée des stratégies de contenu, optimise ton site et gère les réseaux sociaux efficacement.`,
    description: `Notre parcours complet vous offre une formation pratique et intensive aux outils et techniques les plus efficaces du marketing digital. Vous apprendrez à créer une stratégie de contenu engageante, à optimiser votre site web pour les moteurs de recherche, à gérer votre communauté sur les réseaux sociaux et à mesurer la performance de vos campagnes. À l'issue de cette formation, vous serez capable de développer votre propre business en ligne ou de piloter les actions marketing d'une entreprise.`
  },
  Communication: {
    titre: 'Communication',
    summury: `Maîtrise les techniques de communication pour des messages clairs et percutants. Crée des présentations, gérez les relations publiques et médias sociaux.`,
    description: `Dans ce parcours, vous apprendrez les techniques de communication efficaces pour transmettre des messages clairs et percutants. Vous découvrirez comment créer des présentations impactantes, gérer les relations publiques et utiliser les médias sociaux pour améliorer votre visibilité. Vous développerez des compétences pour communiquer avec divers publics et dans différents contextes professionnels.`
  },
  artificielle: {
    titre: 'Intelligence Artificielle',
    summury: `Explore l'IA, imitant les fonctions humaines. Apprends l'IA générative pour créer des contenus (texte, images, sons, vidéos) à travers des applications interactives.`,
    description: `L'intelligence artificielle est un domaine technologique en rapide évolution, permettant aux ordinateurs d'imiter des fonctions humaines telles que l'apprentissage et la résolution de problèmes. Un domaine spécifique de l'IA qui a récemment gagné en popularité est l'IA générative, qui se concentre sur la création de nouveaux contenus, qu'il s'agisse de textes, d'images, de sons ou de vidéos. Inscrivez-vous à ce cours pour explorer les différentes formes d'IA générative à travers des applications interactives !`
  }
};

export function getDescriptionByCategory(categoryTitle: string | null): string {
  if (!categoryTitle) return '.';

  const lowerCategoryName = categoryTitle.toLowerCase();

  if (lowerCategoryName.includes('marketing')) {
    return courseDescriptions.Marketing.description;
  } else if (lowerCategoryName.includes('communication')) {
    return courseDescriptions.Communication.description;
  } else if (lowerCategoryName.includes('artificielle')) {
    return courseDescriptions.artificielle.description;
  } else if (lowerCategoryName.includes('développement')) {
    return courseDescriptions.Développement.description;
  } else if (lowerCategoryName.includes('design')) {
    return courseDescriptions.Design.description;
  } else if (lowerCategoryName.includes('bureautique')) {
    return courseDescriptions.Bureautique.description;
  } else {
    return '.';
  }
}

// Make the `request` function generic
// to specify the return data type:
async function requestModule<TResponse>(
  url: string,
  // `RequestInit` is a type for configuring
  // a `fetch` request. By default, an empty object.
  config: RequestInit = {}

  // This function is async, it will return a Promise:
): Promise<TResponse> {
  // Inside, we call the `fetch` function with
  // a URL and config given:
  const response = await fetch(url, config)
    // When got a response call a `json` method on it
    .then(response => response.json())
    // and return the result data.
    .then(data => data as TResponse);
  // We also can use some post-response
  // data-transformations in the last `then` clause.
  return response;
}

/** GET **/

interface SessionUser {
  user?: { [username: string]: User };
  sessionMeta: { activeDonations: number };
}

type ChallengeFilesForFiles = {
  files: Array<Omit<ChallengeFile, 'fileKey'> & { key: string }>;
} & Omit<CompletedChallenge, 'challengeFiles'>;

type ApiSessionResponse = Omit<SessionUser, 'user'>;
type ApiUser = {
  user: {
    [username: string]: Omit<User, 'completedChallenges'> & {
      completedChallenges?: ChallengeFilesForFiles[];
    };
  };
  result?: string;
};

type UserResponse = {
  user: { [username: string]: User } | Record<string, never>;
  result: string | undefined;
};

function parseApiResponseToClientUser(data: ApiUser): UserResponse {
  const userData = data.user?.[data?.result ?? ''];
  let completedChallenges: CompletedChallenge[] = [];
  if (userData) {
    completedChallenges =
      userData.completedChallenges?.reduce(
        (acc: CompletedChallenge[], curr: ChallengeFilesForFiles) => {
          return [
            ...acc,
            {
              ...curr,
              challengeFiles: curr.files.map(({ key: fileKey, ...file }) => ({
                ...file,
                fileKey
              }))
            }
          ];
        },
        []
      ) ?? [];
  }
  return {
    user: { [data.result ?? '']: { ...userData, completedChallenges } },
    result: data.result
  };
}

export function getSessionUser(): Promise<SessionUser> {
  const response: Promise<ApiUser & ApiSessionResponse> = get(
    '/user/get-session-user'
  );
  // TODO: Once DB is migrated, no longer need to parse `files` -> `challengeFiles` etc.
  return response.then(data => {
    const { result, user } = parseApiResponseToClientUser(data);
    return {
      sessionMeta: data.sessionMeta,
      result,
      user
    };
  });
}

type UserProfileResponse = {
  entities: Omit<UserResponse, 'result'>;
  result: string | undefined;
};
export function getUserProfile(username: string): Promise<UserProfileResponse> {
  const response: Promise<{ entities?: ApiUser; result?: string }> = get(
    `/api/users/get-public-profile?username=${username}`
  );
  return response.then(data => {
    const { result, user } = parseApiResponseToClientUser({
      user: data.entities?.user ?? {},
      result: data.result
    });
    return {
      entities: { user },
      result
    };
  });
}

interface Cert {
  certTitle: string;
  username: string;
  date: Date;
  completionTime: string;
}
export function getShowCert(username: string, certSlug: string): Promise<Cert> {
  return get(`/certificate/showCert/${username}/${certSlug}`);
}

export function getUsernameExists(username: string): Promise<boolean> {
  return get(`/api/users/exists?username=${username}`);
}

// interface MoodleCourse {
//   id: number;
//   shortname: string;
//   categoryid: number;
//   categorysortorder: number;
//   fullname: string;
//   displayname: string;
//   summary: string;
// }

// interface MoodleCourse {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

export async function getExternalResource<T>(urlEndPoint: string) {
  let response: T | null;
  try {
    response = await requestModule<T>(urlEndPoint, {
      method: 'GET', //GET, POST, PUT, DELETE, etc.
      mode: 'cors', //no-cors,cors, same-origin
      cache: 'no-cache', //default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', //include, *same-origin, omit
      // headers: {
      //   // 'CSRF-Token': getCSRFToken(),
      //   // 'Content-Type': 'application/json'
      //   // 'Access-Control-Allow-Origin': '*'
      //   // 'Content-Type': 'application/x-www-form-urlencoded',
      // },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
  } catch (error) {
    response = null;
  }
  return response;
}
interface DataLemlist {
  firstName: string;
}

export async function postExternalResource<T>(
  urlEndPoint: string,
  data: DataLemlist
) {
  let response: unknown;

  try {
    response = await requestModule<T>(`${urlEndPoint}`, {
      method: 'POST', //GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', //no-cors,cors, same-origin
      cache: 'no-cache', //default, no-cache, reload, force-cache, only-if-cached
      body: JSON.stringify({ firstName: data.firstName })
    });
  } catch (error) {
    response = error;
  }
  return response;
}

export interface RavenTokenData {
  token: string;
  expiresIn: number;
  validFrom: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  valid_to: string;
}

export function removeRavenTokenFromLocalStorage() {
  localStorage.removeItem('ravenToken');
}

export function addRavenTokenToLocalStorage(
  ravenTokenData: RavenTokenData
): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const ravenTokenExist = localStorage.getItem('ravenToken');
      if (!ravenTokenExist)
        localStorage.setItem('ravenToken', JSON.stringify(ravenTokenData));
      console.log('Le token Raven a été ajouté au stockage local.');
    } else {
      console.error("Le stockage local n'est pas pris en charge.");
    }
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de l'ajout du token Raven au stockage local :",
      error
    );
  }
}

export function getRavenTokenDataFromLocalStorage(): RavenTokenData | null {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const tokenDataString = localStorage.getItem('ravenToken');
      if (tokenDataString) {
        const tokenData = JSON.parse(tokenDataString) as RavenTokenData;
        return tokenData;
      } else {
        console.log('Aucune donnée de token trouvée dans le stockage local.');
        return null;
      }
    } else {
      console.log("Le stockage local n'est pas pris en charge.");
      return null;
    }
  } catch (error) {
    console.log(
      'Une erreur est survenue lors de la récupération des données de token depuis le stockage local :',
      error
    );
    return null;
  }
}
export async function generateRavenTokenAcces(): Promise<unknown> {
  try {
    const response = await get('/generate-raven-token');

    console.log('acces token ', response);
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    return null;
  }
}
export async function getDatabaseResource<T>(urlEndPoint: string) {
  let response: T | null;
  try {
    response = await get(urlEndPoint);
  } catch (error) {
    response = null;
  }
  return response;
}

interface RavenFetchCoursesDto {
  token: string;
  fromDate: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  valid_to: string;
}

export async function getAwsCourses(data: RavenFetchCoursesDto) {
  let response: unknown | RavenCourse[];

  try {
    response = await get(
      `/get-raven-courses?awstoken=${data.token}&fromdate=${data.fromDate}&todate=${data.valid_to}`
    );
  } catch (error) {
    response = null;
  }
  return response;
}
export async function getAwsPath(data: RavenFetchCoursesDto) {
  let response: unknown | RavenCourse[];

  try {
    response = await get(
      `/get-raven-path?awstoken=${data.token}&fromdate=${data.fromDate}&todate=${data.valid_to}`
    );
  } catch (error) {
    response = null;
  }
  // return response;
  //cette partie permet notamment de filtrer les parcours pour ne retenir que ceux en français où en anglais.
  if (response) {
    interface Tag {
      title: string;
    }

    interface Category {
      tags?: Tag[];
      title: string;
    }

    interface Course {
      category?: Category[];
      // eslint-disable-next-line @typescript-eslint/naming-convention
      skill_level: string;
      language: string;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const filterCourses = (response: unknown): Course[] => {
      const courses = response as Course[];

      const coursesFilter = courses
        .filter(
          course =>
            course.category &&
            course.category.some(
              cat =>
                cat.tags &&
                cat.tags.some(
                  tag =>
                    tag.title.includes('English') ||
                    tag.title.includes('French')
                )
            )
        )
        .map(course => {
          // Extraire le skill level
          const skillLevelCategory = course.category?.find(
            cat => cat.title === 'Skill Level'
          );
          if (skillLevelCategory && skillLevelCategory.tags) {
            course.skill_level = skillLevelCategory.tags[0]?.title;
          }
          return course;
        });

      return coursesFilter;
    };

    const filteredCourses = filterCourses(response);

    return filteredCourses;
  }

  return [];
}
interface RavenFetchUserCoursesProgressDto {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  email_id: string;
  token: string;
  fromDate: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  valid_to: string;
}
export async function getAwsUserCoursesProgress(
  data: RavenFetchUserCoursesProgressDto
) {
  let response: unknown;

  try {
    response = await get(
      `/get-raven-user-progress?awstoken=${data.token}&fromdate=${data.fromDate}&todate=${data.valid_to}&email=${data.email_id}`
    );
  } catch (error) {
    response = null;
  }
  console.log('courses raven', response);
  return response;
}

('/get-raven-user-progress');

/** POST **/

interface Donation {
  email: string;
  amount: number;
  duration: string;
  provider: string;
  subscriptionId: string;
  customerId: string;
  startDate: Date;
}
// TODO: Verify if the body has and needs this Donation type. The api seems to
// just need the body to exist, but doesn't seem to use the properties.
export function addDonation(body: Donation): Promise<void> {
  return post('/donate/add-donation', body);
}

export function postChargeStripe(body: Donation): Promise<void> {
  return post('/donate/charge-stripe', body);
}

export function postChargeStripeCard(body: Donation): Promise<void> {
  return post('/donate/charge-stripe-card', body);
}
interface Report {
  username: string;
  reportDescription: string;
}
export function postReportUser(body: Report): Promise<void> {
  return post('/user/report-user', body);
}

// Both are called without a payload in danger-zone-saga,
// which suggests both are sent without any body
// TODO: Convert to DELETE
export function postDeleteAccount(): Promise<void> {
  return post('/account/delete', {});
}

export function postResetProgress(): Promise<void> {
  return post('/account/reset-progress', {});
}

export function postWebhookToken(): Promise<void> {
  return post('/user/webhook-token', {});
}

interface UserGroup {
  id?: string;
  userGroupName: string;
}

interface UserGroupResponse {
  userGroup: UserGroup | null;
  error: string | undefined;
}

export async function createUserGroup(
  body: UserGroup
): Promise<UserGroupResponse | void | unknown> {
  try {
    const response = await post<UserGroupResponse>('/user-group/create', body);

    if (!response.userGroup) {
      throw new Error(response.error);
    }
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: unknown | any) {
    return {
      userGroup: null,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      error: error.message
    };
  }
}

interface UserRole {
  id?: string;
  userRoleName: string;
}

interface UserRoleResponse {
  userRole: UserRole | null;
  error: string | undefined;
}
export async function createUserRole(
  body: UserRole
): Promise<UserRoleResponse | void | unknown> {
  try {
    const response = await post<UserRoleResponse>('/user-role/create', body);

    if (!response.userRole) {
      throw new Error(response.error);
    }
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: unknown | any) {
    return {
      userRole: null,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      error: error.message
    };
  }
}

/** PUT **/

interface MyAbout {
  name: string;
  location: string;
  gender: string;
  phone: string;
  whatsapp: string;
  codeTime: string;
  about: string;
  picture: string;
}
export function putUpdateMyAbout(values: MyAbout): Promise<void> {
  return put('/update-my-about', { ...values });
}

interface MyEducation {
  fieldOfStudy: string;
  levelOfStudy: string;
}
export function putUpdateMyEducation(values: MyEducation): Promise<void> {
  return put('/update-my-education', { ...values });
}

interface MyWorkExperience {
  employedWhere: string;
  sinceWhen: string;
  position: string;
}
export function putUpdateMyWorkExperience(
  values: MyWorkExperience
): Promise<void> {
  return put('/update-my-work-experience', { ...values });
}

export function putUpdateMyUsername(username: string): Promise<void> {
  return put('/update-my-username', { username });
}

interface CurrentSuperBlock {
  superBlockName: string;
  superBlockTranslatedName: string;
  superBlockDashedName: string;
  blockName: string;
  blockDashedName: string;
  isCurrentBlockCompleted: boolean;
  superBlockPath: string;
  currentChallengeId: string;
  totalChallenges: number;
  totalCompletedChallenges: number;
}

interface MyCurrentsSuperBlockList {
  currentsSuperBlock: CurrentSuperBlock[];
}

export function putUpdateMyCurrentsSuperBlock(
  values: MyCurrentsSuperBlockList
): Promise<void> {
  return put('/update-my-currents-super-block', { ...values });
}

export function putUpdateMyProfileUI(
  profileUI: User['profileUI']
): Promise<void> {
  return put('/update-my-profileui', { profileUI });
}

// Update should contain only one flag and one new value
// It's possible to constrain to only one key with TS, but is overkill for this
// https://stackoverflow.com/a/60807986
export function putUpdateUserFlag(
  update: Record<string, string>
): Promise<void> {
  return put('/update-user-flag', update);
}

export function putUserAcceptsTerms(quincyEmails: boolean): Promise<void> {
  return put('/update-privacy-terms', { quincyEmails });
}

export function putUserUpdateEmail(email: string): Promise<void> {
  return put('/update-my-email', { email });
}

export function putVerifyCert(certSlug: string): Promise<void> {
  return put('/certificate/verify', { certSlug });
}

interface UpdateGroupResponse {
  isUpdated: boolean;
  error: string | unknown;
}

export async function updateMemberGroup(
  body: UserGroup
): Promise<UpdateGroupResponse | undefined> {
  try {
    const isMemberGroupUpdated = await put<UpdateGroupResponse>(
      '/user-group/update',
      body
    );
    if (!isMemberGroupUpdated.isUpdated) {
      if (typeof isMemberGroupUpdated.error === 'string') {
        throw new Error(isMemberGroupUpdated.error);
      }
      throw new Error('Update of the group failed.');
    }
    return isMemberGroupUpdated;
  } catch (error) {
    if (error instanceof Error) {
      return {
        isUpdated: false,
        error: error.message
      };
    }
    return {
      isUpdated: false,
      error: 'Update of the group failed.'
    };
  }
}

interface UpdateRoleResponse {
  isUpdated: boolean;
  error: string | unknown;
}
export async function updateMemberRole(
  body: UserRole
): Promise<UpdateRoleResponse | undefined> {
  try {
    const isMemberRoleUpdated = await put<UpdateRoleResponse>(
      '/user-role/update',
      body
    );
    if (!isMemberRoleUpdated.isUpdated) {
      if (typeof isMemberRoleUpdated.error === 'string') {
        throw new Error(isMemberRoleUpdated.error);
      }
      throw new Error('Update of the role failed.');
    }
    return isMemberRoleUpdated;
  } catch (error) {
    if (error instanceof Error) {
      return {
        isUpdated: false,
        error: error.message
      };
    }
    return {
      isUpdated: false,
      error: 'Update of the role failed.'
    };
  }
}

/** DELETE **/
export function deleteWebhookToken(): Promise<void> {
  return deleteRequest('/user/webhook-token', {});
}

interface DeletionGroupResponse {
  isDeleted: boolean;
  message: string | unknown;
}

export async function deleteMemberGroup(
  body: UserGroup
): Promise<DeletionGroupResponse | undefined> {
  try {
    const groupIsAdded = await deleteRequest<DeletionGroupResponse>(
      '/user-group/delete',
      body
    );
    if (!groupIsAdded.isDeleted) {
      throw new Error('Deletion of the group failed.');
    }
    return groupIsAdded;
  } catch (error) {
    if (error instanceof Error) {
      return {
        isDeleted: false,
        message: error.message
      };
    }
    return {
      isDeleted: false,
      message: 'Deletion of the group failed.'
    };
  }
}
export async function deleteMemberRole(
  body: UserRole
): Promise<DeletionGroupResponse | undefined> {
  try {
    const groupIsAdded = await deleteRequest<DeletionGroupResponse>(
      '/user-role/delete',
      body
    );
    if (!groupIsAdded.isDeleted) {
      throw new Error('Deletion of the group failed.');
    }
    return groupIsAdded;
  } catch (error) {
    if (error instanceof Error) {
      return {
        isDeleted: false,
        message: error.message
      };
    }
    return {
      isDeleted: false,
      message: 'Deletion of the group failed.'
    };
  }
}

interface AddUserInGRoupData {
  ids: string[];
  userGroup: string;
}
interface AddUserInGRoupReponse {
  isAdded: boolean;
  message: string;
}

export async function addUserInGRoup(
  body: AddUserInGRoupData
): Promise<AddUserInGRoupReponse | undefined> {
  try {
    const groupIsAdded = await put<AddUserInGRoupReponse>(
      '/user-group/add-user',
      body
    );

    console.log('ffg', groupIsAdded);
    return groupIsAdded;
  } catch (error) {
    console.log(error);

    return {
      isAdded: false,
      message: 'user is not added in the group'
    };
  }
}

interface AddUserInRoleData {
  ids: string[];
  userRole: string | undefined;
}
export async function addUserInRole(
  body: AddUserInRoleData
): Promise<AddUserInGRoupReponse | undefined> {
  try {
    const roleIsAdded = await put<AddUserInGRoupReponse>(
      '/user-role/add-user',
      body
    );

    console.log('ffg', roleIsAdded);
    return roleIsAdded;
  } catch (error) {
    console.log(error);

    return {
      isAdded: false,
      message: 'user is not added in the group'
    };
  }
}

interface RemoveUserInGRoupData {
  ids: string[];
  userGroup: string;
}
interface RemoveUserInGRoupReponse {
  isRemoved: boolean;
  message: string;
}
export async function remoevUserInGRoup(
  body: RemoveUserInGRoupData
): Promise<RemoveUserInGRoupReponse | undefined> {
  try {
    const groupIsAdded = await put<RemoveUserInGRoupReponse>(
      '/user-group/remove-user',
      body
    );

    console.log('ffg', groupIsAdded);
    return groupIsAdded;
  } catch (error) {
    console.log(error);

    return {
      isRemoved: false,
      message: 'user is not added in the group'
    };
  }
}
