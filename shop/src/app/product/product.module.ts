import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ProductItemComponent} from './product-item/product-item.component';
import {ProductServices} from './product.services';
import {ProductListComponent} from './product-list/product-list.component';
import {CoreModule} from '../core/core.module';
import {ProductRoutingModule} from './product-routing.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,

    ProductRoutingModule
  ],
  declarations: [ProductListComponent, ProductItemComponent, ProductViewComponent, ProductComponent],
  providers: [ProductServices],
  exports: []
})
export class ProductModule {
}
