export interface IProduct{  
  id: number;
  name: string;
  quantity: number;
  price : number;
}

export enum Worth{
    low,
    medium,
    hight
  }

export class Product implements IProduct {
  quantity: number;  

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public category: Worth,
    public isAvailable: boolean,
    public label: string
  ) { }
}
