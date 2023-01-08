import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CartService } from 'src/app/service/cart.service';
import { changeNumberOfCart, setNumberOfCart } from '../actions/cart.actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  getCartNumber$ = createEffect(() =>
    this.actions$.pipe(
      ofType(changeNumberOfCart),
      mergeMap(() =>
        this.cartService.getAllCart().pipe(
          map((cart) => {
            return setNumberOfCart({ quantity: cart.cartNumber });
          })
        )
      ),
      catchError(() =>
        of({
          type: 'Failed',
        })
      )
    )
  );
}
