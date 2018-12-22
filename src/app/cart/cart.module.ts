import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {SharedModule} from '../shared/shared.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from './cart.services';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ] ,
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule {}
