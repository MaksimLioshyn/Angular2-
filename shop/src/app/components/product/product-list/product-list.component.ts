import { Component, OnInit } from '@angular/core';

import { Product } from './../model/product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product: Product;
  products: Array<Product>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
    this.products = this.productService.getProducts();
  }

}
