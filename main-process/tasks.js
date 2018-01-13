const taskDA = require('../db/model/tasks');
const ipc = require('electron').ipcMain;

ipc.on('add-task', function(event, arg){
    console.log('Add task');
})

ipc.on('get-tasks', function(event, arg) {

    taskDA.getTasks((err, res) => {

        if(err){
            console.log(err);
        }
        event.sender.send('get-task-reply', res.rows)
    })
})