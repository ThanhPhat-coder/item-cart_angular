import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MusicModel} from "../models/music.model";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  MusicURL = "https://651128b1829fa0248e3f9479.mockapi.io/api/songs/"

  constructor(private http: HttpClient) {
  }

  getMusics(limit: number) : Observable<MusicModel> {
    return this.http.get<MusicModel>(`${this.MusicURL}${limit}`);
  }
}
