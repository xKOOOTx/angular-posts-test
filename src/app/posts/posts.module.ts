import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from './pages/posts/posts-list.component';
import {SinglePostComponent} from './pages/single-post/single-post.component';
import {AddPostComponent} from './pages/add-post/add-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PostsTableComponent } from './pages/table/posts-table.component';
import {PostsHomeComponent} from './pages/posts-home/posts-home.component';
import {AuthGuard} from '../services/auth.guard';
import { PostsNavigationComponent } from './pages/posts-navigation/posts-navigation.component';
import {MaterialModule} from '../shared/material/material.module';

const routes: Routes = [
  {path: '', component: PostsHomeComponent, children: [
      {path: '', redirectTo: '', component: PostsListComponent, pathMatch:'full'},
      {path: 'postsTable', pathMatch: 'full', component: PostsTableComponent},
      {
        path: 'addPost',
        canActivate: [AuthGuard],
        canDeactivate: [AuthGuard],
        pathMatch: 'full',
        component: AddPostComponent
      },
    ]},
  {path: ':id', component: SinglePostComponent},
]

@NgModule({
  declarations: [
    PostsListComponent,
    SinglePostComponent,
    AddPostComponent,
    PostsTableComponent,
    PostsHomeComponent,
    PostsNavigationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class PostsModule { }
