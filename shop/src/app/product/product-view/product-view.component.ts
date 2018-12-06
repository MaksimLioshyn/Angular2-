import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product.model';
import {PRODUCT_SERVICE, ProductService} from '../service/product.service';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  product: Product;
  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              @Inject(PRODUCT_SERVICE) private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.productService.getById(+params['id']).then(p => this.product = p);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClose() {
    this.router.navigate([{ outlets: null }], {relativeTo: this.route});
  }

}
