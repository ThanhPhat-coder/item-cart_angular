import {Component, Input} from '@angular/core';
import {CardComponent} from "../../components/card/card.component";
import {CartService} from "../../services/cart.service";
import {RouterLink} from "@angular/router";
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {
  @Input() product!: ProductModel;
  constructor(public CartService: CartService) {

  }
}
