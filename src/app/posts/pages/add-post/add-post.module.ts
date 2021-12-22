import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPostRoutingModule } from './add-post-routing.module';
import { AddPostComponent } from './add-post.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AddPostComponent
  ],
  imports: [
    CommonModule,
    AddPostRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class AddPostModule { }
