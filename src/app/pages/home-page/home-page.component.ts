import { Component, OnInit } from '@angular/core';
import {Injectable} from "@angular/core";
import {DataService} from '../../data.service';
import {Observable} from 'rxjs';

@Injectable()
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPosts()
  }

}
