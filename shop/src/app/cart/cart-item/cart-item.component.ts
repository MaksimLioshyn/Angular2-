import {Component, Input, OnInit, Optional} from '@angular/core';
import {CartService} from '../cart.services';
import {Cart, ICart} from '../models/cart.model';
import {GeneratorService} from '../../core/services/generator.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: ICart;
  hash: string;

  constructor(private cartService: CartService,
              @Optional() private generatorService: GeneratorService) {
    this.hash = this.generatorService && this.generatorService.generate();
  }

  ngOnInit() {
  }

  onRemove(): void {
    this.cartService.remove(this.item);
  }

}
