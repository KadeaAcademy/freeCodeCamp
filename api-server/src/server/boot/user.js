import debugFactory from 'debug';
import dedent from 'dedent';
import { body } from 'express-validator';
import { pick } from 'lodash';
import { Observable } from 'rx';
import Axios from 'axios';
import csurf from 'csurf';

import {
  fixCompletedChallengeItem,
  fixPartiallyCompletedChallengeItem
} from '../../common/utils';
import { removeCookies } from '../utils/getSetAccessToken';
import { ifNoUser401, ifNoUserRedirectHome } from '../utils/middleware';
import {
  getProgress,
  normaliseUserFields,
  userPropsForSession
} from '../utils/publicUserProps';
import { getRedirectParams } from '../utils/redirection';
import { trimTags } from '../utils/validators';
import {
  getAllUsers,
  countUserDocuments,
  getAllOfUsers
} from '../utils/user-stats';
const fs = require('fs');
const path = require('path');

const log = debugFactory('fcc:boot:user');
const sendNonUserToHome = ifNoUserRedirectHome();

function bootUser(app) {
  const api = app.loopback.Router();

  const getSessionUser = createReadSessionUser(app);
  const postReportUserProfile = createPostReportUserProfile(app);
  const postDeleteAccount = createPostDeleteAccount(app);
  const postWebhookToken = createPostWebhookToken(app);
  const deleteWebhookToken = createDeleteWebhookToken(app);
  const saveDataOnBdd = saveRavenCoursesToDB(app);
  const getAllRavenCourses = getRavenCoursesFromDB(app);

  const csrfProtection = csurf({
    cookie: {
      httpOnly: true,
      secure: process.env.FREECODECAMP_NODE_ENV === 'production',
      sameSite: 'Strict',
      domain: process.env.COOKIE_DOMAIN || 'localhost'
    }
  });

  // Endpoint pour générer le token CSRF
  api.get('/csrf-token', csrfProtection, (req, res) => {
    res.cookie('XSRF-TOKEN', req.csrfToken(), {
      httpOnly: false, // Le token peut être lu par JavaScript côté client
      secure: process.env.FREECODECAMP_NODE_ENV === 'production', // S'assurer que le cookie est sécurisé en production
      sameSite: 'Strict' // Protéger contre les attaques CSRF
    });
    res.json({ csrfToken: req.csrfToken() }); // Renvoyer le token CSRF dans la réponse JSON
  });

  api.get('/account', sendNonUserToHome, getAccount);
  api.get('/all-users', sendNonUserToHome, getUserList);
  api.get('/account/unlink/:social', sendNonUserToHome, getUnlinkSocial);
  api.get('/user/get-session-user', getSessionUser);

  api.post('/account/delete', ifNoUser401, postDeleteAccount);
  api.post('/account/reset-progress', ifNoUser401, postResetProgress);
  api.post('/user/webhook-token', postWebhookToken);
  api.post(
    '/user/report-user/',
    ifNoUser401,
    body('reportDescription').customSanitizer(trimTags),
    postReportUserProfile
  );

  api.delete('/user/webhook-token', deleteWebhookToken);
  api.get('/generate-raven-token', generateRavenToken);
  api.get('/get-raven-courses', getRavenAwsCatalogue);
  api.get('/get-raven-path', getRavenAwsPathCatalogue);
  api.get('/get-raven-user-progress', getRavenAwsUserProgress);
  api.get('/save-rave-courses', saveDataOnBdd);
  api.get('/get-kinshasa-digital-raven-courses', getAllRavenCourses);
  api.get('/get-all-users-data', getAllOfUsersData);

  app.use(api);
}

async function generateRavenToken(req, res) {
  console.log('ca marche');
  try {
    const apiKey = process.env.RAVEN_AWS_API_KEY;
    const clientId = process.env.RAVEN_AWS_CLIENT_ID;
    const clientSecret = process.env.RAVEN_AWS_CLIENT_SECRET_ID;
    const baseUrl = process.env.RAVEN_AWS_BASE_URL;

    const requestBody = JSON.stringify({
      client_id: clientId,
      client_secret: clientSecret
    });

    const response = await Axios.post(`${baseUrl}/gettoken`, requestBody, {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
      }
    });

    const tokenData = response;
    console.log('les datas', tokenData.data);
    return res.json(tokenData.data.data);
  } catch (error) {
    console.log('Erreur lors de la récupération du token:', error);
    res.status(500).json(null);
  }
}

