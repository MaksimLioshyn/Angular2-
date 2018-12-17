import {EntityState} from '@ngrx/entity';
import {Cart} from '../../../cart/models/cart.model';

export interface CartState extends EntityState<Cart> {
}
