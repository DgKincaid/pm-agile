const taskDA = require('../db/model/tasks');
const ipc = require('electron').ipcMain;

ipc.on('add-task', function(event, arg){
    console.log('Add task');
    console.log(arg);

    taskDA.addTask(arg, (err, res) => {
        if(err){
            console.log(err);
        }
        //Save Successfull
        console.log('save successful');
    })
})

ipc.on('get-tasks', function(event, arg) {

    taskDA.getTasks((err, res) => {

        if(err){
            console.log(err);
        }
        event.sender.send('get-task-reply', res.rows)
    })
})

ipc.on('update-task', function(event, arg){
    console.log(arg);
    taskDA.updateTask(arg, (err, res) => {
        if(err){
            console.log(err);
        }
        console.log('update success');
    })
})