import { AfterViewInit, Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {TodosService} from '../../../services/todos.service';
import {Subscription} from 'rxjs';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {LiveAnnouncer} from '@angular/cdk/a11y';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, AfterViewInit {

  isModalOpen: boolean = false;
  sub!: Subscription;
  displayedColumns: string[] = ['id', 'title', 'completed', 'delete'];
  dataSource = new MatTableDataSource();

  constructor(
    private toDosService: TodosService,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getTodos();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getTodos() {
    this.toDosService.getTodos()
      .subscribe(res => {
        this.dataSource.data = res;
        console.log(res);
      });
  }

  deleteTodo(element:any) {
    let idx = this.dataSource.filteredData.indexOf(element);
    this.dataSource.filteredData.splice(idx, 1);
    this.dataSource.data = this.dataSource.filteredData;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  onValueChanged() {
    console.log('log')
    this.isModalOpen = false
  }
}


