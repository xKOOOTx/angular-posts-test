import {Component, OnInit, Inject} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-todos-modal',
  templateUrl: './todos-modal.component.html',
  styleUrls: ['./todos-modal.component.scss']
})
export class TodosModalComponent implements OnInit {

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
      title: ['', Validators.required, Validators.minLength(10)],
      completed: ['']
    })
  }


}
