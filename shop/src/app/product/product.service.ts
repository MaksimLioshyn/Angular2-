import { Injectable } from '@angular/core';
import { Product } from './models/product.model';

@Injectable()
export class ProductService {

  index: number;
  products: Array<Product>;

  constructor() {
    this.index = 1;

    this.products = [
      new Product(this.index++, 'Product1'),
      new Product(this.index++, 'Product2'),
      new Product(this.index++, 'Product3')
    ];
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  create(name: string) {
    this.products.push(new Product(this.index++, name));
  }
}