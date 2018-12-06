import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product.model';
import {PRODUCT_SERVICE, ProductService} from '../service/product.service';
import {CartService} from '../../cart/cart.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Promise<Array<Product>>;
  orderBy: string;
  sortingDirection: boolean;

  constructor(
    @Inject(PRODUCT_SERVICE) private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getAll();
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
    this.router.navigate([{outlets: {product: [id]}}], {relativeTo: this.route});
  }
}
