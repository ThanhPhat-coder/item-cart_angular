import {createReducer, on} from "@ngrx/store";
import {MusicState} from "./music.state";
import * as MusicActions from "./music.action";

const initialState: MusicState = {
  musics: [],
  loading: false,
  error: ''
};

export const musicReducer = createReducer(
  initialState,
  on(MusicActions.getAllMusics, (state, quantity) => {
    return {
      ...state,
      loading: true,
      error: ''
    }
  }),
  on(MusicActions.getAllMusicSuccess, (state, {musics}) => {
    let currentMusics = [...state.musics];
    currentMusics.push(musics);
    return {
      ...state,
      musics:currentMusics,
      loading: false,
    }
  }),
  on(MusicActions.getAllMusicsError, (state, error) => {
    return {
      ...state,
      loading: false,
      error: error.error
    }
  })
)
