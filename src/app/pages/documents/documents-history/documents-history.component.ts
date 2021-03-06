import { Component, OnInit } from '@angular/core';
import {DocumentHistoryService} from '../../../services/document-history.service';

@Component({
  selector: 'app-documents-history',
  templateUrl: './documents-history.component.html',
  styleUrls: ['./documents-history.component.scss']
})
export class DocumentsHistoryComponent implements OnInit {

  history: any;

  constructor(
    private historyService: DocumentHistoryService,
  ) { }

  ngOnInit(): void {
    this.getHistoryData();
  }

  getHistoryData() {
    this.history = this.historyService.history;
  }

}



