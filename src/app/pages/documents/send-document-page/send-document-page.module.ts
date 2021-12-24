import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendDocumentPageRoutingModule } from './send-document-page-routing.module';
import { SendDocumentPageComponent } from './send-document-page.component';


@NgModule({
  declarations: [
    SendDocumentPageComponent
  ],
  imports: [
    CommonModule,
    SendDocumentPageRoutingModule
  ]
})
export class SendDocumentPageModule { }
