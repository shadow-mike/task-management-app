import { Component, OnInit, Input } from '@angular/core';
import { TaskStatus } from '../model/task-status.model';
import { DragulaService }    from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'tma-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() taskStatus: TaskStatus;
  constructor(private dragulaService: DragulaService) {
    dragulaService.dropModel.subscribe((value) => {
      // console.log(this.taskStatus);
      this.onDropModel(value.slice(1));
    });
  }

  ngOnInit() {
  }

  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
  }

}
