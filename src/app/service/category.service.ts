import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  protected path = 'https://localhost:7008/api/';

  constructor(protected httpClient: HttpClient) {}

  getAllCategory(): Observable<any> {
    return this.httpClient.get(this.path + 'category')
  }
}