async function getRavenAwsCatalogue(req, res) {
  try {
    const ravenAwsCours = [];
    return ravenAwsCours;
  } catch (error) {
    console.error(
      'Erreur lors de la récupération des du catalogue:',
      error.message
    );
    res.status(500).json([]);
  }
}
function getCoursesWithProgress(courses, progressions) {
  const coursesWithProgress = [];
  courses.forEach(course => {
    const matchingProgression = progressions.find(
      progression => progression.learningobject_id === course.learningobject_id
    );
    if (matchingProgression) {
      const courseWithProgress = {
        learningobject_id: course.learningobject_id,
        name: course.name,
        display_name: course.display_name,
        progress: matchingProgression.completion_percentage,
        launch_url: course.launch_url
      };
      coursesWithProgress.push(courseWithProgress);
    }
  });
  return coursesWithProgress;
}

async function getRavenAwsUserProgress(req, res) {
  const apiKey = process.env.RAVEN_AWS_API_KEY;
  const { awstoken, email } = req.query;

  const baseUrl = process.env.RAVEN_AWS_BASE_URL;
  const requestBody = JSON.stringify({
    from_date: '01-01-2023',
    to_date: '11-11-2024',
    email_id: email
  });
  const requestBodycourses = JSON.stringify({
    from_date: '01-01-2023',
    to_date: '11-11-2024',
    learningobject_type: 'content',
    page_index: 1,
    page_size: 4
  });

  try {
    const ravenCourseProgress = await Axios.post(
      `${baseUrl}/administration/progress/learningobjects`,
      requestBody,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          Authorization: awstoken
        }
      }
    );

    const ravenAwsCours = await Axios.post(
      `${baseUrl}/administration/catalog/learningobjects`,
      requestBodycourses,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          Authorization: awstoken
        }
      }
    );
    console.log(
      'les datas progresion:',
      ravenAwsCours.data.data,
      'prossion:',
      ravenCourseProgress.data.data
    );
    const ravenCourseWithProgress = getCoursesWithProgress(
      ravenAwsCours.data.data,
      ravenCourseProgress.data.data
    );

    console.log('les datas progresion', ravenCourseWithProgress);
    return res.json(ravenCourseWithProgress);
  } catch (error) {
    console.error(
      'Erreur lors de la récupération des progression:',
      error.message
    );
    res.status(500).json([]);
  }
}

async function getRavenAwsPathCatalogue(req, res) {
  const filePath = path.join(
    __dirname,
    'client',
    'src',
    'utils',
    'saveRavenCourseInJson.json'
  );

  try {
    // Vérifie si le fichier JSON existe
    if (!fs.existsSync(filePath)) {
      console.error("Le fichier JSON n'existe pas.");
      return res
        .status(404)
        .json({ message: 'Fichier de données introuvable.' });
    }

    // Lecture du fichier JSON
    const data = fs.readFileSync(filePath, 'utf8');
    const courses = JSON.parse(data);

    // Retourne les données lues dans la réponse
    return res.json(courses);
  } catch (error) {
    console.error('Erreur lors de la lecture du fichier JSON:', error.message);
    return res
      .status(500)
      .json({ message: 'Erreur serveur lors de la récupération des cours.' });
  }
}

function createPostWebhookToken(app) {
  const { WebhookToken } = app.models;

  return async function postWebhookToken(req, res) {
    const ttl = 900 * 24 * 60 * 60 * 1000;
    let newToken;

    try {
      await WebhookToken.destroyAll({ userId: req.user.id });
      newToken = await WebhookToken.create({ ttl, userId: req.user.id });
    } catch (e) {
      return res.status(500).json({
        type: 'danger',
        message: 'flash.create-token-err'
      });
    }

    return res.json(newToken?.id);
  };
}

function createDeleteWebhookToken(app) {
  const { WebhookToken } = app.models;

  return async function deleteWebhookToken(req, res) {
    try {
      await WebhookToken.destroyAll({ userId: req.user.id });
    } catch (e) {
      return res.status(500).json({
        type: 'danger',
        message: 'flash.delete-token-err'
      });
    }

    return res.json(null);
  };
}

function createReadSessionUser(app) {
  const { Donation } = app.models;

  return async function getSessionUser(req, res, next) {
    const queryUser = req.user;

    const webhookTokenArr = await queryUser.webhookTokens({
      userId: queryUser.id
    });
    const webhookToken = webhookTokenArr[0]?.id;

    const source =
      queryUser &&
      Observable.forkJoin(
        queryUser.getCompletedChallenges$(),
        queryUser.getPartiallyCompletedChallenges$(),
        queryUser.getPoints$(),
        Donation.getCurrentActiveDonationCount$(),
        (
          completedChallenges,
          partiallyCompletedChallenges,
          progressTimestamps,
          activeDonations
        ) => ({
          activeDonations,
          completedChallenges,
          partiallyCompletedChallenges,
          progress: getProgress(progressTimestamps, queryUser.timezone)
        })
      );
    Observable.if(
      () => !queryUser,
      Observable.of({ user: {}, result: '' }),
      Observable.defer(() => source)
        .map(
          ({
            activeDonations,
            completedChallenges,
            partiallyCompletedChallenges,
            progress
          }) => ({
            user: {
              ...queryUser.toJSON(),
              ...progress,
              completedChallenges: completedChallenges.map(
                fixCompletedChallengeItem
              ),
              partiallyCompletedChallenges: partiallyCompletedChallenges.map(
                fixPartiallyCompletedChallengeItem
              )
            },
            sessionMeta: { activeDonations }
          })
        )
        .map(({ user, sessionMeta }) => ({
          user: {
            [user.username]: {
              ...pick(user, userPropsForSession),
              username: user.usernameDisplay || user.username,
              isEmailVerified: !!user.emailVerified,
              isGithub: !!user.githubProfile,
              isLinkedIn: !!user.linkedin,
              isTwitter: !!user.twitter,
              isWebsite: !!user.website,
              ...normaliseUserFields(user),
              joinDate: user.id.getTimestamp(),
              webhookToken
            }
          },
          sessionMeta,
          result: user.username
        }))
    ).subscribe(user => res.json(user), next);
  };
}

function getAccount(req, res) {
  const { username } = req.user;
  return res.redirect('/' + username);
}

async function getUserList(req, res) {
  console.log('requette', req.query);
  // destructure page and limit and set default values
  const {
    page = 1,
    limit = 3,
    classRoom = null,
    memberName = null
  } = req.query;
  try {
    let userList = [];
    let usersCount = [];
    let filter = {};
    if (classRoom && classRoom != 'all') {
      filter = { groups: classRoom };

      if (memberName) {
        filter.name = new RegExp(`${memberName}`, 'i');
        filter.email = new RegExp(`${memberName}`, 'i');
      }

      userList = await getAllUsers(page, limit, filter);
      usersCount = await countUserDocuments(filter);
    } else if (classRoom == 'all' && memberName) {
      filter.name = new RegExp(`${memberName}`, 'i');
      filter.email = new RegExp(`${memberName}`, 'i');

      userList = await getAllUsers(page, limit, filter);
      usersCount = await countUserDocuments(filter);
    } else {
      userList = await getAllUsers(page, limit);
      usersCount = await countUserDocuments();
    }

    return res.json({
      userList: userList,
      totalPages: Math.ceil(usersCount.length / limit),
      currentPage: page,
      countUsers: usersCount.length
    });
  } catch (error) {
    return res.json({
      error: error
    });
  }
}

export async function getAllOfUsersData(req, res) {
  try {
    const allUsers = await getAllOfUsers();
    return res.json(allUsers);
  } catch (error) {
    return res.json({
      error: error
    });
  }
}

//cette fonction n'est à utiliser que pour les cas où le client a des difficultés de faire les fetchs de données de la base de données kadéa
// async function saveCoursesToJSON(courses) {
//   // Définit le chemin du répertoire où le fichier JSON doit être sauvegardé
//   const dirPath = path.join(
//     __dirname, // Utilise __dirname pour obtenir le répertoire courant
//     'client',
//     'src',
//     'utils' // Le chemin relatif à partir du répertoire courant
//   );

