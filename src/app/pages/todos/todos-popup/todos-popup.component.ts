import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ThemePalette} from '@angular/material/core';

export interface DialogData {
  id: number,
  title: string,
  completed: boolean
}

@Component({
  selector: 'app-todos-popup',
  templateUrl: './todos-popup.component.html',
  styleUrls: ['./todos-popup.component.scss']
})
export class TodosPopupComponent implements OnInit {

  color: ThemePalette = "primary";

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
