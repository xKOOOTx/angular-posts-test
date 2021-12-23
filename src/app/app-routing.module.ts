import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./posts/pages/posts/posts-list/posts-list.module').then(m => m.PostsListModule) },
  { path: 'posts', loadChildren: () => import('./posts/pages/posts/posts-list/posts-list.module').then(m => m.PostsListModule) },
  { path: 'postsTable', loadChildren: () => import('./posts/pages/table/posts-table/posts-table.module').then(m => m.PostsTableModule) },
  { path: 'todos', loadChildren: () => import('./pages/todos/todos/todos.module').then(m => m.TodosModule) },
  { path: 'addPost', loadChildren: () => import('./posts/pages/add-post/add-post.module').then(m => m.AddPostModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// @ts-ignore
export class AppRoutingModule { }
