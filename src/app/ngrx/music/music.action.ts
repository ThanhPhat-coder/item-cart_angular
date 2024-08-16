import {createAction, props} from "@ngrx/store";
import {MusicModel} from "../../models/music.model";

export const getAllMusics = createAction("[Cat] Get All Musics", props<{ limit: number }>());
export const getAllMusicSuccess = createAction("[Cat] Get All Musics Success", props<{ musics: MusicModel }>());
export const getAllMusicsError = createAction("[Cat] Get All Musics Error", props<{ error: string }>());
