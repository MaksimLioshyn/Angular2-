import { Injectable } from '@angular/core';
import { Cart, ICart } from './model/cart.model';
import { Product, Worth } from '../product/model/product.model'

export interface Info {
    total: number;
    totalSum: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {

    _index: number; 
    index: number;
    carts: Array<ICart>;
    products: Array<Product>;

    constructor() {
        this._index = 1;

        this.products = [
            new Product(this.index++, 'Product 1', 'Description product 1', 100, Worth.hight, true, 'Label 1'),
            new Product(this.index++, 'Product 2', 'Description product 2', 200, Worth.medium, true, 'Label 2'),
            new Product(this.index++, 'Product 3', 'Description product 3', 300, Worth.low, true, 'Label 3')
        ];

        this.carts = [
            new Cart(this._index++, 'cart item 1', [this.products[0]]),
            new Cart(this._index++, 'cart item 2', [this.products[2], this.products[1]]),
            new Cart(this._index++, 'cart item 3', [])
        ];
    }

    getCarts(): Array<ICart> {
        return this.carts;
    }

    create(name: string, prod: Product) {
        this.carts.push(new Cart(this._index++, name, [prod]));
    }
}