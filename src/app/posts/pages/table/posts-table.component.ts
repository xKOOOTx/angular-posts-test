import {AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {PostsService} from '../../../services/posts.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})


export class PostsTableComponent implements OnInit, AfterViewInit, OnDestroy {

  sub!: Subscription;
  isLoad: boolean = false

  constructor(
    private postService: PostsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }


  displayedColumns: string[] = ['id', 'title', 'body'];
  dataSource = new MatTableDataSource<PeriodicElement>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  getData() {
    this.isLoad = true
    this.sub = this.postService.getPosts()
      .subscribe((res:any) => {
        this.dataSource.data = res
        this.isLoad = false
      })
  }
}

export interface PeriodicElement {
  id: number;
  title: string;
  body: string;
}
