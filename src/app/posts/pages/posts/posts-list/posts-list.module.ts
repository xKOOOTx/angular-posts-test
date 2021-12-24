import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostsListComponent } from './posts-list.component';
import {RouterModule, Routes} from '@angular/router';
import {SinglePostComponent} from '../../single-post/single-post.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  { path: './', pathMatch:'full', component: SinglePostComponent }
]

@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PostsListRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsListModule { }
