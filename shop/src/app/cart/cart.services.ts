import {Injectable } from '@angular/core';
import {Cart, ICart} from './models/cart.model';
import {Product} from '../product/models/product.model';

@Injectable()
export class CartService {

  constructor() {
  }
  private items: Array<ICart> = [];

  private sum: (prev: number, curr: number) => number = (p, c) => p + c;

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  getAll(): Array<ICart> {
    return this.items;
  }

  addProduct(product: Product, quantity: number = 1): void {
    const item: ICart = this.getById(product.id);
    if (item) {
      item.quantity = item.quantity + quantity;
    } else {
      this.items.push(new Cart(product.id, product.name, product.price, 1));
    }
  }

  getById(id: number): ICart {
    return this.items.find(item => item.id === id);
  }

  remove(item: ICart): boolean {
    const i: number = this.items.findIndex(index => index.id === item.id);
    if (i > -1) {
      this.items.splice(i, 1);
      return true;
    } else {
      return false;
    }
  }

  clear(): void {
    this.items = [];
  }

  getTotalPrice(): number {
    return this.items.map(i => i.quantity * i.price).reduce(this.sum, 0);
  }
}
