import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {CartService} from "./services/cart.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bt-trenlop5';


  cart: any[] = [];
  constructor(public cartService: CartService) {
  }
  addtoCart(value: any) {
    this.cart.push(value);
    console.log(this.cart);
    console.log("OK");
  }
  //viết hàm removetoCart để xóa sản phẩm khỏi giỏ hàng
  removetoCart(value: any) {
    this.cart.splice(value, 1);
    console.log(this.cart);
    console.log("OK");
  }

}





