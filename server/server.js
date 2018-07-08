const path = require ('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) =>{
    console.log('New user Connected');

    socket.emit('newMessage', {
        from: 'yasir@sample.com',
        text: 'New chat Message.',
        createAt: 123
    });

    socket.on('createMessage', function(newMessage){
        console.log('createMessage: ', newMessage);
    });
    socket.on('disconnect', () => {
        console.log('Disconnected!!!');
    });
});

app.use(express.static(publicPath));
server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
