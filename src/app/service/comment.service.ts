import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  protected path = 'https://localhost:7008/api/';

  constructor(protected httpClient: HttpClient) {}

  postComment(body: any): Observable<any> {
    return this.httpClient.post(this.path + 'comment', body);
  }
}
