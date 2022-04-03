'use strict';

const net = require('net');

const PORT = 3000;

const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

let NUMBER = rand(0, 100);

const connection = (socket) => {
    socket.on('data', (data) => {
        const guess = Number(data.toString());
        if (guess > NUMBER) {
            socket.write('less');
        } else if (guess < NUMBER) {
            socket.write('more');
        } else {
            socket.write('correct!\nnew value is set');
            NUMBER = rand(0, 100);
        }
    });

    socket.on('error', (err) => {
        console.log('Error socket', err);
    });
};

const server = net.createServer();

server.on('connection', connection);

server.listen(PORT, () => {
    console.log(`Server starting on ${PORT} port`);
});