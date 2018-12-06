import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../model/app-settings';
import {LocalStorageService} from './local-storage.service';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

export const APP_SETTINGS_KEY = 'APP_SETTINGS';

@Injectable()
export class AppSettingsService {

  constructor(private http: HttpClient,
              private localStorage: LocalStorageService) {
  }

  private static getDefaultSettings(): AppSettings {
    return {application: 'Default App Name', version: '0.0.0'}
  }

  getSettings(): Observable<AppSettings> {

    const settings = JSON.parse(this.localStorage.getItem(APP_SETTINGS_KEY));

    if (!settings || (<AppSettings>settings).application === undefined) {

      return this.http.get<AppSettings>('assets/app-settings.json')
          .pipe(
              map((res: AppSettings) => {
                const setting = res || AppSettingsService.getDefaultSettings();
                this.localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(setting));
                return res;
              }),
              catchError((error: any) => {
                console.log(`App settings not found. ${error}`);
                const defaultSettings = AppSettingsService.getDefaultSettings();
                this.localStorage.setItem(APP_SETTINGS_KEY, JSON.stringify(defaultSettings));
                return of(defaultSettings);
              })
          );
    }
    return of(settings);
  }


}
