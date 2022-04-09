'use strict';

const net = require('net');
const { rand, checkGuessNumber, checkCorrectCommand } = require('../utils');

const PORT = 3000;

let NUMBER = rand(0, 100);

const connection = (socket) => {
    socket.on('data', (data) => {
        const value = checkCorrectCommand(data.toString());

        if (typeof value === 'string') {
            socket.write(value);
        } else {
            const resultMsg = checkGuessNumber(NUMBER, value);

            if (resultMsg === 'correct!') {
                socket.write(`${resultMsg}\nnew value is set`);
                NUMBER = rand(0, 100);
            } else {
                socket.write(resultMsg);
            }
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