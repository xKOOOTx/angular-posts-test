import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import {HomePageComponent} from "../home-page/home-page.component"

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  data: any;

  constructor(public dataService: DataService, public homePage: HomePageComponent) { }

  ngOnInit(): void {
    // this.homePage.obs.subscribe((data:any) => {this.data = data})
    this.data = this.dataService.serviceData
  }
  getData() {
    this.data = this.dataService.serviceData
  }

}
