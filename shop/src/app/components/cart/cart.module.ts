import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartService } from './cart.service';
import { CartListComponent } from './cart-list/cart-list.component';

@NgModule({
  declarations: [CartComponent, CartListComponent],
  imports: [
    CommonModule
  ],
  providers: [CartService],
  exports: [CartListComponent, CartComponent]
})
export class CartModule { }
