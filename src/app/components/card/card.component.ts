import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {ProductModel} from "../../models/product.model";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() product!: ProductModel;
  constructor(public cartService: CartService) {
  }
  addToCart(value: any) {
    this.cartService.addtoCart(value);
  }
  removetoCart(value: any) {
    this.cartService.removetoCart(value);
  }
  //sử dụng @output để truyền dữ liệu từ con lên cha
  @Output() buttonClick = new EventEmitter<any>();
  //sử dụng hàm này để truyền dữ liệu từ con lên cha
  clickButton(value: any) {
    this.buttonClick.emit(value);
    console.log("OK")
  }
}
