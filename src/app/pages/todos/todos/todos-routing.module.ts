import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos.component';
import {SingleTodoComponent} from '../single-todo/single-todo.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TodosComponent },
  { path: ':id', component: SingleTodoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
