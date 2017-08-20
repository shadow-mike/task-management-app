import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tma-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() total: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
