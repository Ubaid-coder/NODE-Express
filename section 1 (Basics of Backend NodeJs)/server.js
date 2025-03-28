const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
     const file = fs.readFileSync('../URL.txt');
     res.end(file);
})

server.listen(3000)