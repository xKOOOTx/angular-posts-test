import {NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DocumentsComponent} from './documents/documents.component';
import {DocumentsNavigationComponent} from './documents-navigation/documents-navigation.component';
import {RouterModule, Routes} from '@angular/router';
import {SendDocumentPageComponent} from './send-document-page/send-document-page.component';
import {DocumentsHistoryComponent} from './documents-history/documents-history.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SingleHistoryDocumentComponent} from './single-history/single-history-document/single-history-document.component';
import {MaterialModule} from '../../shared/material/material.module';
import { SingleHistoryViewComponent } from './single-history/single-history-view/single-history-view.component';

const routes: Routes = [
  {path: '', component: DocumentsComponent, children: [
      {path: '', redirectTo: 'sendNew', pathMatch: 'full'},
      {path: 'sendNew', component: SendDocumentPageComponent},
      {path: 'history', pathMatch:'full', component: DocumentsHistoryComponent, children: [
          {path: 'historySingle', pathMatch: 'full', component: SingleHistoryViewComponent},
        ]},
    ]},

]

@NgModule({
  declarations: [
    DocumentsComponent,
    DocumentsNavigationComponent,
    SendDocumentPageComponent,
    DocumentsHistoryComponent,
    SingleHistoryDocumentComponent,
    SingleHistoryViewComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DocumentsModule implements OnInit{
  ngOnInit() {
  }
}
