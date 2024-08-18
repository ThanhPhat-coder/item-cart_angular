import {createAction, props} from "@ngrx/store";
import {Profile} from "../../models/profile.model";

export const getAllProfiles = createAction(
  '[Profile] Get All Profiles');

export const getAllProfilesSuccess = createAction(
  '[Profile] Get All Profiles Success',
  props<{ profiles: Profile[] }>());

export const getAllProfilesFailed = createAction(
  '[Profile] Get All Profiles Failure',
  props<{ error: string }>());


export const searchProfiles = createAction('[Profile] Search Profiles', props<{ keyword: string }>());
export const searchProfilesSuccess = createAction( '[Profile] Search Profiles Success', props<{ profiles: Profile[] }>());
export const searchProfilesFailed = createAction( '[Profile] Search Profiles Failure', props<{ error: string }>());

export const updateProfile = createAction( '[Profile] Update Profile', props<{ profile: Profile }>());
export const updateProfileSuccess = createAction( '[Profile] Update Profile Success', props<{ profile: Profile }>());
export const updateProfileFailed = createAction( '[Profile] Update Profile Failure', props<{ error: string }>());

export const deleteProfile = createAction( '[Profile] Delete Profile', props<{ id: string }>());
export const deleteProfileSuccess = createAction( '[Profile] Delete Profile Success', props<{ id: string }>());
export const deleteProfileFailed = createAction( '[Profile] Delete Profile Failure', props<{ error: string }>());

export const addProfile = createAction( '[Profile] Add Profile', props<{ profile: Profile }>());
export const addProfileSuccess = createAction( '[Profile] Add Profile Success', props<{ profile: Profile }>());
export const addProfileFailed = createAction( '[Profile] Add Profile Failure', props<{ error: string }>());

