var socket = io();
socket.on('connect', function() {
    console.log('Connected to Server');

    socket.emit('createMessage', {
        to: 'maheen@samples.com',
        text: 'New chat message'
    });
});
socket.on('disconnect', function() {
    console.log('Disconnected!!');
});

socket.on('newMessage', function(message){
    console.log('New Message', message);
});