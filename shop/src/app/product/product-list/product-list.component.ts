import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product.model';
import {ProductServices} from '../product.services';
import {CartService} from '../../cart/cart.services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Promise<Array<Product>>;
  orderBy: string;
  sortingDirection: boolean;

  constructor(private productService: ProductServices,
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
