import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {PostsService} from '../../../services/posts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  formValue: any;
  addPostForm: any;

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

  sendForm() {
    this.postsService.addPost(this.addPostForm.value)
        .subscribe(res => {
          console.log(res);
        })
  }
}
