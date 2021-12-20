import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(`http://jsonplaceholder.typicode.com/posts`);
  }
  addPost(body: any): Observable<any> {
    return this.http.post(`http://jsonplaceholder.typicode.com/posts`, body);
  }
}
