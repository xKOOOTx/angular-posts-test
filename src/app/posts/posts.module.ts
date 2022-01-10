import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PostsListComponent} from './pages/posts/posts-list.component';
import {SinglePostComponent} from './pages/single-post/single-post.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {AddPostComponent} from './pages/add-post/add-post.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PostsTableComponent } from './pages/table/posts-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PostsHomeComponent} from './pages/posts-home/posts-home.component';
import {AuthGuard} from '../services/auth.guard';

// const routes: Routes = [
//   {path: '', component: PostsListComponent, children: [
//       {path: 'addPost', pathMatch: 'full', component: AddPostComponent},
//       {path: 'postsTable', pathMatch: 'full', component: PostsTableComponent},
//     ]},
//   {path: ':id', component: SinglePostComponent},
// ]

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class PostsModule { }
