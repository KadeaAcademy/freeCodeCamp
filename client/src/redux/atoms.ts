import { atom, AtomEffect, DefaultValue, selector } from 'recoil';
import {
  MoodleCourse,
  MoodleCourseCategory,
  MoodleCoursesCatalogue,
  RavenCourse
} from '../client-only-routes/show-courses';
import { RavenTokenData } from '../utils/ajax';
import { UnifiedCourse } from './types';
// import { MoodleCourseCategory, MoodleCoursesCatalogue } from '../client-only-routes/show-courses';

// Effet pour synchroniser l'état avec le localStorage
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const localStorageEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const savedValue =
      typeof window != 'undefined' && window.localStorage
        ? localStorage.getItem(key)
        : null;
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue) as T);
    }

    onSet((newValue, _, isReset) => {
      if (newValue instanceof DefaultValue || isReset) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(newValue));
      }
    });
  };

// Atom pour le titre de la catégorie
export const titleOfCategorieValue = atom<string>({
  key: 'titleOfCategorieValue',
  default: '',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('titleOfCategorieValue')]
});

//atom pour la valeur de la category lorsqu'on clique sur le
export const valueOfLanguage = atom<string | null>({
  key: 'valueOfLanguage',
  default: '',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('valueOfLanguage')]
});

//atom pour la valeur du type des contenu
export const valueOfTypeCourse = atom<string | null>({
  key: 'valueOfTypeCourse',
  default: '',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('valueOfTypeCourse')]
});

//atom pour la valeur du level des contenu
export const valueOfTypeLevel = atom<string | null>({
  key: 'valueOfTypeLevel',
  default: '',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('valueOfTypeLevel')]
});

//atom pour la valeur du token pour des contenu Raven
export const tokenRaven = atom<RavenTokenData | null>({
  key: 'tokenRaven',
  default: null,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('tokenRaven')]
});

//atom pour la valeur du la duration des contenu
export const valueOfTypeDuration = atom<string | null>({
  key: 'valueOfTypeDuration',
  default: '',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('valueOfTypeDuration')]
});

//atom pour la valeur de la category lorsqu'on clique sur le
export const checkedBox = atom<boolean>({
  key: 'checkedBox',
  default: true,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('checkedBox')]
});

export const changeState = atom<boolean>({
  key: 'changeState',
  default: false,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('changeState')]
});

export const isDataLoadingTrue = atom<boolean>({
  key: 'isDataLoadingTrue',
  default: true,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('isDataLoadingTrue')]
});

export const asCategoryHaveCourses = atom<boolean>({
  key: 'asCategoryHaveCourses',
  default: true,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('asCategoryHaveCourses')]
});

// Atom pour les données des cours, avec typage explicite
export const allDataCourses = atom<UnifiedCourse[]>({
  key: 'allDataCourses',
  default: [], // Par défaut, un tableau vide de type RavenCourse[]
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('allDataCourses')]
});

// Atom pour les données des cours, avec typage explicite
export const myAllDataCourses = atom<unknown[]>({
  key: 'myAllDataCourses',
  default: [], // Par défaut, un tableau vide de type RavenCourse[]
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('myAllDataCourses')]
});

export const valueOfCurrentCategory = atom<number | null>({
  key: 'valueOfCurrentCategory',
  default: null, // Par défaut, un tableau vide de type RavenCourse[]
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('valueOfCurrentCategory')]
});

export const coursesRaven = atom<RavenCourse[] | null | undefined>({
  key: 'coursesRaven',
  default: [],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('coursesRaven')]
});

export const coursesMoodle = atom<MoodleCoursesCatalogue | null | undefined>({
  key: 'coursesMoodle',
  default: null,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('coursesMoodle')]
});

export const myDataMoodle = atom<MoodleCourse[] | undefined>({
  key: 'myDataMoodle',
  default: [],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('myDataMoodle')]
});

export const pathRaven = atom<RavenCourse[]>({
  key: 'pathRaven',
  default: [],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('pathRaven')]
});

export const myDataRaven = atom<RavenCourse[] | undefined>({
  key: 'myDataRaven',
  default: [],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('myDataRaven')]
});

export const centraliseRavenData = atom<RavenCourse[]>({
  key: 'centraliseRavenData',
  default: [],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('centraliseRavenData')]
});

export const categoryCours = atom<MoodleCourseCategory[] | null | undefined>({
  key: 'categoryCours',
  default: [],
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('categoryCours')]
});

export const categoryCounter = atom<number>({
  key: 'categoryCounter',
  default: 0,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  effects_UNSTABLE: [localStorageEffect('categoryCounter')]
});

export const currentCategorySelector = selector<number | null>({
  key: 'currentCategorySelector',
  get: ({ get }) => {
    return get(valueOfCurrentCategory);
  },
  set: ({ set, get }, newValue) => {
    const currentValue = get(valueOfCurrentCategory);

    // Mettre à jour l'état seulement si la valeur a vraiment changé
    if (currentValue !== newValue) {
      set(valueOfCurrentCategory, newValue);
    }
  }
});
