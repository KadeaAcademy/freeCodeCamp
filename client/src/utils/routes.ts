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
    aws: '/catalogue/Amazone-web-service',
    programmation: '/catalogue/programation',
    moodle: '/catalogue/:category'
  }
};

export default routes;
