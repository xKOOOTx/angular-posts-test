import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TodosService} from '../../../services/todos.service';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {

  postIndex: any;
  getPostsArray: any;
  getPostsSub:any;
  todo: any = {
    id: null,
    userId: null,
    title: '',
    completed: false
  }
  constructor(
    private router: ActivatedRoute,
    private todoService: TodosService
  ) { }

  ngOnInit(): void {
    this.getUrl();
    this.getPosts(this.todoService, this.postIndex.id);
  }
  ngOnDestroy() {
    this.getPostsArray.unsubscribe()
    this.getPostsSub.unsubscribe()
  }

  getUrl() {
    this.getPostsArray = this.router.params.subscribe(params => {
      this.postIndex = params['id'];
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
