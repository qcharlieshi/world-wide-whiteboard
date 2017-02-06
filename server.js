var path = require('path');

var http = require('http');
var server = http.createServer();

var express = require('express');
var app = express();

var socketio = require('socket.io');

server.on('request', app);

server.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});

//This is a socket creator, has access to all our sockets
var io = socketio(server);

io.on('connection', function (mainSocket) {
    console.log('A new client has connected!');
    console.log("--------------------------------");
    console.log(mainSocket.id);
    //console.log(io.sockets);

    mainSocket.on('drawEvent', function(data) {
        console.log(data);

        mainSocket.broadcast.emit('drawData', data);
    })

    mainSocket.on('disconnect', function (socket) {
        console.log('Disconnected from Server');
        //console.log(socket.id);
        //console.log(io.sockets);
    });

});





app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


// var path = require('path');
// var express = require('express');
// var app = express(); // the app returned by express() is a JavaScript Function. Not something we can pass to our sockets!
// let socketio = require('socket.io');
// //let server = http.createServer();

// // app.listen() returns an http.Server object
// // http://expressjs.com/en/4x/api.html#app.listen
// //server.on('request', app);


// var server = app.listen(1337, function () {
//     console.log('The server is listening on port 1337!');
// });

// var io = socketio(server);


// app.use(express.static(path.join(__dirname, 'browser')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });
