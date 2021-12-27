import { Injectable } from '@angular/core';
import {Observable, pipe, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  postId: any;
  done: boolean = false

  constructor(
    private http:HttpClient,
    private _snackBar: MatSnackBar
    ) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  getTodos(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }

  getSingleTogo(todoId:number) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
  }

  sendTodos(val: any): Subscription {
    const body = {id: val.id, title: val.title}
    return this.http.post<any>('https://jsonplaceholder.typicode.com/todos', body)
      .subscribe(val => {
        console.log(val)
        this.postId = val
        console.log(val.id)
        this._snackBar.open('Задача добавлена', 'Закрыть', {
          duration: 3000
        });
      }, error => {
        this._snackBar.open('Ошибка. Попробуйте снова', 'Закрыть', {
          duration: 3000
        });
      })
  }
}
