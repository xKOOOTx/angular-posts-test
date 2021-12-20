import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from "./data.service";
import { NavigationComponent } from './navigation/navigation.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from "@angular/material/paginator";
import { HomePageComponent } from './home-page/home-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostsListComponent,
    PostsTableComponent,
    AddPostComponent,
    HomePageComponent
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
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    HomePageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
