import { Component, OnInit } from '@angular/core';
import {AppRoutingModule} from '../app-routing.module'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private arrRouter: AppRoutingModule) { }

  ngOnInit(): void {}

}
