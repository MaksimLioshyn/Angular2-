export interface ICartItem {
  id: number,
  name: string,
  price: number,
  quantity: number
}

export class CartItem implements ICartItem {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity: number
    ) { }
}