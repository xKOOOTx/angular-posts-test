import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPostComponent} from "./posts/old/add-post/add-post.component";

const routes: Routes = [
  { path: '', loadChildren: () => import('./posts/pages/posts-list/posts-list.module').then(m => m.PostsListModule) },
  { path: 'posts', loadChildren: () => import('./posts/pages/posts-list/posts-list.module').then(m => m.PostsListModule) },
  { path: 'posts-table', loadChildren: () => import('./posts/pages/posts-table/posts-table.module').then(m => m.PostsTableModule) },
  { path: 'addPost', component: AddPostComponent },
  { path: 'todos', loadChildren: () => import('./pages/todos/todos/todos.module').then(m => m.TodosModule) },
  { path: 'add-post', loadChildren: () => import('./posts/pages/add-post/add-post.module').then(m => m.AddPostModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule { }
