const http = require('http');
const {Server} = require('socket.io');
const server = http.createServer((req,res)=>{
    res.end("I am connected");
})

const io = new Server(server,{
    cors: {
        origin:'*'
      }
}); 

io.on('connection', (socket,req)=>{
    // console.log(socket);
    socket.emit('welcome','Welcome to the websocket server!!');
    socket.on('message',(msg)=>{
        console.log(msg);
    })
})

server.listen(8000);