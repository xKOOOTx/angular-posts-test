import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from '../todos/todos.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ThemePalette} from '@angular/material/core';
import {TodosService} from '../../../services/todos.service';

@Component({
  selector: 'app-todos-modal',
  templateUrl: './todos-modal.component.html',
  styleUrls: ['./todos-modal.component.scss']
})
export class TodosModalComponent implements OnInit {

  color: ThemePalette = "primary";
  required: boolean = true;
  todosModalForm: any;
  isTaskCompletedBool: boolean = false;

  constructor(
    private toDosService: TodosService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<TodosModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.modalFormInit()
  }

  modalFormInit() {
    this.todosModalForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      isTaskCompleted: new FormControl('')
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.resetForm();
  }

  resetForm() {
    this.todosModalForm.reset();
  }

  sendTodos() {
    this.toDosService.sendTodos(this.todosModalForm.value)
    console.log(this.todosModalForm.value)
    this.resetForm()
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
