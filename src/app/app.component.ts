import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {CartService} from "./services/cart.service";
import {AsyncPipe, CurrencyPipe, NgIf} from "@angular/common";
import {AuthService} from "./services/auth.service";
import {ListProductComponent} from "./pages/list-product/list-product.component";
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './actions/counter.action';
import {CatCardComponent} from "./components/cat-card/cat-card.component";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {ProfileService} from "./services/profile.service";


@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, CardComponent, CurrencyPipe, NgIf, ListProductComponent, RouterLink, AsyncPipe, CatCardComponent, MatProgressSpinner],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Bt-trenlop5';

  cart: any[] = [];
  constructor(public profileService: ProfileService, public cartService: CartService, public authService: AuthService, private store: Store<{ counter: number }>) {
    this.count$ = this.store.select('counter')
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


  count$?: Observable<number>
  increment() {
    this.store.dispatch(increment())
  }
  decrement() {
    this.store.dispatch(decrement())
  }
  reset() {
    this.store.dispatch(reset())
  }
}





