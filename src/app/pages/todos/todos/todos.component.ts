import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {TodosService} from '../../../services/todos.service';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {TodosModalComponent} from '../todos-modal/todos-modal.component'

export interface DialogData {
  title: string;
  idNumber: string;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit, AfterViewInit {

  title: string = '';
  idNumber: string = '';
  completed!: boolean;

  isModalOpen: boolean = false;
  sub!: Subscription;
  displayedColumns: string[] = ['id', 'title', 'completed', 'delete'];
  dataSource = new MatTableDataSource();

  constructor(
    public dialog: MatDialog,
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
      });
  }

  deleteTodo(element:any) {
    let idx = this.dataSource.filteredData.indexOf(element);
    this.dataSource.filteredData.splice(idx, 1);
    this.dataSource.data = this.dataSource.filteredData;
  }

  onValueChanged() {
    this.isModalOpen = false
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TodosModalComponent, {
      width: '600px',
      height: '400px',
      data: {
        idNumber: this.dataSource.data.length + 1,
        title: this.title,
        completed: false
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.title = result;
      let obj = {
        id: this.dataSource.data.length + 1,
        title: this.title,
        completed: true
      }
      if (this.title) {
        this.dataSource.filteredData.push(obj)
        this.dataSource.data = this.dataSource.filteredData
        this.toDosService.sendTodos(obj)
      }
    });
  }
}
