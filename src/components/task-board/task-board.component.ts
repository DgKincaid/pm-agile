import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.css']
})
export class TaskBoardComponent implements OnInit {

  tasks = [
    {
      id: 2,
      name: 'Test Task 2',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
      state: 'To Do',
      assigned_to: 'John Smith'
    },
    {
      id: 3,
      name: 'Test Task 1',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
      state: 'To Do',
      assigned_to: 'John Smith'
    },
    {
      id: 4,
      name: 'Test Task 3',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
      state: 'To Do',
      assigned_to: 'John Smith'
    }
  ]

  get getTasks(){
    return this.tasks;
  }
  constructor() { }

  ngOnInit() {
  }

}
