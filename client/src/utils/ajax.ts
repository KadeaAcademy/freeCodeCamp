import cookies from 'browser-cookies';
import envData from '../../../config/env.json';

import type {
  ChallengeFile,
  CompletedChallenge,
  User
} from '../redux/prop-types';
import {
  MoodleCourse,
  MoodleCourseCategory,
  MoodleCoursesCatalogue,
  RavenCourse
} from '../client-only-routes/show-courses';
import { splitArray } from '../components/helpers';
import sortCourses from '../components/helpers/sort-course';

const { apiLocation } = envData;

export type CombinedCourses =
  | MoodleCoursesCatalogue
  | RavenCourse[]
  | unknown
  | null;

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
  | 'artificielle'
  | 'amazon';

export interface CourseDetails {
  titre: string;
  summury: string;
  description: string;
}

//data structure for programation cours

export interface ProgramationCourses {
  isAvailable: boolean;
  sameTab?: boolean;
  external?: boolean;
  description?: string;
  title: string;
  icon?: string;
  sponsorIcon?: string;
  badgeIcon?: string;
  alt?: string;
  buttonText?: string;
  link?: string;
  cardType?: string;
  createAt?: Date | string | number;
  duration: string | number;
  language?: string;
  level?: string;
  type: string;
}

export const dataForprogramation: ProgramationCourses[] = [
  {
    title: 'Responsive Web Design',
    level: 'debutant',
    language: 'Français',
    sponsorIcon: 'LaediesActIcon',
    alt: 'Icone ladies Act des cours Responsive design',
    isAvailable: true,
    link: '/learn/responsive-web-design/',
    description:
      "Ce cours t'apprend les langages HTML pour le contenu et CSS pour la conception, ainsi que la création de pages Web adaptatives pour différentes tailles d'écran.",
    duration: 120,
    type: 'Cours'
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    level: 'debutant',
    language: 'Anglais',
    sponsorIcon: 'AlgoIcon',
    alt: 'Icone cours algorithm et structure de données',
    isAvailable: true,
    link: '/learn/javascript-algorithms-and-data-structures',
    description:
      "Ce cours t'enseigne les bases de JavaScript pour rendre les pages interactives, ainsi que les algorithmes et structures de données en JavaScript, etc.",
    duration: 120,
    type: 'Cours'
  }
];

