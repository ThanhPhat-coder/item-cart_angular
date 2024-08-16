import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {provideHttpClient} from "@angular/common/http";
import {provideEffects} from "@ngrx/effects";
import {catReducer} from "./ngrx/cat/cat.reducer";
import {CatEffect} from "./ngrx/cat/cat.effect";
import {MusicEffect} from "./ngrx/music/music.effect";
import {ProfileEffect} from "./ngrx/profile/profile.effect";

export const appConfig: ApplicationConfig = {
  providers: [provideStore({}),
    provideEffects(CatEffect,MusicEffect, ProfileEffect),
    provideHttpClient(), provideAnimationsAsync(),provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({ "projectId": "fir-web24a-246", "appId": "1:876414579256:web:47c16ead1d715ff6c62ccd", "storageBucket": "fir-web24a-246.appspot.com", "apiKey": "AIzaSyC6s-Qhf0P5DRzpIsTNnowlvX18eSQ5T2w", "authDomain": "fir-web24a-246.firebaseapp.com", "messagingSenderId": "876414579256" })), provideAuth(() => getAuth()), provideStore(reducers, { metaReducers })]
};
