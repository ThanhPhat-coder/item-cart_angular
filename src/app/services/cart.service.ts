import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any[] = [];

  addtoCart(item: any) {
    const existingItem = this.cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }

    console.log(this.cart);
    console.log("OK");
  }


  removetoCart(item: any) {
    this.cart.splice(item, 1);
    console.log(this.cart);
    console.log("OK");
  }

  getTotalPrice(): number {
    let total = 0;
    this.cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  }

  constructor() { }
}

