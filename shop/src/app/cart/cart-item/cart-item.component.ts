import { Component, Input, OnInit } from '@angular/core';
import { CartService } from "../cart.service";
import { CartItem } from "../models/cart-item.model";

@Component({
  selector: '[cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
  }

  onRemove(): void {
    this.cartService.remove(this.item);
  }
}
