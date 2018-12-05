import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart/cart.services';
import { CONSTANTS, ConstantsService } from './core/services/constants.service';
import { UserService } from './core/services/user.service';


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
    private router: Router) {
  }

  ngOnInit() {
    this.application = this.CONSTANT.Application;
    this.version = this.CONSTANT.Version;
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
