import { Component, Input, OnInit } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { TaskService } from '../../shared/index';

@Component({
  selector: 'task-column',
  templateUrl: './task-column.component.html',
  styleUrls: ['./task-column.component.css']
})
export class TaskColumnComponent implements OnInit {

  @Input() tasks: Array<any>;
  @Input() name: string;

  constructor() { 
  }

  ngOnInit() {
    
  }
}
