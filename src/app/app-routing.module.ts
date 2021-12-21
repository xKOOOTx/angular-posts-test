import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsListComponent} from "./posts/pages/posts-list/posts-list.component";
import {PostsTableComponent} from "./posts/pages/posts-table/posts-table.component";
import {AddPostComponent} from "./posts/pages/add-post/add-post.component";
import {TodosComponent} from './pages/todos/pages/todos.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'postsTable', component: PostsTableComponent },
  { path: 'addPost', component: AddPostComponent },
  { path: 'todos', component: TodosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
