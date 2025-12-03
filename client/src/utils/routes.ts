//Notons l'utilisation de object.freeze() afin de

import { domainKeywords } from '../client-only-routes/catalogue/keyword-for-courses-category';
import { MoodleCourse, RavenCourse } from '../client-only-routes/show-courses';
import { ProgramationCourses } from '../redux/prop-types';
import { convertTimeForFilter } from './allFunctions';

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
  Object.freeze({
    categoryName: 'Tous',
    categoryId: null,
    categoryRoute: routes.catalogue.index
  }),
  Object.freeze({
    categoryName: 'Programmation',
    categoryId: -1,
    categoryRoute: routes.catalogue.programmation
  }),
  Object.freeze({
    categoryName: 'Amazon web service',
    categoryId: -2,
    categoryRoute: routes.catalogue.aws
  }),
  Object.freeze({
    categoryName: 'Bureautique',
    categoryId: 11,
    categoryRoute: routes.catalogue.moodle.replace(':category', 'Bureautique')
  }),
  Object.freeze({
    categoryName: 'Marketing-Communication',
    categoryId: 13,
    categoryRoute: routes.catalogue.moodle.replace(
      ':category',
      'Marketing-Communication'
    )
  }),
  Object.freeze({
    categoryName: 'Intelligence-Artificielle',
    categoryId: 14,
    categoryRoute: routes.catalogue.moodle.replace(
      ':category',
      'Intelligence - artificielle'
    )
  })
];
const filterLogics = {
  programation: {
    language: (course: ProgramationCourses, currentUrl: string) => {
      const filterByEnglish = currentUrl.includes(
        allQuery.value.language.english
      );
      const filterByFrench = currentUrl.includes(
        allQuery.value.language.french
      );

      if (filterByEnglish || filterByFrench) {
        return (
          (filterByEnglish &&
            course.language === allQuery.value.language.english) ||
          (filterByFrench && course.language === allQuery.value.language.french)
        );
      }
      return true;
    },
    type: (course: ProgramationCourses, currentUrl: string) => {
      const filterByParcours = currentUrl.includes(
        allQuery.value.type.parcours
      );
      const filterByCours = currentUrl.includes(allQuery.value.type.cours);

      if (filterByParcours || filterByCours) {
        return (
          (filterByParcours && course.type === allQuery.value.type.parcours) ||
          (filterByCours && course.type === allQuery.value.type.cours)
        );
      }
      return true;
    },
    level: (course: ProgramationCourses, currentUrl: string) => {
      const filterByDebutant = currentUrl.includes(
        allQuery.value.level.debutant
      );
      const filterByIntermediaire = currentUrl.includes(
        allQuery.value.level.intermediaire
      );
      const filterByAvance = currentUrl.includes(allQuery.value.level.avance);

      if (filterByDebutant || filterByIntermediaire || filterByAvance) {
        return (
          (filterByDebutant &&
            course.level === allQuery.value.level.debutant) ||
          (filterByIntermediaire &&
            course.level === allQuery.value.level.intermediaire) ||
          (filterByAvance && course.level === allQuery.value.level.avance)
        );
      }
      return true;
    },
    duration: (course: ProgramationCourses, currentUrl: string) => {
      const filterLessThan1Hour = currentUrl.includes('-1h');
      const filterBetween1And5Hours = currentUrl.includes('1-5h');
      const filterUpTo5Hours = currentUrl.includes('Ov5h');
      const filterMoreThan5Hours = currentUrl.includes('Ov5h');

      const courseHours =
        typeof course.duration === 'number'
          ? course.duration
          : parseInt(course.duration);

      if (
        filterLessThan1Hour ||
        filterBetween1And5Hours ||
        filterUpTo5Hours ||
        filterMoreThan5Hours
      ) {
        return (
          (filterLessThan1Hour && courseHours < 60) ||
          (filterBetween1And5Hours &&
            courseHours >= 60 &&
            courseHours <= 300) ||
          (filterUpTo5Hours && courseHours <= 300) ||
          (filterMoreThan5Hours && courseHours > 300)
        );
      }
      return true;
    }
  },
  aws: {
    language: (course: RavenCourse, currentUrl: string) => {
      const filterByEnglish = currentUrl.includes(
        allQuery.value.language.english
      );
      const filterByFrench = currentUrl.includes(
        allQuery.value.language.french
      );
      const courseLanguage = course.category?.[0]?.tags?.[0]?.title;

      if (filterByEnglish || filterByFrench) {
        return (
          (filterByEnglish &&
            courseLanguage === allQuery.value.language.english) ||
          (filterByFrench && courseLanguage === allQuery.value.language.french)
        );
      }
      return true;
    },
    type: (course: RavenCourse, currentUrl: string) => {
      const filterByParcours = currentUrl.includes(
        allQuery.value.type.parcours
      );
      const filterByCours = currentUrl.includes(allQuery.value.type.cours);

      if (filterByParcours || filterByCours) {
        return (
          (filterByParcours && course.long_description) ||
          (filterByCours && !course.long_description)
        );
      }
      return true;
    },
    level: (course: RavenCourse, currentUrl: string) => {
      const filterByDebutant = currentUrl.includes(
        allQuery.value.level.debutant
      );
      const filterByIntermediaire = currentUrl.includes(
        allQuery.value.level.intermediaire
      );
      const filterByAvance = currentUrl.includes(allQuery.value.level.avance);

      if (filterByDebutant || filterByIntermediaire || filterByAvance) {
        return (
          (filterByDebutant && course.skill_level === 'Fundamental') ||
          (filterByIntermediaire &&
            course.skill_level === allQuery.value.level.intermediaire) ||
          (filterByAvance && course.skill_level === 'Advanced')
        );
      }
      return true;
    },
    duration: (course: RavenCourse, currentUrl: string) => {
      const courseHours = convertTimeForFilter(parseInt(course.duration));
      const filterLessThan1Hour = currentUrl.includes('-1h');
      const filterBetween1And5Hours = currentUrl.includes('1-5h');
      const filterUpTo5Hours = currentUrl.includes('Ov5h');
      const filterMoreThan5Hours = currentUrl.includes('Ov5h');

      if (
        filterLessThan1Hour ||
        filterBetween1And5Hours ||
        filterUpTo5Hours ||
        filterMoreThan5Hours
      ) {
        return (
          (filterLessThan1Hour && courseHours < 60) ||
          (filterBetween1And5Hours &&
            courseHours >= 60 &&
            courseHours <= 300) ||
          (filterUpTo5Hours && courseHours <= 300) ||
          (filterMoreThan5Hours && courseHours > 300)
        );
      }
      return true;
    },
    domain: (course: RavenCourse, currentUrl: string) => {
      // Parcours de l'objet des domaines et de leurs mots-clés
      for (const [domain, keywords] of Object.entries(domainKeywords)) {
        // Vérifie si l'URL contient une référence au domaine
        const filterForDomain =
          currentUrl.includes(domain) ||
          currentUrl.includes(domain.replace(' ', '%20'));

        if (filterForDomain) {
          const filterByDomain = keywords.some(keyword =>
            course.roles?.toLowerCase().includes(keyword.toLowerCase())
          );

          return filterByDomain;
        }
      }
      return true;
    }
  },
  moodle: {
    language: (course: MoodleCourse, currentUrl: string) => {
      const filterByEnglish = currentUrl.includes(
        allQuery.value.language.english
      );
      const filterByFrench = currentUrl.includes(
        allQuery.value.language.french
      );

      if (filterByEnglish || filterByFrench) {
        return (
          (filterByEnglish &&
            course.langue === allQuery.value.language.english) ||
          (filterByFrench && course.langue === allQuery.value.language.french)
        );
      }
      return true;
    },
    type: (course: MoodleCourse, currentUrl: string) => {
      const filterByParcours = currentUrl.includes(
        allQuery.value.type.parcours
      );
      const filterByCours = currentUrl.includes(allQuery.value.type.cours);

      if (filterByParcours || filterByCours) {
        return (
          (filterByParcours &&
            course.categoryid &&
            course.type === allQuery.value.type.parcours) ||
          (filterByCours &&
            course.categoryid &&
            course.type === allQuery.value.type.cours)
        );
      }
      return true;
    },
    level: (course: MoodleCourse, currentUrl: string) => {
      const filterByDebutant = currentUrl.includes(
        allQuery.value.level.debutant
      );
      const filterByIntermediaire = currentUrl.includes(
        allQuery.value.level.intermediaire
      );
      const filterByAvance = currentUrl.includes(allQuery.value.level.avance);

      if (filterByDebutant || filterByIntermediaire || filterByAvance) {
        return (
          (filterByDebutant &&
            course.level === allQuery.value.level.debutant) ||
          (filterByIntermediaire &&
            course.level === allQuery.value.level.intermediaire) ||
          (filterByAvance && course.level === 'Advanced')
        );
      }
      return true;
    },
    duration: (course: MoodleCourse, currentUrl: string) => {
      const courseHours = convertTimeForFilter(course.duration);
      const filterLessThan1Hour = currentUrl.includes('-1h');
      const filterBetween1And5Hours = currentUrl.includes('1-5h');
      const filterUpTo5Hours = currentUrl.includes('Ov5h');
      const filterMoreThan5Hours = currentUrl.includes('Ov5h');

      if (
        filterLessThan1Hour ||
        filterBetween1And5Hours ||
        filterUpTo5Hours ||
        filterMoreThan5Hours
      ) {
        return (
          (filterLessThan1Hour && courseHours < 60) ||
          (filterBetween1And5Hours &&
            courseHours >= 60 &&
            courseHours <= 300) ||
          (filterUpTo5Hours && courseHours <= 300) ||
          (filterMoreThan5Hours && courseHours > 300)
        );
      }
      return true;
    }
  }
};

export { routes, allQuery, arrayOfCategory, filterLogics };
