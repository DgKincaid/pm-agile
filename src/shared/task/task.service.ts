import { Injectable } from '@angular/core';

declare const window: any;
let ipcRenderer = window.require('electron').ipcRenderer;

@Injectable()
export class TaskService {

  constructor() { 
  }

  save(value: any): void {
    ipcRenderer.send('add-task', value);
  }
}
