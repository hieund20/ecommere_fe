import { createReducer, on } from '@ngrx/store';
import { changeNumberOfCart, setNumberOfCart } from './../actions/cart.actions';

export const initialState = 0;

export const cartReducer = createReducer(
  initialState,
  on(changeNumberOfCart, (state) => state),
  on(setNumberOfCart, (state, { quantity }) => (state = quantity))
);
