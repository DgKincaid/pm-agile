import { Injectable, EventEmitter } from '@angular/core';

declare const window: any;
let ipcRenderer = window.require('electron').ipcRenderer;

@Injectable()
export class TaskService {

  public tasks: Array<any> = new Array<any>();
  public loading: boolean = false;

  public taskChange: EventEmitter<any> = new EventEmitter<any>();
  counter = 0;
  constructor() { 
    ipcRenderer.on('get-task-reply', (event, arg) => {
      this.emitTaskChange(arg);
      this.loading = false;
    })
  }

  private emitTaskChange(tasks){
    this.tasks = new Array<any>();
    tasks.forEach(element => {
      this.tasks.push(element);
    });

    this.taskChange.emit(this.tasks);
  }

  public save(value: any): void {
    value.state = 'to_do';
    ipcRenderer.send('add-task', value);
  }

  public getTasks(){
    this.loading = true;
    ipcRenderer.send('get-tasks');
  }
}
