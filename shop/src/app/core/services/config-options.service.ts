import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { ConfigOptions } from './models/config-options.model';

@Injectable()
export class ConfigOptionsService {

  constructor(
    public localStorageService: LocalStorageService) {
  }

  setConfig(config: ConfigOptions) {
    try {
      const configStr = JSON.stringify(config);
      this.localStorageService.setItem('CONFIG_NAME', configStr);
    } catch (reason) {
      throw reason;
    }
  }
   getConfig() {
    try {
      const configStr = this.localStorageService.getItem('CONFIG_NAME');
      return JSON.parse(configStr);
    } catch (reason) {
      throw reason;
    }
  }

}
