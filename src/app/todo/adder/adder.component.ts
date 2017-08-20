import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tma-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.scss']
})
export class AdderComponent implements OnInit {

  @Output() onAdded = new EventEmitter<string>();
  itemName: string = '';

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.onAdded.emit(this.itemName);
    this.itemName = '';
  }

}
