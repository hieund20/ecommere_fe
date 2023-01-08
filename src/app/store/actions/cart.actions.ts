import { createAction, props } from '@ngrx/store';

export const changeNumberOfCart = createAction(
  '[NavBar Component] Change Number Of Cart'
);

export const setNumberOfCart = createAction(
  '[NavBar Component] Set Number Of Cart',
  props<{ quantity: number }>()
);
