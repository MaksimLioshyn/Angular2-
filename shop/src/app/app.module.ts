import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ProductModule} from './product/product.module';
import {CartModule} from './cart/cart.module';

import {CONSTANTS, ConfigOptionsService, APP_SETTINGS_KEY } from './core/services';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    CartModule,
    ProductModule,
    AppRoutingModule,

    UiModule,
  ],
  providers: [
    ConfigOptionsService,
    {
      provide: CONSTANTS,
      useValue: {
        Application: 'Shop-Shop-Shop',
        Version: '1.0.0.0'
      }
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    localStorage.removeItem(APP_SETTINGS_KEY);
  }
}
