import {Product} from './product.model';

export class StoreProduct implements Product {

  constructor(public id: number,
              public name: string,
              public description: string,
              public price: number,
              public hash: string,
              public isAvailable: boolean,
              public stores?: string[]) {
  }
}
