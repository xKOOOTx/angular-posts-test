import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsComponent } from './documents/documents.component';
import {DocumentsNavigationComponent} from './documents-navigation/documents-navigation.component';
import {RouterModule, Routes} from '@angular/router';
import {SendDocumentPageComponent} from './send-document-page/send-document-page.component';
import {DocumentsHistoryComponent} from './documents-history/documents-history.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import { SingleHistoryDocumentComponent } from './single-history-document/single-history-document.component';
import {MatButtonModule} from '@angular/material/button';
import {AuthGuard} from '../../services/auth.guard';

const routes: Routes = [
  {path: '',  component: DocumentsComponent, children: [
      {
        path: 'sendNew',
        canDeactivate: [AuthGuard],
        component: SendDocumentPageComponent
      },
      {path: '', redirectTo:'sendNew', pathMatch:'full'},
      {path: 'history', component: DocumentsHistoryComponent, children: [
          {path: ':id', component: SingleHistoryDocumentComponent}
        ]}
    ]},
]

@NgModule({
  declarations: [
    DocumentsComponent,
    DocumentsNavigationComponent,
    SendDocumentPageComponent,
    DocumentsHistoryComponent,
    SingleHistoryDocumentComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class DocumentsModule implements OnInit{
  ngOnInit() {
  }
}