//   // Définit le chemin complet du fichier JSON
//   const filePath = path.join(dirPath, 'saveRavenCourseInJson.json');

//   // Vérifie si le répertoire existe. Si ce n'est pas le cas, le crée.
//   if (!fs.existsSync(dirPath)) {
//     console.log('Répertoire introuvable. Création du répertoire...');
//     fs.mkdirSync(dirPath, { recursive: true }); // Crée tous les répertoires nécessaires
//     console.log('Répertoire créé avec succès.');
//   }

//   // Vérifie si le fichier existe, sinon le crée avec un tableau vide
//   if (!fs.existsSync(filePath)) {
//     console.log("Fichier JSON introuvable. Création d'un nouveau fichier...");
//     fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf8'); // Crée un fichier JSON avec un tableau vide
//     console.log('Fichier JSON créé avec succès.');
//   }

//   // Sauvegarde les données des cours dans le fichier JSON
//   fs.writeFileSync(filePath, JSON.stringify(courses, null, 2), 'utf8');
//   console.log('Données des cours sauvegardées dans le fichier JSON.');
// }

export function saveRavenCoursesToDB(app) {
  return async function postSaveRavenCourses(req, res) {
    console.log('save data on bdd');
    const RavenCourse = app.models.RavenCourse;

    const apiKey = process.env.RAVEN_AWS_API_KEY;
    const baseUrl = process.env.RAVEN_AWS_BASE_URL;
    const { awstoken } = req.query;

    const requestBody = JSON.stringify({
      from_date: '01-01-2023',
      to_date: '06-24-2024',
      learningobject_type: 'content',
      page_index: 1,
      page_size: 0
    });

    // Vérifier si un token est fourni
    if (!awstoken) {
      return res.json({
        success: false,
        message: 'No token found'
      });
    }

    try {
      console.log('les datas');

      // Requête vers l'API Raven
      const ravenResponse = await Axios.post(
        `${baseUrl}/administration/catalog/learningobjects`,
        requestBody,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            Authorization: awstoken
          }
        }
      );

      // Extraction des cours depuis la réponse de l'API
      const courses = ravenResponse.data?.data || [];
      if (courses.length === 0) {
        console.log('Aucun cours trouvé');
        return res.json({
          success: false,
          message: 'No courses found in the API response'
        });
      }

      //cette fonction n'est à utiliser que pour les cas où le client a des difficultés de faire les fetchs de données de la base de données kadéa
      // Sauvegarde des cours dans un fichier JSON
      // await saveCoursesToJSON(courses);

      // Suppression des données existantes avant d'insérer les nouvelles
      await RavenCourse.destroyAll();

      // Sauvegarde des cours dans la base de données
      const savedCourses = await Promise.all(
        courses.map(async course => {
          const courseData = {
            learningobjectid: course.learningobject_id,
            name: course.name,
            display_name: course.display_name,
            launch_url: course.launch_url,
            short_description: course.short_description,
            duration: course.duration,
            createddate: course.created_date,
            updateddate: course.updated_date,
            content_type: course.content_type,
            category: course.category
          };

          const allCourses = await RavenCourse.create(courseData);
          return allCourses;
        })
      );

      // Réponse avec les données sauvegardées
      const data = savedCourses.map(course => course.toJSON());
      return res.json({
        success: true,
        message: 'Courses saved successfully',
        coursesCount: data.length,
        courses: data
      });
    } catch (error) {
      console.error('Error saving Raven courses to DB:', error);
      return res.status(500).json({
        success: false,
        message: 'Error saving courses to database',
        error: error.message
      });
    }
  };
}

export function getRavenCoursesFromDB(app) {
  return async function getRavenCourses(req, res) {
    const RavenCourse = app.models.RavenCourse;
    try {
      // Set proper headers
      res.setHeader('Content-Type', 'application/json');
      const courses = await RavenCourse.find();

      if (!courses || courses.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No courses found'
        });
      }

      return res.json({
        success: true,
        data: courses.map(course => course.toJSON())
      });
    } catch (error) {
      console.error('[DB Error]', error);
      // Ensure error response is JSON
      return res.status(500).json({
        success: false,
        message: 'Database error',
        error: error.message
      });
    }
  };
}

