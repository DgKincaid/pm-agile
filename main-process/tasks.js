const ipc = require('electron').ipcMain;

ipc.on('add-task', function(event, arg){
    console.log(arg);
})