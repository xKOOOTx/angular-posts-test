import {Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-todos-modal',
  templateUrl: './todos-modal.component.html',
  styleUrls: ['./todos-modal.component.scss']
})
export class TodosModalComponent implements OnInit {

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();

  isModalOpen:boolean = true;
  todosModalForm: any;

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.todosModalForm = this.fb.group({
      id: [''],
      title: '',
      completed: ['']
    })
  }

  closeModal() {
    this.change.emit()
  }
}
