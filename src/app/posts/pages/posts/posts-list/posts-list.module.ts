import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsListRoutingModule } from './posts-list-routing.module';
import { PostsListComponent } from './posts-list.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    PostsListRoutingModule,
    RouterModule.forChild([])
  ]
})
export class PostsListModule { }
