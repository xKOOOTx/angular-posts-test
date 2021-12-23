import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  id: number,
  userId: number,
  title: string,
  body: string
}

@Component({
  selector: 'app-posts-list-popup',
  templateUrl: './posts-list-popup.component.html',
  styleUrls: ['./posts-list-popup.component.scss']
})
export class PostsListPopupComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
