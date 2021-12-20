import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  formValue: any;
  addPostForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.addPostForm = this.fb.group({
      title: new FormControl(),
      text: new FormControl()
    })
  }

  sendForm(value:any) {
    if (value.title && value.text) {
      this.formValue = value
    }
  }
}
