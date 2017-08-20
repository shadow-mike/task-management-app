import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { CounterComponent } from './counter/counter.component';
import { AdderComponent } from './adder/adder.component';
import { TodoService } from './todo.service';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ],
  declarations: [
    TodoPageComponent,
    CounterComponent,
    AdderComponent,
    TaskListComponent
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
