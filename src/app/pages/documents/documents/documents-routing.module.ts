import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents.component';
import {SendDocumentPageComponent} from '../send-document-page/send-document-page.component';
import {DocumentsHistoryComponent} from '../documents-history/documents-history.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SendDocumentPageComponent},
  { path: 'sendNew', component: SendDocumentPageComponent, outlet: 'documents' },
  { path: 'history', component: DocumentsHistoryComponent, outlet: 'documentsRouter'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsRoutingModule { }
