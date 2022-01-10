import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  registerUrl: string = 'http://localhost:8000/auth/register'
  constructor(
    private http: HttpClient
  ) { }

  submitForm(data: { value: any; }) {
    this.http.post(this.registerUrl, data.value).subscribe(res=>{
      if (res) {
        console.log('logged in')
      } else {
        console.log('not logged in')
      }
    })
  }
}
