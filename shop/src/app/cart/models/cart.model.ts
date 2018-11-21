export interface ICart {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export class Cart implements ICart {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity: number,
  ) {}
}
