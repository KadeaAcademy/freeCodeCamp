const debug = require('debug')('fcc:server:datasources');
const secrets = require('../../../config/secrets');
const dsLocal = require('./datasources.production.js');

const ds = {
  ...dsLocal
};

// Override db configuration for local development
if (
  process.env.MONGOHQ_URL &&
  !process.env.MONGOHQ_URL.includes('mongodb+srv://')
) {
  // Local MongoDB connection (non-SSL)
  ds.db = {
    connector: 'mongodb',
    url: secrets.db,
    allowExtendedOperators: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    ssl: false
  };
  debug(`using local MongoDB at ${secrets.db}`);
} else {
  // Use production config but ensure SSL is handled properly
  ds.db = {
    ...dsLocal.db,
    ssl: dsLocal.db.url && dsLocal.db.url.includes('mongodb+srv://')
  };
}

// use [MailHog](https://github.com/mailhog/MailHog) if no SES keys are found
if (!process.env.SES_ID) {
  ds.mail = {
    connector: 'mail',
    transport: {
      type: 'smtp',
      host: process.env.MAILHOG_HOST || 'localhost',
      secure: false,
      port: 1025,
      tls: {
        rejectUnauthorized: false
      }
    },
    auth: {
      user: 'test',
      pass: 'test'
    }
  };
  debug(`using MailHog server on port ${ds.mail.transport.port}`);
} else {
  debug('using AWS SES to deliver emails');
}

module.exports = ds;
