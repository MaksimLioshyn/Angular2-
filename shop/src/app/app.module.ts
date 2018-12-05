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
import { PathNotFoundComponent } from './shared/path-not-found/path-not-found.component';
import { LoginFormComponent } from './shared/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PathNotFoundComponent,
    LoginFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CoreModule,

    CartModule,
    ProductModule,

    AppRoutingModule,
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
