import { Product } from "../../product/model/product.model";

export interface ICart{  
  id: number;
  name: string;
  products: Array<Product>;
}

export class Cart implements ICart{

constructor(
  public id: number,
  public name: string,
  public products: Product[]
) { }
}