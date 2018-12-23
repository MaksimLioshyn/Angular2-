import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {ChangeBackgroundDirective} from './directive/change-background.directive';
import {ChangeFontWeightDirective} from './directive/change-font-weight.directive';
import {SortItemPipe} from './pipes/sort-item.pipe';
import {LoginFormComponent} from './login-form/login-form.component';
import {PathNotFoundComponent} from './path-not-found/path-not-found.component';
import { arr } from './arr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const importses = [
  ChangeBackgroundDirective,
  ChangeFontWeightDirective,
  SortItemPipe,
  PathNotFoundComponent,
  LoginFormComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    [...arr]
  ],
  declarations: [
    importses
  ],
  exports: [
    importses,
    ReactiveFormsModule,
    [...arr]
  ],
  providers: []
})
export class SharedModule {}
