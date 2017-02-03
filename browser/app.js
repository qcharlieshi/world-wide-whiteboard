// window.addEventListener('draw', )


//let whiteboardSocket = io(window.whiteboard);
//var socket = io(window.location.origin);


let socket = io.connect(window);
//let socket = io.connect(window.whiteboard);





socket.on('connect', function (newSocket) {
    console.log(socket);
    console.log('I have made a persistent two-way connection to the server!');

    window.whiteboard.on('draw', function(drawEvent) {
        //console.log("in draw event");
        //socket.emit('drawEvent', drawEvent);
        socket.emit('drawEvent', drawEvent);
    });


});

socket.on('drawData', function(data) {
    console.log("drawing--------------");
    //console.log(data);
    window.whiteboard.draw(data, data);
})



// whiteboardSocket.on('connect', function(event) {
//     console.log("emitting information");

//     //event.emit('drawing');

// })
