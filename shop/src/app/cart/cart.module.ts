import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartServicesModule } from './cart-services.module';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule,
    CartServicesModule
  ]
})
export class CartModule { }
