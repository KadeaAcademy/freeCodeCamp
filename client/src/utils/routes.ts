const routes = {
  learningPath: {
    index: '/learning-path',
    aws: '/learning-path/aws-courses',
    moodle: '/learning-path/:category/:categoryId',
    fullstack: '/learning-path/developpement-web'
  },
  catalogue: {
    index: '/catalogue',
    catalogueTitle: '/catalogue/:value',
    aws: '/catalogue/amazon-web-service',
    programmation: '/catalogue/programmation',
    moodle: '/catalogue/:category'
  }
};

const allQuery = {
  key: {
    level: 'level',
    duration: 'durée',
    language: 'langue',
    type: 'type'
  },

  value: {
    level: {
      debutant: 'Débutant',
      intermediaire: 'Intermediaire',
      avancé: 'Avancé'
    },
    duration: {
      lessOneHour: '>1h',
      overOneHour: '1>5h',
      overFiveHour: '>5h'
    },
    language: {
      french: 'French',
      english: 'English'
    },
    type: {
      cours: 'Cours',
      parcours: 'Parcours'
    }
  }
};

export { routes, allQuery };
