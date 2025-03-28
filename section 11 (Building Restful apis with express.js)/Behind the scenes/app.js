import express from 'express'
import http from 'node:http'

const app = express();
app.disable('x-powered-by');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from express');
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // res.end('Hello from express 😢');
})

app.get('/test', (req,res) => {
    res.send('Test content')
})


const server = http.createServer(app);
server.listen(port, () => {
    console.log('Listening on port ' + port);
})

// app.listen(port, () => {
//     console.log(`Serving on port ${port}`);
// })