import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";

@Component({
  selector: 'tma-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {


  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.fetchTaskData();
  }

  addItem(itemName: string) {
    this.todoService.addTodoItemToCache(itemName);
  }

}
