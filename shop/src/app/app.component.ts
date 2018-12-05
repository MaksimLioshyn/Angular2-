import { Component, Inject, Optional } from '@angular/core';
import { CartService } from './cart/cart.services';
import { CONSTANTS, ConstantsService } from './core/services/constants.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  application: string;
  version: string;
  today: number = Date.now();

  constructor(private cartService: CartService,
    @Inject(CONSTANTS) private CONSTANT: ConstantsService) {
    this.application = CONSTANT.Application;
    this.version = CONSTANT.Version;
  }

  cartSize(): number {
    return this.cartService.size();
  }

}
