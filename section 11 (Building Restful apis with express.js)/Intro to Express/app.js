import express from 'express'

const app = express();
app.disable('x-powered-by');
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from express');
    // res.setHeader('Content-Type', 'text/html; charset=utf-8');
    // res.end('Hello from express 😢');
})


app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})