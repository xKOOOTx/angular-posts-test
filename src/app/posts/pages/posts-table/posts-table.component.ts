import {AfterViewInit, Component, ViewChild, OnInit, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DataService } from "../../../data.service";

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit, AfterViewInit {

  // set data(value: string) { this.AddPostComponent.formValue = value; }

  constructor(public dataService: DataService) { }

  ngOnInit(): void {
    this.dataSource.data = this.dataService.serviceData
  }

  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  id: number;
  title: string;
  body: string;
}

