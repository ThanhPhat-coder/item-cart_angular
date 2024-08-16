import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as MusicActions from "./music.action";
import {catchError, exhaustMap, map, mergeMap, of} from "rxjs";
import {MusicService} from "../../services/music.service";

@Injectable()
export class MusicEffect {
  constructor(private action$: Actions,
              private musicService: MusicService) {
  }

  getMusics$ = createEffect(() =>
    this.action$.pipe(
      ofType(MusicActions.getAllMusics),
      mergeMap((quantity) => this.musicService.getMusics(quantity.limit).pipe(
          map(musics => MusicActions.getAllMusicSuccess({musics})),
          catchError(error => of(MusicActions.getAllMusicsError({error})
            )
          )
        )
      )
    )
  )
}
