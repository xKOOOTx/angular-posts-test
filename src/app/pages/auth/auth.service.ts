import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Cookie} from 'ng2-cookies/ng2-cookies';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  // url сервера для проверки логина
  loginUrl: string = 'http://localhost:8000/auth/login'

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  submitForm(data: { value: any; }) {
    this.http.post(this.loginUrl, data.value).subscribe(res=>{
      if (res) {
        this.setAuth(JSON.stringify(res))
      }
    })
  }

  getAuth(): string {
    return Cookie.get('id_token');
  }

  setAuth(value: string): void {
    // 0.0208333333 this accepts day not minutes
    // 0.0208333333 = 30 minutes
    Cookie.set('id_token', value, 0.0208333333);
    this.router.navigate(['/posts'])
  }

  deleteAuth(): void {
    Cookie.delete('id_token');
  }
}
