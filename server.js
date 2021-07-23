var app = require('express')();
var http = require('http').Server(app);
var io = require("socket.io")(http);

var clientCount = 0;
 
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on("connection",function(socket){
  clientCount++;
  socket.nickname = "user" + clientCount;

  io.emit("enter", socket.nickname + '进入');

  socket.on("message", function(msg){
    io.emit("message", socket.nickname + '说：'+ msg);
  })

  socket.on("disconnect", function(){
    io.emit("leave", socket.nickname + '离开');
  })
})

 
http.listen(3000, function(){
  console.log('listening on *:3000');
})