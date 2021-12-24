import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsTableRoutingModule } from './posts-table-routing.module';
import { PostsTableComponent } from './posts-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    PostsTableComponent
  ],
  imports: [
    CommonModule,
    PostsTableRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: PostsTableComponent
      }
    ])
  ]
})
export class PostsTableModule { }
