import { Component, OnInit } from '@angular/core';
import { AppSettingsService} from './core/services/index';
import { AppSettings } from '../app/core/model/app-settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  application: string;
  version: string;

  constructor(
    private appSettingsService: AppSettingsService) {
  }

  ngOnInit() {
    this.appSettingsService.getSettings()
    .subscribe((settings: AppSettings) => {
      this.application = settings.application;
      this.version = settings.version;
    });
  }
}
