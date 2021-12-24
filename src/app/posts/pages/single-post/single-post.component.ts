import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {PostsService} from '../../../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();
  postId: any;
  post: any = {
    id: null,
    userId: null,
    title: '',
    body: ''
  };

  constructor(
    private router: ActivatedRoute,
    private postService: PostsService
    ) { }

  ngOnInit(): void {
    this.getDataUrl();
    this.getSinglePost();
  }

  getDataUrl() {
    this.router.params.subscribe((params: Params) => {
      this.postId = params['id'];
    })
  }

  getSinglePost() {
    this.sub = this.postService.getSinglePost(this.postId).subscribe(res => {
      this.post = res;
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
