import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart/cart.services';
import { CONSTANTS, ConstantsService } from './core/services/constants.service';
import { UserService } from './core/services/user.service';
import {AppSettingsService} from './core/services/app-settings.service';
import {AppSettings} from '../app/core/model/app-settings';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  application: string;
  version: string;
  today: number = Date.now();

  constructor(
    private cartService: CartService,
    @Inject(CONSTANTS) private CONSTANT: ConstantsService,
    private userService: UserService,
    private router: Router,
    private appSettingsService: AppSettingsService) {
  }

  ngOnInit() {
    this.appSettingsService.getSettings()
    .subscribe((settings: AppSettings) => {
      this.application = settings.application;
      this.version = settings.version;
    });
  }

  cartSize(): number {
    return this.cartService.size();
  }

  isAuthenticated(): boolean {
    return this.userService.isAuthenticated();
  }

  isAdmin(): boolean {
    return this.userService.isAdmin();
  }

  getUsername(): string {
    return this.userService.getUsername();
  }

  logout() {
    this.userService.logout()
      .then(result => this.router.navigate(['/products']))
      .catch(error => alert(JSON.stringify(error)));
  }

}
