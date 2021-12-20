import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PostsListComponent} from "./posts/pages/posts-list/posts-list.component";
import {PostsTableComponent} from "./posts/pages/posts-table/posts-table.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {HomePageComponent} from "./pages/home-page/home-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'posts', component: PostsListComponent },
  { path: 'postsTable', component: PostsTableComponent },
  { path: 'addPost', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  testText: string = 'some test text'
}
