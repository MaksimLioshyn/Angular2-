import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  items: Array<Cart>;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.items = this.cartService.getCarts();
  }

}
