import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubProductService {
  protected path = 'https://localhost:7008/api/';

  constructor(protected httpClient: HttpClient) {}

  getSubProductById(subProductId: string): Observable<any> {
    return this.httpClient.get(this.path + 'subProduct/' + subProductId);
  }
}
