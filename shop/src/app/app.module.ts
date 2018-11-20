import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { ConstantsService } from './core/services/constants.service';
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
      provide: ConstantsService,
      useValue: new ConstantsService('Shop', '1.0.0.0')
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
