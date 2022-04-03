'use strict';

const net = require('net');

const socket = new net.Socket();
const PORT = 3000;

const send = (message) => {
    socket.write(message);
};

socket.on('data', (data) => {
    console.log(data.toString());
    socket.end();
});

socket.on('error', (err) => {
    console.log('Error', err);
});

socket.on('connect', () => {
    const command = process.argv[2];
    if (command !== 'guess') {
        console.log('enter the correct command');
        socket.end();
        return ;
    }

    const value = process.argv[3];
    if (Number.isNaN(Number(value))) {
        console.log('the value of the "guess" command is a number');
        socket.end();
        return ;
    }

    send(value);
});

socket.connect({ port: PORT, host: '127.0.0.1' });
