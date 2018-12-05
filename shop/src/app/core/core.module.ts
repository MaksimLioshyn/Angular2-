import {NgModule, Optional, SkipSelf} from '@angular/core';
import {LocalStorageService} from './services/local-storage.service';
import {ChangeBackgroundDirective} from './directive/change-background.directive';
import {ChangeFontWeightDirective} from './directive/change-font-weight.directive';
import { SortItemPipe } from './pipes/sort-item.pipe';
import {UserService} from './services/user.service';
import {AdminGuard} from './guard/admin.guard';


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
    LocalStorageService,
    UserService,
    AdminGuard
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
}
