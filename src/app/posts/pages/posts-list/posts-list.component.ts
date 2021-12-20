import {Component, OnDestroy, OnInit} from '@angular/core';
import { DataService } from "../../../data.service";
import {HomePageComponent} from "../../../pages/home-page/home-page.component"
import {PostsService} from '../../../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

  data: any;

  constructor(private postService: PostsService,
              public homePage: HomePageComponent) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.postService.getPosts()
        .subscribe(res => {
          this.data = res
        })
  }

  ngOnDestroy(): void {
  }

}
