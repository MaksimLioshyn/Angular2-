import {NgModule} from '@angular/core';
import {LocalStorageService} from './services/local-storage.service';
import {ChangeBackgroundDirective} from './directive/change-background.directive';
import {ChangeFontWeightDirective} from './directive/change-font-weight.directive';
import {ConfigOptionsService} from './services/config-options.service';


@NgModule({
  imports: [],
  declarations: [
    ChangeBackgroundDirective,
    ChangeFontWeightDirective
  ],
  exports: [
    ChangeBackgroundDirective,
    ChangeFontWeightDirective
  ],
  providers: [
    LocalStorageService
  ]
})
export class CoreModule {
}
