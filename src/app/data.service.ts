import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable()

export class DataService {

  serviceData: any;
  posts: string = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http:HttpClient) {
    this.getPosts()
  }

  getPosts(): void {
    this.http.get(this.posts)
      .subscribe(data => {
        this.serviceData = data
        console.log(this.serviceData)
      })
  }

  // set data(value: string) { this.AddPostComponent.formValue = value; }
}


