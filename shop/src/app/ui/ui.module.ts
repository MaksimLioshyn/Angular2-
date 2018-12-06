import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent, HeaderComponent, LayoutComponent} from './index';
import { UiRoutingModule } from './ui-routing.module';

@NgModule({
  imports: [
    UiRoutingModule,
    CommonModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class UiModule { }
