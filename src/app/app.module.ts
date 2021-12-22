import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {PostsListComponent} from './posts/pages/posts-list/posts-list.component';
import {PostsTableComponent} from './posts/pages/posts-table/posts-table.component';
import {AddPostComponent} from './posts/pages/add-post/add-post.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodosComponent} from './pages/todos/pages/todos.component';
import {MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {TodosModalComponent} from './pages/todos/todos-modal/todos-modal.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostsListComponent,
    PostsTableComponent,
    AddPostComponent,
    TodosComponent,
    TodosModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSortModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
