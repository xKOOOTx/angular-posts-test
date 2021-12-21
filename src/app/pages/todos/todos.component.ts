import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {TodosService} from '../../services/todos.service';
import {Subscription} from 'rxjs';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {coerceNumberProperty} from '@angular/cdk/coercion';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, AfterViewInit {

  sub!: Subscription;
  displayedColumns: string[] = ['id', 'title', 'completed', 'delete'];
  dataSource = new MatTableDataSource();

  constructor(
    private toDosService: TodosService,
    private _liveAnnouncer: LiveAnnouncer,
    private fb: FormBuilder
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
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
