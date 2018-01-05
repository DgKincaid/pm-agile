import { Injectable } from '@angular/core';

declare const window: any;
let ipcRenderer = window.require('electron').ipcRenderer;

@Injectable()
export class TaskService {

  constructor() { 
    console.log('Test')
    this.save(1);
  }

  save(vale: any): void {
    ipcRenderer.send('add-task');
  }
}
