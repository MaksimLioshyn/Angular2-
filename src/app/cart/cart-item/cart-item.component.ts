import { Component, Input, OnInit, Optional } from '@angular/core';
import { CartService } from '../cart.services';
import { ICart } from '../models/cart.model';
import { ConfigOptionsService } from '../../core/services/config-options.service';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() item: ICart;
  hash: string;

  constructor(
    private cartService: CartService,
    @Optional() private configOptionsService: ConfigOptionsService
  ) {
  }

  ngOnInit() {
    console.log(this.hash);
    this.hash = this.configOptionsService.localStorageService.getItem(this.item.id.toString());
  }

  onRemove(): void {
    this.cartService.remove(this.item);
  }
}
