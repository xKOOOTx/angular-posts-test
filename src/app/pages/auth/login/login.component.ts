import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.checkAuth()
    this.initLoginForm()
  }

  initLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
        ])
      ),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
        ]),
      )
    })
  }

  submitFunc() {
    this.authService.submitForm(this.loginForm)
  }

  checkAuth() {
    if(this.authService.getAuth()) {
      this.router.navigate(['/posts'])
    }
  }
}
