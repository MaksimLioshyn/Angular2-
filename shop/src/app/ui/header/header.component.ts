import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../core/services/index';
import { CartService } from '../../cart/cart.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private userService: UserService,
    private router: Router,
  ) { }

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
