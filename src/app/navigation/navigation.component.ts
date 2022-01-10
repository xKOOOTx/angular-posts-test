import { Component, OnInit } from '@angular/core';
import {AuthService} from '../pages/auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.checkAuth()
  }

  logout() {
    this.authService.deleteAuth()
  }

  checkAuth() {
    // checking auth if true return true, false - false
    return !!this.authService.getAuth();
  }

}
