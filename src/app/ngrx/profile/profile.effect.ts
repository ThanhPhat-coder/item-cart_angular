import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
// @ts-ignore
import {ProfileService} from "../../services/profile.service";
import * as ProfileActions from "./profile.action";
import {catchError, map, mergeMap, of} from "rxjs";

@Injectable()
export class ProfileEffect {
  constructor(private action$: Actions,
              private profileService: ProfileService) {
  }

  getAllProfiles$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ProfileActions.getAllProfiles),
      mergeMap(() => {

        return this.profileService.getAllProfiles().pipe(
          // @ts-ignore
          map(profiles => ProfileActions.getAllProfilesSuccess({profiles: profiles})),
          catchError(error => of(ProfileActions.getAllProfilesFailed({error: error})))
        )
      })
    )
  })


}
