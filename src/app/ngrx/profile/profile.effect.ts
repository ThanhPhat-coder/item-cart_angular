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

  searchProfiles$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ProfileActions.searchProfiles),
      mergeMap((action) => {
        return this.profileService.searchProfiles(action.keyword).pipe(
          map(profiles => ProfileActions.searchProfilesSuccess({profiles: profiles})),
          catchError(error => of(ProfileActions.searchProfilesFailed({error: error})))
        )
      })
    )
  })

  updateProfile$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ProfileActions.updateProfile),
      mergeMap((action) => {
        return this.profileService.updateProfile(action.profile).pipe(
          map(profile => ProfileActions.updateProfileSuccess({profile: profile})),
          catchError(error => of(ProfileActions.updateProfileFailed({error: error})))
        )
      })
    )
  })

  deleteProfile$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ProfileActions.deleteProfile),
      mergeMap((action) => {
        return this.profileService.deleteProfile(action.id).pipe(
          map(() => ProfileActions.deleteProfileSuccess({id: action.id})),
          catchError(error => of(ProfileActions.deleteProfileFailed({error: error})))
        )
      })
    )
  })

  addProfile$ = createEffect(() => {
    return this.action$.pipe(
      ofType(ProfileActions.addProfile),
      mergeMap((action) => {
        return this.profileService.addProfile(action.profile).pipe(
          map(profile => ProfileActions.addProfileSuccess({profile: profile})),
          catchError(error => of(ProfileActions.addProfileFailed({error: error})))
        )
      })
    )
  })



}
