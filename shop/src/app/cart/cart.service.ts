import { Injectable } from "@angular/core";
import { CartItem } from "./models/cart-item.model";
import { Product } from "../product/models/product.model";

@Injectable()
export class CartService {

  private sum: (prev: number, curr: number) => number = (p, c) => p + c;
  private cartItems: Array<CartItem> = [];

  size(): number {
    return this.cartItems.length;
  }

  isEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  getAll(): Array<CartItem> {
    return this.cartItems;
  }

  addProduct(product: Product): void {
    const item: CartItem = this.getById(product.id);
    if (item) {
      item.quantity++;
    } else {
      this.cartItems.push(new CartItem(product.id, product.name, product.price, 1));
    }
  }

  getById(id: number): CartItem {
    return this.cartItems.find(item => item.id === id);
  }

  remove(item: CartItem): boolean {
    const i: number = this.cartItems.findIndex(i => i.id === item.id);
    if (i > -1) {
      this.cartItems.splice(i, 1);
      return true;
    } else {
      return false;
    }
  }

  clear(): void {
    this.cartItems = [];
  }

  getTotalPrice(): number {
    return this.cartItems.map(i => i.quantity * i.price).reduce(this.sum, 0);
  }
}