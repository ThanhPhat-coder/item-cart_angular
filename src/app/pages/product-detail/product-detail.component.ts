import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductModel} from "../../models/product.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  detailProduct!: ProductModel;

  constructor(private CartService: CartService, private activatedRoute: ActivatedRoute) {
    const {id} = this.activatedRoute.snapshot.params;
    this.detailProduct = this.CartService.products.find(product => product.id == parseInt(id)) as ProductModel;
    console.log(this.detailProduct)


  }

}
