const ipc = require('electron').ipcMain;

var tasks = [
    {
      id: 2,
      name: 'Test Task 2',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
      state: 'to_do',
      assigned_to: 'John Smith'
    },
    {
      id: 3,
      name: 'Test Task 1',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
      state: 'to_do',
      assigned_to: 'John Smith'
    },
    {
      id: 4,
      name: 'Test Task 3',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
      state: 'to_do',
      assigned_to: 'John Smith'
    },
    {
        id: 5,
        name: 'Test Task 3',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lobortis porttitor laoreet. Nam molestie nunc sed velit tincidunt, ac cursus velit lacinia. Duis semper urna quis gravida condimentum. ",
        state: 'in_progress',
        assigned_to: 'John Smith'
      }
  ]

ipc.on('add-task', function(event, arg){
    console.log(arg);
})

ipc.on('get-tasks', function(event, arg){
    event.sender.send('get-task-reply', tasks)
})