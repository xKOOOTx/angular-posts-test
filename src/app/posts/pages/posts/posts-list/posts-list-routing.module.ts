import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsListComponent } from './posts-list.component';
import {SinglePostComponent} from '../../single-post/single-post.component';

const routes: Routes = [
  { path: '', component: PostsListComponent },
  {
    path: 'post/:id',
    pathMatch: 'full',
    component: SinglePostComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsListRoutingModule { }
