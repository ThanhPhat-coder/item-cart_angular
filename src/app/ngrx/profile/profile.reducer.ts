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
  })
)
