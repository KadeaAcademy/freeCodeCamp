//Notons l'utilisation de object.freeze() afin de
//rendre les objects immuables car on ne veut pas que ces propriétés change de valeurs.
const routes = Object.freeze({
  learningPath: Object.freeze({
    index: '/learning-path',
    aws: '/learning-path/aws-courses',
    moodle: '/learning-path/:category/:categoryId',
    fullstack: '/learning-path/developpement-web'
  }),
  catalogue: Object.freeze({
    index: '/catalogue',
    catalogueTitle: '/catalogue/:value',
    aws: '/catalogue/amazon-web-service',
    programmation: '/catalogue/programmation',
    moodle: '/catalogue/:category'
  })
});

const allQuery = Object.freeze({
  key: {
    level: 'niveau',
    duration: 'duree',
    language: 'langue',
    type: 'type'
  },
  value: Object.freeze({
    level: Object.freeze({
      debutant: 'debutant',
      intermediaire: 'Intermediate',
      avance: 'avance'
    }),
    duration: Object.freeze({
      lessOneHour: '-1h',
      overOneHour: '1-5h',
      overFiveHour: 'Ov5h'
    }),
    language: Object.freeze({
      french: 'French',
      english: 'English'
    }),
    type: Object.freeze({
      cours: 'Cours',
      parcours: 'Parcours'
    })
  })
});

const arrayOfCategory = [
  {
    categoryName: 'Tous',
    categoryId: null,
    categoryRoute: routes.catalogue.index
  },
  {
    categoryName: 'Programmation',
    categoryId: -1,
    categoryRoute: routes.catalogue.programmation
  },
  {
    categoryName: 'Amazon web service',
    categoryId: -2,
    categoryRoute: routes.catalogue.aws
  },
  {
    categoryName: 'Bureautique',
    categoryId: 11,
    categoryRoute: routes.catalogue.moodle.replace(':category', 'Bureautique')
  },
  {
    categoryName: 'Marketing-Communication',
    categoryId: 13,
    categoryRoute: routes.catalogue.moodle.replace(
      ':category',
      'Marketing-Communication'
    )
  },
  {
    categoryName: 'Intelligence-Artificielle',
    categoryId: 14,
    categoryRoute: routes.catalogue.moodle.replace(
      ':category',
      'Intelligence - artificielle'
    )
  }
];

export { routes, allQuery, arrayOfCategory };
