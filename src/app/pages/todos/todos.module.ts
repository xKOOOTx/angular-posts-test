import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { TodosComponent } from './todos/todos.component';
import {TodosPopupComponent} from './todos-popup/todos-popup.component';
import {SingleTodoComponent} from './single-todo/single-todo.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import {TodosModalComponent} from './todos-modal/todos-modal.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


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
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonToggleModule
  ],
  providers: [
  ]
})
export class TodosModule { }
