import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})

export class SinglePostComponent implements OnInit, OnDestroy {

  postIndex: any;
  getPostsArray: any;
  getPostsSub:any;
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
    this.getUrl();
    this.getPosts(this.postService, this.postIndex.id);
  }
  ngOnDestroy() {
    this.getPostsArray.unsubscribe()
    this.getPostsSub.unsubscribe()
  }

  getUrl() {
    this.getPostsArray = this.router.params.subscribe(params => {
      this.postIndex = params;
    })
  }

  getPosts(array:any, index:number) {
    this.getPostsSub = array.getPosts().subscribe((value:any) => {
      this.post = value.find((id:any) => id.id == index)
    })
  }
}
