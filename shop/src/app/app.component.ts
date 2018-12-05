import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from './cart/cart.services';
import { CONSTANTS, ConstantsService } from './core/services/constants.service';
import { UserService } from './core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  application: string;
  version: string;
  today: number = Date.now();

  constructor(private cartService: CartService,
    @Inject(CONSTANTS) private CONSTANT: ConstantsService,
    private userService: UserService,
    private router: Router) {

    this.application = CONSTANT.Application;
    this.version = CONSTANT.Version;
  }

  ngOnInit() {
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
