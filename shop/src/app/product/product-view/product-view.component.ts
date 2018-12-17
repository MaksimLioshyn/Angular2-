import {Component, Inject, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {Product} from '../models/product.model';
import {PRODUCT_SERVICE, ProductService} from '../service/product.service';
import {Go} from '../../core/+store/router';
import {AppState} from '../../core/+store/app.state';
import {select, Store} from '@ngrx/store';
import {getSelectedProductByUrl} from '../../core/+store/product';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
    ) {  }

  ngOnInit() {
    this.product$ = this.store.pipe(select(getSelectedProductByUrl));
  }

  onClose() {
    this.store.dispatch(new Go({path: [{outlets: null}], extras: {relativeTo: this.route}}));
  }

}
