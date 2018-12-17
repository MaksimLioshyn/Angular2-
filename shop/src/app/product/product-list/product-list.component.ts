import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
// import {PRODUCT_SERVICE, ProductService} from '../service/product.service';
import {CartService} from '../../cart/cart.services';
import {AppState} from '../../core/+store/app.state';
import {select, Store} from '@ngrx/store';
import {GetProducts, getProductsData, getProductsError} from '../../core/+store/product';

import {Go} from '../../core/+store/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable<Array<Product>>;
  productsError$: Observable<any>;
  orderBy: string;
  sortingDirection: boolean;

  constructor(
    private store: Store<AppState>,
    private cartService: CartService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.store.dispatch(new GetProducts());
     this.products$ = this.store.pipe(select(getProductsData));
    this.productsError$ = this.store.pipe(select(getProductsError));
    this.sortingDirection = false;
  }

  onAddToCart(product: Product): void {
    if (product.isAvailable) {
      this.cartService.addProduct(product);
    }
  }

  onDirectionChange(value: boolean) {
    this.sortingDirection = value;
  }

  onView(id: number): void {
    this.store.dispatch(new Go({path: [{outlets: {product: [id]}}], extras: {relativeTo: this.route}}));
  }
}
