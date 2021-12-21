import {AfterViewInit, Component, ViewChild, OnInit, OnDestroy} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {PostsService} from '../../../services/posts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-posts-table',
  templateUrl: './posts-table.component.html',
  styleUrls: ['./posts-table.component.scss']
})
export class PostsTableComponent implements OnInit, AfterViewInit, OnDestroy {

  sub!: Subscription;

  constructor(private postService: PostsService) { }

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
    this.sub = this.postService.getPosts()
      .subscribe(res => {
        this.dataSource.data = res
      })
  }
}

export interface PeriodicElement {
  id: number;
  title: string;
  body: string;
}

