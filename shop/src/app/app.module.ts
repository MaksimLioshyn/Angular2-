import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import {CONSTANTS} from './core/services/constants.service';
import { CartModule } from './cart/cart.module';
import { ConfigOptionsService } from './core/services/config-options.service';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ProductModule,
    CartModule,
    CoreModule
  ],
  providers: [
    ConfigOptionsService,
    {
      provide: CONSTANTS,
      useValue: {Application: 'Shop-Shop-Shop', Version: '1.0.0.0'}}
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
