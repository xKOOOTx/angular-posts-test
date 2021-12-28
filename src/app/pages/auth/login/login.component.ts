import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  loginForm: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }


  ngOnInit(): void {
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

}
