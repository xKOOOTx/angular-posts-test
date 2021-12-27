import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentHistoryService {

  history: any = history;

  constructor() { }

}

const history = [
  {
    id: 1,
    title: 'Какое-то очень интересное название',
    body: 'Какое-то невероятно интересное краткое содержание',
    phone: +79998887766,
    completed: true,
  }
]