function getUnlinkSocial(req, res, next) {
  const { user } = req;
  const { username } = user;
  const { origin } = getRedirectParams(req);
  let social = req.params.social;
  if (!social) {
    req.flash('danger', 'No social account found');
    return res.redirect('/' + username);
  }

  social = social.toLowerCase();
  const validSocialAccounts = ['twitter', 'linkedin'];
  if (validSocialAccounts.indexOf(social) === -1) {
    req.flash('danger', 'Invalid social account');
    return res.redirect('/' + username);
  }

  if (!user[social]) {
    req.flash('danger', `No ${social} account associated`);
    return res.redirect('/' + username);
  }

  const query = {
    where: {
      provider: social
    }
  };

  return user.identities(query, function (err, identities) {
    if (err) {
      return next(err);
    }

    // assumed user identity is unique by provider
    let identity = identities.shift();
    if (!identity) {
      req.flash('danger', 'No social account found');
      return res.redirect('/' + username);
    }

    return identity.destroy(function (err) {
      if (err) {
        return next(err);
      }

      const updateData = { [social]: null };

      return user.updateAttributes(updateData, err => {
        if (err) {
          return next(err);
        }
        log(`${social} has been unlinked successfully`);

        req.flash('info', `You've successfully unlinked your ${social}.`);
        return res.redirectWithFlash(`${origin}/${username}`);
      });
    });
  });
}

function postResetProgress(req, res, next) {
  const { user } = req;
  return user.updateAttributes(
    {
      progressTimestamps: [Date.now()],
      currentChallengeId: '',
      isRespWebDesignCert: false,
      is2018DataVisCert: false,
      isFrontEndLibsCert: false,
      isJsAlgoDataStructCert: false,
      isApisMicroservicesCert: false,
      isInfosecQaCert: false,
      isQaCertV7: false,
      isInfosecCertV7: false,
      is2018FullStackCert: false,
      isFrontEndCert: false,
      isBackEndCert: false,
      isDataVisCert: false,
      isFullStackCert: false,
      isSciCompPyCertV7: false,
      isDataAnalysisPyCertV7: false,
      isMachineLearningPyCertV7: false,
      isRelationalDatabaseCertV8: false,
      completedChallenges: [],
      currentsSuperBlock: []
    },
    function (err) {
      if (err) {
        return next(err);
      }
      return res.status(200).json({});
    }
  );
}

function createPostDeleteAccount(app) {
  const { User, WebhookToken } = app.models;
  return async function postDeleteAccount(req, res, next) {
    const {
      user: { id: userId }
    } = req;

    try {
      await WebhookToken.destroyAll({ userId });
    } catch (err) {
      log(
        `An error occurred deleting webhook tokens for user with id ${userId} when they tried to delete their account`
      );
    }

    return User.destroyById(req.user.id, function (err) {
      if (err) {
        return next(err);
      }
      req.logout();
      removeCookies(req, res);
      return res.status(200).json({});
    });
  };
}

function createPostReportUserProfile(app) {
  const { Email } = app.models;
  return function postReportUserProfile(req, res, next) {
    const { user } = req;
    const { username, reportDescription: report } = req.body;
    const { origin } = getRedirectParams(req);
    log(username);
    log(report);

    if (!username || !report || report === '') {
      return res.json({
        type: 'danger',
        message: 'flash.provide-username'
      });
    }
    return Email.send$(
      {
        type: 'email',
        to: 'support@freecodecamp.org',
        cc: user.email,
        from: 'team@freecodecamp.org',
        subject: `Abuse Report : Reporting ${username}'s profile.`,
        text: dedent(`
        Hello Team,\n
        This is to report the profile of ${username}.\n
        Report Details:\n
        ${report}\n\n
        Reported by:
        Username: ${user.username}
        Name: ${user.name}
        Email: ${user.email}\n
        Thanks and regards,
        ${user.name}
      `)
      },
      err => {
        if (err) {
          err.redirectTo = `${origin}/${username}`;
          return next(err);
        }

        return res.json({
          type: 'info',
          message: 'flash.report-sent',
          variables: { email: user.email }
        });
      }
    );
  };
}
export default bootUser;
