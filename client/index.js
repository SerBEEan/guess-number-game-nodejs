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
    const request = process.argv.slice(2).join(' ');    // 0 и 1 - данные кто вызывает и что вызывает
    send(request === '' ? ' ' : request);
});

socket.connect({ port: PORT, host: '127.0.0.1' });
