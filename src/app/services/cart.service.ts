import {Injectable } from '@angular/core';
import {ProductModel} from "../models/product.model";

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

  products: ProductModel[] =[
    {
      id: 1,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQC21bq87J15ajtT4HsmrpaDpbPL9FR2dsdB7c-uS5FqdSDD-QBQpdezM3Tlhm8xoGXvMvrAaggGjTdSIdy5Bf_rFRgiu7o5n9XXKiPi6XvBfKoD7oWIvLZRFGc7Hquc8pHrsCY5w&usqp=CAc',
      name: 'Áo thun nu',
      size: 'XXL',
      price: 5000000,
      inStock: 10
    },
    {
      id: 2,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQC21bq87J15ajtT4HsmrpaDpbPL9FR2dsdB7c-uS5FqdSDD-QBQpdezM3Tlhm8xoGXvMvrAaggGjTdSIdy5Bf_rFRgiu7o5n9XXKiPi6XvBfKoD7oWIvLZRFGc7Hquc8pHrsCY5w&usqp=CAc',
      name: 'Áo thun nam',
      size: 'XL',
      price: 2000000,
      inStock: 10
    },
    {
      id: 3,
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQC21bq87J15ajtT4HsmrpaDpbPL9FR2dsdB7c-uS5FqdSDD-QBQpdezM3Tlhm8xoGXvMvrAaggGjTdSIdy5Bf_rFRgiu7o5n9XXKiPi6XvBfKoD7oWIvLZRFGc7Hquc8pHrsCY5w&usqp=CAc',
      name: 'Áo thun em be',
      size: 'L',
      price: 300000,
      inStock: 10
    }
  ]

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

