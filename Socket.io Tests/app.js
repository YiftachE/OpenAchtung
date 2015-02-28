(function() {
    var http = require('http');
    var io = require('socket.io')(http);

    io.on('connection', function(socket){
        console.log('a user connected');
    });

    http.createServer(function(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end("hello world");
    }).listen(8080);
}());

