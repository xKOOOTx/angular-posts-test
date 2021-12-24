import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from './posts/posts-list/posts-list.component';
import {SinglePostComponent} from './single-post/single-post.component';

const routes: Routes = [
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsModule { }
