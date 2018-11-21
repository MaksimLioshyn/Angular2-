import {Optional, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../models/product.model';
import {CHARACTERS_09, GeneratorService, GeneratorServiceFactory} from '../../core/services/generator.service';
import { ConfigOptionsService } from '../../core/services/config-options.service';

@Component({
  selector: '[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [
    {provide: GeneratorService, useFactory: GeneratorServiceFactory(10, CHARACTERS_09)}
    ]
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
  hash: string;

  constructor(
    @Optional() private generatorService: GeneratorService,
    @Optional() private configOptionsService: ConfigOptionsService
    ) {
  }

  ngOnInit() {
    this.hash = this.generatorService.generate();
  }

  onBuy() {
    this.addToCart.emit(this.product);
    this.configOptionsService.localStorageService.setItem(this.product.id.toString(), this.hash);
  }

}
