import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})

export class AddPostComponent implements OnInit {

  addPostForm: any;
  sub!: any;

  constructor(private fb: FormBuilder, private postsService: PostsService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addPostForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      text: ['', [Validators.required]],
    })
  }

  // sendForm() {
  //   this.sub = this.postsService.addPost(this.addPostForm.value)
  //     .subscribe(res => {
  //       console.log(res);
  //     })
  // }
}
