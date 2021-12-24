import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendDocumentPageComponent } from './send-document-page.component';

const routes: Routes = [{ path: '', component: SendDocumentPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SendDocumentPageRoutingModule { }
