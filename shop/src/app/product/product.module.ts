import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import {ProductItemComponent} from './product-item/product-item.component';
import {PRODUCT_SERVICE} from './service/product.service';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductRoutingModule} from './product-routing.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product.component';
import {SharedModule} from '../shared/shared.module';
import {HttpProductService} from './service/http-product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductItemComponent,
    ProductViewComponent,
    ProductComponent
  ],
  providers: [
    {
      provide: PRODUCT_SERVICE,
      useClass: HttpProductService
    }
  ],
  exports: []
})
export class ProductModule {}
