import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from './documents-routing.module';
import { DocumentsComponent } from './documents.component';
import {MatCardModule} from '@angular/material/card';
import {DocumentsNavigationComponent} from '../documents-navigation/documents-navigation.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    DocumentsComponent,
    DocumentsNavigationComponent
  ],
  exports: [
    DocumentsNavigationComponent
  ],
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    MatCardModule,
    MatButtonToggleModule,
    RouterModule
  ]
})
export class DocumentsModule { }
