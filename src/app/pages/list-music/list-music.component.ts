import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import * as MusicActions from "../../ngrx/music/music.action";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MusicComponent} from "../../components/music/music.component";
import {MusicState} from "../../ngrx/music/music.state";
import {MusicModel} from "../../models/music.model";


@Component({
  selector: 'app-list-music',
  standalone: true,
  imports: [MusicComponent, AsyncPipe, MatProgressSpinnerModule],
  templateUrl: './list-music.component.html',
  styleUrl: './list-music.component.scss'
})
export class ListMusicComponent {
  music$!: Observable<MusicState>

  constructor(private store: Store<{ music: MusicState }>) {
    this.music$ = this.store.select('music')
    this.store.dispatch(MusicActions.getAllMusics({limit: 10}))
    this.music$.subscribe(data => {
      console.log(data)
    })
  }

}
