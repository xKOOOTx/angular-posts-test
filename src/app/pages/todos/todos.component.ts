import { Component, OnInit } from '@angular/core';
import {TodosService} from '../../services/todos.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  data:any;
  sub!: Subscription;

  constructor(private toDosService: TodosService) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos() {
    this.toDosService.getTodos()
      .subscribe(res => {
        console.log(res)
      })
  }

}
