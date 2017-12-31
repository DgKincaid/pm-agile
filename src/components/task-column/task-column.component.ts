import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.css']
})
export class TaskColumnComponent implements OnInit {

  @Input() tasks: Array<any>;
  @Input() name: string;
  
  constructor() { }

  ngOnInit() {
    console.log(this.tasks);
  }

}
