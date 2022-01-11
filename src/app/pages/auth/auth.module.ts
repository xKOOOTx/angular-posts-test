import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth/auth.component';
import {RegisterComponent} from './register/register.component';
import {AppComponent} from '../../app.component';
import {AuthNavComponent} from './auth-nav/auth-nav.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MyTelInput} from './register/register.component';
import {MaterialModule} from '../../shared/material/material.module';
import {RegisterGuard} from './register/register.guard';


const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo:'login', pathMatch: 'full'},
      {path: 'register', component: RegisterComponent, canDeactivate: [RegisterGuard]},
    ]},

];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AuthNavComponent,
    LoginComponent,
    RegisterComponent,
    MyTelInput,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    MyTelInput
  ],
  providers: [
    RegisterComponent,
    RegisterGuard
  ]
})
export class AuthModule { }
