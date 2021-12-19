import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {

  data: any;

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.serviceData
  }
  getData() {
    this.data = this.dataService.serviceData
  }

}
