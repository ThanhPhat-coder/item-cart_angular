import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {counterReducer} from "./counter.reducer";
import {catReducer} from "../ngrx/cat/cat.reducer";
import {musicReducer} from "../ngrx/music/music.reducer";
import {profileReducer} from "../ngrx/profile/profile.reducer";
export interface State {}

export const reducers: ActionReducerMap<State> = {
  counter: counterReducer,
  cat: catReducer,
  music: musicReducer,
  profile: profileReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
