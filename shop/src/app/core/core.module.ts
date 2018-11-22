import {NgModule} from '@angular/core';
import {LocalStorageService} from './services/local-storage.service';
import {ChangeBackgroundDirective} from './directive/change-background.directive';
import {ChangeFontWeightDirective} from './directive/change-font-weight.directive';
import {ConfigOptionsService} from './services/config-options.service';
import { SortItemPipe } from './pipes/sort-item.pipe';


@NgModule({
  imports: [],
  declarations: [
    ChangeBackgroundDirective,
    ChangeFontWeightDirective,
    SortItemPipe
  ],
  exports: [
    ChangeBackgroundDirective,
    ChangeFontWeightDirective,
    SortItemPipe
  ],
  providers: [
    LocalStorageService
  ]
})
export class CoreModule {
}
