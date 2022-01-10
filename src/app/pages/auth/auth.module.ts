import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthComponent} from './auth/auth.component';
import {RegisterComponent} from './register/register.component';
import {AppComponent} from '../../app.component';
import {AuthNavComponent} from './auth-nav/auth-nav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MyTelInput} from './register/register.component';


const routes: Routes = [
  {path: '', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: '', redirectTo:'login', pathMatch: 'full'},
      {path: 'register', component: RegisterComponent},
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
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatCardModule,
  ],
  exports: [
    MyTelInput
  ],
})
export class AuthModule { }