// <CourseCard
//               level='Débutant'
//               language='French'
//               icon={AlgoIcon}
//               alt=''
//               isAvailable={true}
//               title='JavaScript Algorithms and Data Structures'
//               buttonText='Suivre le cours'
//               link='/learn/javascript-algorithms-and-data-structures'
//               description={`
//     Ce cours t'enseigne les bases de JavaScript pour rendre les pages interactives, ainsi que les algorithmes et structures de données en JavaScript., etc.
//   `}
export const courseDescriptions: Record<CourseCategoryTitle, CourseDetails> = {
  Développement: {
    titre: 'Développement Web',
    summury: `Dans ce parcours, tu apprendras à créer des pages Web avec HTML pour le contenu, CSS pour la conception, et JavaScript pour rendre les sites interactifs. Tu découvriras également les algorithmes, les structures de données, et les bases du langage JavaScript.`,
    description: `La programmation est une compétence essentielle qui permet de créer des logiciels, des applications web et mobiles. Nos cours couvrent divers langages comme Python, JavaScript et Java, adaptés à tous les niveaux. Que vous souhaitiez développer des sites web, des jeux ou des outils d’automatisation, ces parcours vous aideront à maîtriser les bases et à progresser vers des projets plus avancés.`
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
    description: `Les compétences en bureautique sont indispensables pour une gestion efficace des tâches professionnelles et personnelles. Nos cours couvrent des outils comme Microsoft Office, Google Workspace et autres logiciels de productivité. Apprenez à créer des documents, des feuilles de calcul, et des présentations professionnelles. Que vous soyez débutant ou avancé, développez vos compétences pour travailler plus efficacement.`
  },
  Marketing: {
    titre: 'Marketing',
    summury: `Apprends les outils et techniques du marketing digital. Crée des stratégies de contenu, optimise ton site et gère les réseaux sociaux efficacement.`,
    description: `Le marketing et la communication sont essentiels pour créer et promouvoir une marque efficace. Nos cours vous apprennent à élaborer des stratégies, à maîtriser les réseaux sociaux, le SEO, et la création de contenu. Que vous soyez débutant ou professionnel, vous apprendrez à capter l’attention de votre audience et à optimiser votre impact avec des techniques modernes et des outils numériques.`
  },
  Communication: {
    titre: 'Communication',
    summury: `Maîtrise les techniques de communication pour des messages clairs et percutants. Crée des présentations, gérez les relations publiques et médias sociaux.`,
    description: `Ce parcours intensif en marketing digital vous forme aux stratégies de contenu, SEO, gestion des réseaux sociaux, et mesure de performance. Maîtrisez les outils pour développer un business en ligne ou diriger le marketing d'une entreprise, en optimisant la communication et les relations publiques..`
  },
  artificielle: {
    titre: 'Intelligence Artificielle',
    summury: `Explore l'IA, imitant les fonctions humaines. Apprends l'IA générative pour créer des contenus (texte, images, sons, vidéos) à travers des applications interactives.`,
    description: `
L’intelligence artificielle transforme la façon dont nous travaillons, avec des outils comme GPT qui boostent la productivité. Nos cours vous guident dans la compréhension et l’application de l’IA, de l'automatisation des tâches à la génération de contenu. Que vous soyez débutant ou expert, apprenez à intégrer l'IA dans vos workflows pour gagner du temps et améliorer vos résultats.`
  },

  amazon: {
    titre: 'Amazon web service',
    summury: `Ce cours est conçu pour montrer aux participants comment optimiser l'utilisation du cloud AWS grâce à la compréhension de ces nombreux services et de leur intégration dans la création de solutions basées sur le cloud.`,
    description: `Amazon Web Services (AWS) est une plateforme de cloud computing qui permet de stocker, gérer et déployer des applications en ligne. AWS offre des services tels que le calcul, le stockage et l’intelligence artificielle, utilisés par des entreprises de toutes tailles. Si vous voulez apprendre à maîtriser l’infrastructure cloud et à développer des solutions évolutives, AWS est fait pour vous !`
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

//add for moddlecourse fetch test

export const getMoodleCourseCategory = async () => {
  const moodleCourseCategories = await getExternalResource<
    MoodleCourseCategory[]
  >(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_course_get_categories&moodlewsrestformat=json`
  );

  if (moodleCourseCategories) {
    const moodleCategorie = moodleCourseCategories?.filter(
      category => category.coursecount > 0
    );
    // console.log(mesCoursMoodle);

    return moodleCategorie;
  }
};

//get so courses by categories

export const getMoodleCourses = async () => {
  const moodleCatalogue = await getExternalResource<MoodleCourse[]>(
    `${moodleApiBaseUrl}?wstoken=${moodleApiToken}&wsfunction=core_course_get_courses&moodlewsrestformat=json`
  );

  // Filtrer les cours visibles et non formatés comme "site"
  const filteredCourses =
    moodleCatalogue?.filter(
      moodleCourse =>
        moodleCourse.visible === 1 && moodleCourse.format !== 'site'
    ) || [];

  // Ajouter des propriétés spécifiques selon le categoryId
  const coursesWithAdditionalProperties = filteredCourses.map(course => {
    // Définir des valeurs par défaut
    let additionalProperties = {
      level: 'debutant',
      duration: 0,
      type: 'Cours',
      langue: 'French'
    };

    // Appliquer des valeurs spécifiques selon le categoryId
    switch (course.categoryid) {
      case 11:
        additionalProperties = {
          ...additionalProperties,
          duration: 21000
        };
        break;
      case 13:
        additionalProperties = {
          ...additionalProperties,

          duration: 28800
        };
        break;
      case 14:
        additionalProperties = {
          ...additionalProperties,
          duration: 7200
        };
        break;
      default:
        break;
    }

    // Retourner le cours enrichi avec les propriétés supplémentaires
    return {
      ...course,
      ...additionalProperties
    };
  });

  // Diviser les cours en groupes de 4
  const splitCourses: MoodleCoursesCatalogue | null = splitArray<MoodleCourse>(
    coursesWithAdditionalProperties,
    4
  );

  // Trier les cours par date de publication
  const sortedCourses = sortCourses(splitCourses);

  // Retourner les cours triés ou null s'il n'y a pas de catalogue Moodle
  return moodleCatalogue ? sortedCourses : null;
};

//add for moddlecourse fetch test

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
  if (typeof window != 'undefined' && window.localStorage) {
    localStorage.removeItem('ravenToken');
  }
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
  apiKey?: string;
  currentPage?: number;
}
const getRavenToken = async () => {
  const ravenTokenData = getRavenTokenDataFromLocalStorage();

  if (ravenTokenData === null) {
    // Si aucun token n'existe en local storage, générer un nouveau token
    const generateRavenToken = await generateRavenTokenAcces();

    if (generateRavenToken) {
      addRavenTokenToLocalStorage(generateRavenToken as RavenTokenData);
      return generateRavenToken; // Retourner le nouveau token
    } else {
      return null; // Retourner null si la génération a échoué
    }
  } else {
    // Vérifier si le token existant a expiré d'une heure ou plus
    const tokenExpirationTime = new Date(ravenTokenData.valid_to);
    const currentTime = new Date();
    // 1 heure en millisecondes
    const oneHourInMillis = 60 * 60 * 1000;
    // Calculer la différence de temps en millisecondes
    const timeDifference =
      tokenExpirationTime.getTime() - currentTime.getTime();

    if (timeDifference <= oneHourInMillis) {
      // Le token a expiré d'une heure ou plus, donc le supprimer et générer un nouveau
      removeRavenTokenFromLocalStorage();
      const generateRavenToken = await generateRavenTokenAcces();

      if (generateRavenToken) {
        addRavenTokenToLocalStorage(generateRavenToken as RavenTokenData);
        return generateRavenToken; // Retourner le nouveau token
      } else {
        return null; // Retourner null si la génération a échoué
      }
    } else {
      // Le token est encore valide, retourner le token existant
      return ravenTokenData;
    }
  }
};

//add for test

const { moodleApiBaseUrl, moodleApiToken, ravenAwsApiKey } = envData;
const ravenLocalToken = getRavenTokenDataFromLocalStorage();

export const getRavenResources = async (currentPage: number) => {
  await getRavenToken();

  const ravenData: RavenFetchCoursesDto = {
    apiKey: ravenAwsApiKey,
    token: ravenLocalToken?.token || '',
    currentPage: currentPage,
    fromDate: '01-01-2023',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    valid_to: '06-24-2024'
  };
  const getReveanCourses = await getAwsCourses(ravenData);

  return getReveanCourses;
};
export const getRavenPathResources = async (currentPage: number) => {
  await getRavenToken();

  const ravenData: RavenFetchCoursesDto = {
    apiKey: ravenAwsApiKey,
    token: ravenLocalToken?.token || '',
    currentPage: currentPage,
    fromDate: '01-01-2023',
    // eslint-disable-next-line @typescript-eslint/naming-convention
    valid_to: '06-24-2024'
  };
  const getReveanPathCourses = await getAwsPath(ravenData);

  return getReveanPathCourses;
};

//end getRavenResources

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

//fonction permettant la combinaison de tous les cours notamment moodle et raven
export const getAllRessources = async (
  currentPage: number
): Promise<CombinedCourses[]> => {
  const moodleCourses = await getMoodleCourses();
  const ravenCourses = await getRavenResources(currentPage);
  const ravenPathCourses = await getRavenPathResources(currentPage);

  // Combine the results into a single array
  const allCourses: CombinedCourses[] = [
    ...(moodleCourses?.result || []),
    ...([ravenCourses] || []),
    ...(ravenPathCourses || [])
  ];
  return allCourses;
};

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

    return groupIsAdded;
  } catch (error) {
    console.log(error);

    return {
      isRemoved: false,
      message: 'user is not added in the group'
    };
  }
}
