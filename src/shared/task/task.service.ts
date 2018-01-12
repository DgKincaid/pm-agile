import { Injectable, EventEmitter } from '@angular/core';

declare const window: any;
let ipcRenderer = window.require('electron').ipcRenderer;

@Injectable()
export class TaskService {

  public tasks: Array<any> = [];

  public taskChange: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
    ipcRenderer.on('get-task-reply', (event, arg) => {
      console.log(arg);
      this.emitTaskChange(arg);
    })
  }

  private emitTaskChange(tasks){
    this.tasks = tasks;
    this.taskChange.emit();
  }

  public save(value: any): void {
    ipcRenderer.send('add-task', value);
  }

  public getTasks(){
    ipcRenderer.send('get-tasks');
  }
}
