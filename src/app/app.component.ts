import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {CartService} from "./services/cart.service";
import {CurrencyPipe, NgIf} from "@angular/common";
import {AuthService} from "./services/auth.service";
import {ListProductComponent} from "./pages/list-product/list-product.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CurrencyPipe, NgIf, ListProductComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bt-trenlop5';


  cart: any[] = [];
  constructor(public cartService: CartService, public authService: AuthService) {
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





