import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { TaskService } from '../../shared/index';
@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.addForm = this.fb.group({
      name: '',
      description: ''
    })
  }

  save(){
    console.log(this.addForm);

    this.taskService.save(1);
  }
}
