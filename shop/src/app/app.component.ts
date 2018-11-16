import { Component, OnInit } from '@angular/core';
import { ProductService } from './product/product.service';
import { Product } from './product/models/product.model';

enum Category {
  blackList,
  transition
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Shop';
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  items: Array<string>;
  isBasketEmpty: boolean;
  products: Array<Product>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.name = "my name";
    this.description = "my desc ";
    this.price = 44;
    this.category = Category.blackList;
    this.isAvailable = true;
    this.items = ["1", "2", "3"];
    this.isBasketEmpty = true;
    this.products = this.productService.getProducts();
  }

  onBuy(): void {
    console.debug('app component, onBuy method');
    this.isBasketEmpty = false;
  };

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.create(name);
  };
}
