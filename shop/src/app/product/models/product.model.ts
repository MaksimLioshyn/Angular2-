export interface IProduct {
  id: number,
  name: string,
  description: string,
  price: number,
  isAvailable: boolean,
  stores?: string[]
}

export class Product implements IProduct {

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public isAvailable: boolean,
    public stores?: string[]
  ) { }
}