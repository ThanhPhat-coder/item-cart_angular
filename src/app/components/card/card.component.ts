import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor(public cartService: CartService) {
  }
  addToCart(value: any) {
    this.cartService.addtoCart(value);
  }
  removetoCart(value: any) {
    this.cartService.removetoCart(value);
  }

  products =[
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

  //sử dụng @output để truyền dữ liệu từ con lên cha
  @Output() buttonClick = new EventEmitter<any>();
  //sử dụng hàm này để truyền dữ liệu từ con lên cha
  clickButton(value: any) {
    this.buttonClick.emit(value);
    console.log("OK")
  }
}
