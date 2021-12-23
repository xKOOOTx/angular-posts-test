import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsTableComponent } from './posts-table.component';

const routes: Routes = [{ path: '', component: PostsTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsTableRoutingModule { }
