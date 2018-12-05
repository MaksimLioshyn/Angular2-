import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product/models/product.model';
import {ProductServices} from '../../product/product.services';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  @Input()
  product: Product;

  constructor(private productService: ProductServices,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }


  onAvailable() {
    this.productService.available(this.product);
  }

  onNotAvailable() {
    this.productService.notAvailable(this.product);
  }

  onRemove() {
    this.productService.remove(this.product);
  }

  onEdit() {
    this.router.navigate(['./edit', this.product.id], {relativeTo: this.route});
  }
}
