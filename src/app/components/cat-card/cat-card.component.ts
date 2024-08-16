import {Component, Input} from '@angular/core';
import {CatModel} from "../../models/cat.model";

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.scss'
})
export class CatCardComponent {
  @Input() cat!: CatModel

}
