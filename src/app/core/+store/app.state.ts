import {User} from '../model/user';
import {ProductsState} from './product/products.state';
import {CartState} from './cart/cart.state';
 export interface AppState {
  products: ProductsState;
  cart: CartState;
  user: User;
}
