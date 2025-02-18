import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLink,
    ProductsRoutingModule,
],
exports: [ProductsRoutingModule]
})
export class ProductsModule { }
