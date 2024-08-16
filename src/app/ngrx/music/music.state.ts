import {MusicModel} from "../../models/music.model";

export interface MusicState {
  musics: MusicModel[];
  loading: boolean;
  error: string;
}
