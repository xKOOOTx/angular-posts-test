import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {NavigationComponent} from '../../navigation/navigation.component';

import {MaterialModule} from '../../shared/material/material.module';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {
        path: 'posts',
        loadChildren: () => import('../../posts/posts.module').then(m => m.PostsModule)},
      {
        path: '',
        redirectTo:'posts',
        pathMatch: 'full'
      },
      {path: 'todos', loadChildren: () => import('../todos/todos.module').then(m => m.TodosModule)},
      {
        path: 'documents',
        loadChildren: () => import('../documents/documents.module').then(m => m.DocumentsModule)},
      {path: 'auth', loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)}
    ]},
]
@NgModule({
    declarations: [
        HomeComponent,
        NavigationComponent
    ],
    exports: [
        NavigationComponent
    ],
    imports: [
      CommonModule,
      RouterModule.forChild(routes),
      MaterialModule
    ]
})
export class HomeModule { }
