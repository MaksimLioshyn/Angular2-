import {Injectable} from '@angular/core';
import {StoreProduct} from '../models/store.product';
import {Product} from '../models/product.model';
import {Observable, of} from 'rxjs';
import {ProductService} from './product.service';
import {GeneratorService} from '../../core/services/generator.service';

@Injectable()
export class DefaultProductService implements ProductService {

  constructor(
    private generatorService: GeneratorService
    ) {}

  private products: Array<Product> = [
    new StoreProduct(1, 'Wireless Mouse', 'Bluetooth wireless super small mouse', 350, this.generatorService.generate(), true, []),
    new StoreProduct(2, 'Monitor 22', 'Samsung 22inch screen', 2500, this.generatorService.generate(), true, []),
    new StoreProduct(3, 'Monitor 20', 'LG 20inch screen', 2300, this.generatorService.generate(),  false, []),
    new StoreProduct(4, 'Standard Keyboard', 'Logitech keyboard', 150, this.generatorService.generate(), true, []),
    new StoreProduct(5, 'Color Printer', 'M590 Printer', 1350, this.generatorService.generate(), true, []),
    new StoreProduct(6, 'HP ProBook', 'HP ProBook', 12000, this.generatorService.generate(), true, ['Comfy', 'Eldorado', 'PSShop'])
  ];

  getAll(): Promise<Array<Product>> {
    return new Promise<Array<Product>>((resolve, reject) => setTimeout(() => resolve(this.products), 1000));
  }

  getById(id: number): Promise<Product> {
    return new Promise<Product>((resolve, reject) => setTimeout(() => resolve(this.products.find(p => p.id === id)), 500));
  }

  remove(product: Product): Promise<Product> {
    return new Promise<Product>((resolve, reject) => {
      const i: number = this.products.indexOf(product);
      if (i > -1) {
        this.products.splice(i, 1);
        resolve(product);
      } else {
        reject({code: 2, message: 'Product not found.'});
      }
    });
  }

  available(product: Product): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      const i: number = this.products.indexOf(product);
      if (i > -1) {
        product.isAvailable = true;
        resolve(true);
      } else {
        reject({code: 2, message: 'Product not found.'});
      }
    });
  }

  notAvailable(product: Product) {
    return new Promise<boolean>((resolve, reject) => {
      const i: number = this.products.indexOf(product);
      if (i > -1) {
        product.isAvailable = false;
        resolve(true);
      } else {
        reject({code: 2, message: 'Product not found.'});
      }
    });
  }

  saveOrUpdate(product: Product): Observable<Product> {
    return product.id ? this.update(product) : this.save(product);
  }

  update(product: Product): Observable<Product> {
    return of(product);
  }

  save(product: Product): Observable<Product> {
    return of(product);
  }
}
