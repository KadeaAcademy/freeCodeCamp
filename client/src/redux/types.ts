import { FlashApp, FlashMessageArg } from '../components/Flash/redux';
import {
  MoodleCourse,
  MoodleCoursesCatalogue,
  RavenCourse
} from '../client-only-routes/show-courses';
import rootReducer from './rootReducer';
import { ProgramationCourses } from './prop-types';
import { MainApp } from '.';

export interface State {
  [FlashApp]: FlashState;
  [MainApp]: {
    appUsername: string;
    recentlyClaimedBlock: null | string;
    canRequestProgressDonation: boolean;
    completionCount: number;
    currentChallengId: string;
    showCert: Record<string, unknown>;
    showCertFetchState: DefaultFetchState;
    user: Record<string, unknown>;
    userFetchState: DefaultFetchState;
    userProfileFetchState: DefaultFetchState;
    sessionMeta: {
      activeDonations: number;
    };
    showDonationModal: boolean;
    isOnline: boolean;
    donationFormState: DefaultDonationFormState;
  };
}

export interface FlashState {
  message: { id: string } & FlashMessageArg;
}

export interface DefaultFetchState {
  pending: boolean;
  complete: boolean;
  errored: boolean;
  error: null | string;
}

export interface DefaultDonationFormState {
  redirecting: boolean;
  processing: boolean;
  success: boolean;
  error: null | string;
}
export type UnifiedCourse =
  | MoodleCourse
  | RavenCourse
  | ProgramationCourses
  | MoodleCoursesCatalogue;

export const defaultFetchState = {
  pending: true,
  complete: false,
  errored: false,
  error: null
};

export const defaultDonationFormState = {
  redirecting: false,
  processing: false,
  success: false,
  error: ''
};

export type RootState = ReturnType<typeof rootReducer>;
