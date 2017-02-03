// window.addEventListener('draw', )


window.whiteboard.on('draw', function(event) {

    console.log(event);

});

var socket = io(window.location.origin);

socket.on('connect', function () {
    console.log('I have made a persistent two-way connection to the server!');
});