import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent, HeaderComponent, LayoutComponent} from './index';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    AppRoutingModule,
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
