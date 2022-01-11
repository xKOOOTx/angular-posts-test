import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import {TodosPopupComponent} from './todos-popup/todos-popup.component';
import {SingleTodoComponent} from './single-todo/single-todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodosModalComponent} from './todos-modal/todos-modal.component';
import {MaterialModule} from '../../shared/material/material.module';


const routes: Routes = [
  {path: '', component: TodosComponent, children: [
      {path: ':id', component: SingleTodoComponent}
    ]},
]

@NgModule({
  declarations: [
    TodosComponent,
    TodosModalComponent,
    TodosPopupComponent,
    SingleTodoComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [
  ]
})
export class TodosModule { }
