import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductServices} from '../product.services';
import {CartService} from '../../cart/cart.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Array<Product>;

  constructor(private productService: ProductServices,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

  onAddToCart(product: Product): void {
    if (product.isAvailable) {
      this.cartService.addProduct(product);
    }
  }
}
