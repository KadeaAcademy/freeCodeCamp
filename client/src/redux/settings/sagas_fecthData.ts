// sagas.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  RavenTokenData,
  getAwsPath,
  getRavenTokenDataFromLocalStorage
} from '../../utils/ajax';
import {
  RavenCourse,
  RavenFetchCoursesDto
} from '../../client-only-routes/show-courses';
import envData from '../../../../config/env.json';
import {
  fetchRavenCoursesSuccess,
  fetchRavenCoursesFailure,
  FETCH_RAVEN_COURSES_REQUEST
} from './actions_fetchData';

// const { moodleApiBaseUrl, moodleApiToken, moodleBaseUrl, ravenAwsApiKey } =
//   envData;
const { ravenAwsApiKey } = envData;

const ravenLocalToken: RavenTokenData | null =
  getRavenTokenDataFromLocalStorage();

function* fetchRavenCoursesSaga() {
  try {
    const ravenData: RavenFetchCoursesDto = {
      apiKey: ravenAwsApiKey,
      token: ravenLocalToken?.token || '',
      currentPage: 1,
      fromDate: '01-01-2023',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      valid_to: '06-24-2024'
    };
    /* eslint-disable @typescript-eslint/no-unsafe-assignment */
    const courses: RavenCourse[] = yield call(getAwsPath, ravenData);
    yield put(fetchRavenCoursesSuccess(courses));
  } catch (error) {
    yield put(fetchRavenCoursesFailure(error));
  }
}

export function* watchFetchRavenCourses() {
  yield takeLatest(FETCH_RAVEN_COURSES_REQUEST, fetchRavenCoursesSaga);
}
