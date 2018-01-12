import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/index';

@Component({
  selector: 'task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {
  private tasks: Array<any>;

  get getTasks(){
    return this.tasks;
  }
  constructor(private taskService: TaskService) { 
    this.taskService.getTasks();

    this.taskService.taskChange.subscribe(() => {
      this.tasks = this.taskService.tasks;
    })
  }

  ngOnInit() {
  }

}
