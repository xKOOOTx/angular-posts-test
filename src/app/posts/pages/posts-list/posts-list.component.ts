import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../../../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit, OnDestroy {

  data: any;

  sub!: Subscription;

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.sub = this.postService.getPosts()
      .subscribe(res => {
        this.data = res
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
