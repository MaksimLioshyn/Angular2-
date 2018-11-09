import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart/cart-list/cart-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartListComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
