import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable()
export class ProductServices {

  private products: Array<Product> = [
    new Product(1, 'Wireless Mouse', 'Bluetooth wireless super small mouse', 350, true, []),
    new Product(2, 'Monitor 22', 'Samsung 22inch screen', 2500, true, []),
    new Product(3, 'Monitor 20', 'LG 20inch screen', 2300, false, []),
    new Product(4, 'Standard Keyboard', 'Logitech keyboard', 150, true, []),
    new Product(5, 'Color Printer', 'M590 Printer', 1350, true, []),
    new Product(6, 'HP ProBook', 'HP ProBook', 12000, true, ['Comfy', 'Eldorado', 'PSShop'])
  ];

  getAll(): Array<Product> {
    return this.products;
  }
}
