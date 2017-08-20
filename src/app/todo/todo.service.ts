import { Injectable } from '@angular/core';
import { TaskStatus } from './model/task-status.model';
import { TaskItem } from './model/task-item.model';
import { TMAHttp } from '../tma-http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  private taskData: TaskStatus[] = [];

  constructor(private http: TMAHttp) { }

  fetchTaskData() {
    this.http.get(`mock-data/task-items-mock.json`)
      .toPromise()
      .then(res => {
        let data = res.json();
        if(data.code === 200) this.taskData = data.data;
      })
      .catch(error => console.error(error));
  }

  getTaskData() {
    return this.taskData;
  }

  addTodoItemToCache(itemName: string) {
    let ti = new TaskItem();
    (ti.id = (this.getTotal() + 1).toString(), ti.summary = itemName);
    this.taskData.filter(v => v.name === 'To do')[0].items.push(ti);
  }

  getTotal(): number {
    return this.taskData.reduce((pv, cv) => pv + cv.items.length, 0);
  }


}
