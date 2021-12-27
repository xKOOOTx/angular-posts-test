import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodosService} from '../../../services/todos.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {

  todoIndex: any;
  getPostsArray: any;
  getPostsSub:any;
  sub: Subscription | undefined;
  todo: any = {
    id: null,
    userId: null,
    title: '',
    completed: false
  }
  constructor(
    private router: ActivatedRoute,
    private todoService: TodosService,
  ) { }

  ngOnInit(): void {
    this.getUrl();
    // this.getPosts(this.todoService, this.todoIndex.id);
    this.getPosts(this.todoService, this.todoIndex);
    this.getSingleTodo();
  }
  ngOnDestroy() {
    this.getPostsArray.unsubscribe()
    this.getPostsSub.unsubscribe()
  }

  getUrl() {
    this.getPostsArray = this.router.params.subscribe(params => {
      this.todoIndex = params['id'];
    })
  }

  getSingleTodo() {
    this.sub = this.todoService.getSingleTogo(this.todoIndex).subscribe(params => {
      this.todo = params;
    })
  }

  getPosts(array:any, index:number) {
    this.getPostsSub = array.getTodos().subscribe((value:any) => {
      this.todo = value.find((id:any) => id.id == index)
    })
  }

  foo() {
    this.todo.completed = !this.todo.completed
    console.log(this.todo.completed)
  }
}
