const path = require('path');
const envData = require('../config/env.json');
const {
  buildChallenges,
  replaceChallengeNode,
  localeChallengesRootDir
} = require('./utils/build-challenges');

const { clientLocale, curriculumLocale, homeLocation } = envData;

const curriculumIntroRoot = path.resolve(__dirname, './src/pages');
const pathPrefix =
  clientLocale === 'english' || clientLocale === 'chinese'
    ? ''
    : '/' + clientLocale;

module.exports = {
  flags: {
    DEV_SSR: false
  },
  siteMetadata: {
    title: 'Kadea Online',
    siteUrl: homeLocation
  },
  pathPrefix: pathPrefix,
  plugins: [
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        // ID de votre conteneur Google Tag Manager
        id: 'G-P9S5KF522M'
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        analyzerMode: 'disabled',
        generateStatsFile: process.env.CI
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-create-client-paths',
      options: {
        prefixes: [
          '/certification/*',
          '/unsubscribed/*',
          '/user/*',
          '/settings/*',
          '/n/*'
        ]
      }
    },
    {
      resolve: 'fcc-source-challenges',
      options: {
        name: 'challenges',
        source: buildChallenges,
        onSourceChange: replaceChallengeNode(curriculumLocale),
        curriculumPath: localeChallengesRootDir
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'introductions',
        path: curriculumIntroRoot
      }
    },
    {
      resolve: 'gatsby-transformer-remark'
    },
    {
      resolve: 'gatsby-remark-node-identity',
      options: {
        identity: 'blockIntroMarkdown',
        predicate: ({ frontmatter }) => {
          if (!frontmatter) {
            return false;
          }
          const { title, block, superBlock } = frontmatter;
          return title && block && superBlock;
        }
      }
    },
    {
      resolve: 'gatsby-remark-node-identity',
      options: {
        identity: 'superBlockIntroMarkdown',
        predicate: ({ frontmatter }) => {
          if (!frontmatter) {
            return false;
          }
          const { title, block, superBlock } = frontmatter;
          return title && !block && superBlock;
        }
      }
    },
    // {
    //   resolve: `gatsby-plugin-advanced-sitemap`,
    //   options: {
    //     exclude: [
    //       `/dev-404-page`,
    //       `/404`,
    //       `/404.html`,
    //       `/offline-plugin-app-shell-fallback`,
    //       `/learn`,
    //       /(\/)learn(\/)\S*/
    //     ],
    //     addUncaughtPages: true
    //   }
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'kadea-learn',
        short_name: 'kl',
        start_url: '/',
        theme_color: '#0a0a23',
        background_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo/square_puck.png'
      }
    },
    'gatsby-plugin-remove-serviceworker'
  ]
};
