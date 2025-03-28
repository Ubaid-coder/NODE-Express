import dgram from 'node:dgram' // UDP

const socket = dgram.createSocket("udp4");

socket.on('message', (a, b) => {
    console.log(a.toString());
    console.log(b);

    
})

socket.send('HI from client', 4000, '192.168.100.47');