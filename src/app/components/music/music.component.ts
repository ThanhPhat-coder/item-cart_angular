import {Component, Input} from '@angular/core';
import {MusicModel} from "../../models/music.model";

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.scss'
})
export class MusicComponent {
  @Input() music!: MusicModel


}
