import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {CoreModule} from '../core/core.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartService } from './cart.services';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    CommonModule,
    CartService,
    CoreModule,
    FormsModule
  ],
  providers: [CartService],
  exports: [CartListComponent]
})
export class CartModule { }
