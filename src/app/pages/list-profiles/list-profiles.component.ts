import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ProfileState} from "../../ngrx/profile/profile.state";
import {Store} from "@ngrx/store";
import {AsyncPipe} from "@angular/common";
import {ProfileCardComponent} from "../../components/profile-card/profile-card.component";
import * as ProfileActions from '../../ngrx/profile/profile.action'
import {Profile} from "../../models/profile.model";
@Component({
  selector: 'app-list-profiles',
  standalone: true,
  imports: [
    AsyncPipe,
    ProfileCardComponent
  ],
  templateUrl: './list-profiles.component.html',
  styleUrl: './list-profiles.component.scss'
})
export class ListProfilesComponent {
  profile$!:Observable<ProfileState>
  constructor(private store : Store<{profile: ProfileState}>) {
    this.profile$ = this.store.select('profile');
    this.store.dispatch(ProfileActions.getAllProfiles());

    this.store.dispatch(ProfileActions.searchProfiles({keyword: 'John'}));
    //this.store.dispatch(ProfileActions.updateProfile({Profile: {id: '1', name: 'John Cena', email: '11111', phone: '2222', address: '3333'}}));
    this.store.dispatch(ProfileActions.deleteProfile({id: '1'}));
    //this.store.dispatch(ProfileActions.addProfile({profile: {id: '4', name: 'John Helen', email: '11111', phone: '2222', address: '3333'}}));
  }
}
