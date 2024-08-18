import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../models/profile.model";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  url = "http://localhost:3000/profile";
  constructor(private http: HttpClient) {}

  getAllProfiles() {
    return this.http.get<Profile[]>(`${this.url}/all`);
  }

  deleteProfile(id: string){
    return this.http.delete(`${this.url}/${id}`);
  }

  searchProfiles(keyword: string) {
    return this.http.get<Profile[]>(`${this.url}/search/${keyword}`);
  }

  updateProfile(profile: Profile) {
    return this.http.put<Profile>(`${this.url}/${profile.id}`, profile);
  }

  addProfile(profile: Profile) {
    return this.http.post<Profile>(`${this.url}`, profile);
  }

  getProfileById(id: string) {
    return this.http.get<Profile>(`${this.url}/${id}`);
  }
}
