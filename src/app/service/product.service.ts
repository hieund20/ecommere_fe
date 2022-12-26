import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  protected path = 'https://localhost:7008/api/'

  constructor(protected httpClient: HttpClient) { }

  getAllProduct(): Observable<any> {
    return this.httpClient.get(this.path + 'product')
  }
}
