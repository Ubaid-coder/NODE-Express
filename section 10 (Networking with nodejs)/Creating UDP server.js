import dgram from 'node:dgram' // UDP

const socket = dgram.createSocket("udp4");

socket.on('message', (message, port) => {
    console.log(message.toString());
    console.log(port);
    socket.send('From server', port.port, port.address);
})

// socket.send('HI from PC', 4000, '192.168.100.34');

socket.bind(4000, () => {
    const address = socket.address().port;
    // console.log(address);
    console.log(`listening on port ${address}`);
});