import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Product} from '../../../product/models/product.model';
import {StoreProduct} from '../../../product/models/store.product';
import {ActivatedRoute, Params} from '@angular/router';
import {PRODUCT_SERVICE, ProductService} from '../../../product/service/product.service';
import {switchMap} from 'rxjs/operators';
import {of, Subscription} from 'rxjs';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit, OnDestroy {

  product: Product;

  private sub: Subscription;

  constructor(private route: ActivatedRoute,
              @Inject(PRODUCT_SERVICE) private productService: ProductService,
              private location: Location) {
  }

  ngOnInit() {
    this.product = new StoreProduct(null, '', '', null, null, null);

    this.route.paramMap
        .pipe(
            switchMap((params: Params) => params.get('id') ?
                this.productService.getById(+params.get('id')) :
                of(null))
        )
        .subscribe(
            (product: Product) => this.product = {...product},
            err => console.log(err)
        );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  save() {
    this.sub = this.productService.saveOrUpdate(this.product)
        .subscribe(
            product => this.back(),
            err => console.log(err)
        );
  }

  back() {
    this.location.back();
  }

}
