import { Injectable } from '@angular/core';
import { Product, Worth } from './model/product.model'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _index: number;
  public get index(): number {
    return this._index;
  }
  public set index(value: number) {
    this._index = value;
  }
  
  product: Product;
  products: Array<Product>;

  constructor() {
    this.index = 1;

    this.products = [
      new Product(this.index++, 'Product 1', 'Description product 1', 100, Worth.hight, true, 'Label 1'),
      new Product(this.index++, 'Product 2', 'Description product 2', 200, Worth.medium, true, 'Label 2'),
      new Product(this.index++, 'Product 3', 'Description product 3', 300, Worth.low, true, 'Label 3')
    ];

    this.product = new Product(this.index++, 'Product 4', 'Description product 4', 400, Worth.low, true, 'Label 4');
  }

  getProduct(): Product {
    return this.product;
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  create() {
    this.products.push(this.product);
  }
}
