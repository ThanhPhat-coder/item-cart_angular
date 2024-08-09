import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ListProductComponent} from "./pages/list-product/list-product.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {CalculatorComponent} from "./pages/calculator/calculator.component";

export const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent
  },
  {
    path: 'calculator',
    component: CalculatorComponent
  }
];
