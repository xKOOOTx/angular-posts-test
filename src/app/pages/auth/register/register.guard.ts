import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {RegisterComponent} from './register.component';

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanDeactivate<unknown> {
  constructor(
    private registerComponent: RegisterComponent
  ) {
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return confirm('Данные будут потеряны вы точно хотите уйти?')
  }

}
