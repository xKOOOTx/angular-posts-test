import { Component, OnInit } from '@angular/core';
import {DocumentHistoryService} from '../../../services/document-history.service';

@Component({
  selector: 'app-single-history-document',
  templateUrl: './single-history-document.component.html',
  styleUrls: ['./single-history-document.component.scss']
})
export class SingleHistoryDocumentComponent implements OnInit {

  history: any;

  constructor(
    private historyService: DocumentHistoryService,
  ) { }

  ngOnInit(): void {
    this.getHistoryData();
  }

  getHistoryData() {
    this.history = this.historyService.history[0];
    console.log(this.history)
  }

}
