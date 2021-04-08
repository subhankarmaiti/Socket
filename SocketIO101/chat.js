const express = require('express');
const http = require('http');
const app = express();
const {Server} = require('socket.io');
const server = http.createServer(app);
app.use(express.static(__dirname + '/public'));


const io = new Server(server);

io.on('connection', (socket,req)=>{
    // console.log(socket);
    socket.emit('messageFromServer',{data: 'Welcome to the websocket server!!'});
    socket.on('messageToServer',(dataFromClient)=>{
        console.log(dataFromClient);
    })

    socket.on('newMessageToServer',(msg)=>{
        io.emit('messageToClients',{text:msg.text});
    })
})

server.listen(8000);