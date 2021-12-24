import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`);
  }

  getSinglePost(postId:number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  }

  addPost(body: any): Observable<any> {
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, body);
  }
}
