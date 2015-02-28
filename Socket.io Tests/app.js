(function() {
    var http = require('http').createServer();
    var server=require('socket.io')(http);
    server.on('connection',function(socket){
      console.log("aaa");
      socket.on('event',function(data){

      });
      socket.on('disconnect',function(){

      });
    });
    server.listen(3000);
}());

