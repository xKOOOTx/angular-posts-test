import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";


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
        // console.log(this.serviceData)
      })
  }
}
