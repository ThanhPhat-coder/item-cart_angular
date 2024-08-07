import { Injectable } from '@angular/core';
import {Auth, signInWithPopup, GoogleAuthProvider} from "@angular/fire/auth";
import firebase from "firebase/compat";
//import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : Auth) { }

  currentUser: any;

  async login() {
    const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    const token = await credential.user?.getIdToken();
    this.currentUser = credential.user;
  }
  async logout() {
    await this.auth.signOut();
    this.currentUser = null;
  }


}
