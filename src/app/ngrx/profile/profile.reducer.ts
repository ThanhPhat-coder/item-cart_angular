import {ProfileState} from "./profile.state";
import * as ProfileActions from "./profile.action";
import {createReducer, on} from "@ngrx/store";

const initialState: ProfileState = {
  profiles: [],
  profile: null,
  isLoading: false,
  error: ''
};

export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.getAllProfiles, (state) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    }
  }),
  on(ProfileActions.getAllProfilesSuccess, (state, {profiles}) => {
    return {
      ...state,
      profiles: profiles,
      isLoading: false,
    }
  }),
  on(ProfileActions.getAllProfilesFailed, (state, error) => {
    return {
      ...state,
      isLoading: false,
      error: error.error
    }
  }),

  on(ProfileActions.searchProfiles, (state) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    }
  }),

  on(ProfileActions.searchProfilesSuccess, (state, {profiles}) => {
    return {
      ...state,
      profiles: profiles,
      isLoading: false,
    }
  }),

  on(ProfileActions.searchProfilesFailed, (state, error) => {
    return {
      ...state,
      isLoading: false,
      error: error.error
    }
  }),

  on(ProfileActions.updateProfile, (state) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    }
  }),

  on(ProfileActions.updateProfileSuccess, (state, {profile}) => {
    return {
      ...state,
      profile: profile,
      isLoading: false,
    }
  }),

  on(ProfileActions.updateProfileFailed, (state, error) => {
    return {
      ...state,
      isLoading: false,
      error: error.error
    }
  }),

  on(ProfileActions.deleteProfile, (state) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    }
  }),

  on(ProfileActions.deleteProfileSuccess, (state, {id}) => {
    return {
      ...state,
      profiles: state.profiles.filter(profile => profile.id !== id),
      isLoading: false,
    }
  }),

  on(ProfileActions.deleteProfileFailed, (state, error) => {
    return {
      ...state,
      isLoading: false,
      error: error.error
    }
  }),

  on(ProfileActions.addProfile, (state) => {
    return {
      ...state,
      isLoading: true,
      error: '',
    }
  }),

  on(ProfileActions.addProfileSuccess, (state, {profile}) => {
    return {
      ...state,
      profiles: [...state.profiles, profile],
      isLoading: false,
    }
  }),

  on(ProfileActions.addProfileFailed, (state, error) => {
    return {
      ...state,
      isLoading: false,
      error: error.error
    }
  }),

)
