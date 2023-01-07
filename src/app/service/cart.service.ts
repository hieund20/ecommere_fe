import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  protected path = 'https://localhost:7008/api/';

  constructor(protected httpClient: HttpClient) {}

  getAllCart(): Observable<any> {
    return this.httpClient.get(this.path + 'cart');
  }

  addProductToCart(body: any): Observable<any> {
    return this.httpClient.post(this.path + 'cart/addProductToCart', body);
  }
}
