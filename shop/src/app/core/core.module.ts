import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {LocalStorageService} from './services/local-storage.service';
import {UserService} from './services/user.service';
import {AppSettingsService} from './services/app-settings.service';

import {AdminGuard} from './guard/admin.guard';

import {DefaultHeadersInterceptor} from './interceptor/default-headers.interceptor';
import {TimingInterceptor} from './interceptor/timing.interceptor';


@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    LocalStorageService,
    UserService,
    AdminGuard,
    AppSettingsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true,
    }
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule is already loaded. Import it in the AppModule only.`);
    }
  }
}
