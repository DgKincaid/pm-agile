import { Component, OnInit, EventEmitter, NgZone } from '@angular/core';
import { TaskService } from '../../shared/index';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {
  public tasks: Array<any> = new Array<any>();

  constructor( private taskService: TaskService, private zone: NgZone) { 
    this.taskService.taskChange.subscribe((tasks) => {

      this.zone.run(() =>{
        this.tasks = this.taskService.tasks;
      })
    })
  }

  ngOnInit() {
    this.taskService.getTasks();
  }

  public filterTasks(tasks: Array<any>, filter: string): Array<any>{
    
    return tasks.filter(task => task.state == filter);
  }
}
