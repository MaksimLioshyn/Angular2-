import { Component, OnInit } from '@angular/core';
import {ProductServices} from '../../product/product.services';
import {Product} from '../../product/models/product.model';

@Component({
  selector: 'admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {

  products: Promise<Array<Product>>;

  constructor(private productService: ProductServices) { }

  ngOnInit() {
    this.products = this.productService.getAll();
  }

}
