import express from 'express';

const app = express();
const port = 3000;

app.use((req, res, next) => {
    // res.set('Access-Control-Allow-Origin', req.headers.origin);
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Methods', '*');
    // res.set('Access-Control-Allow-Methods', 'PATCH');
    res.set('Access-Control-Allow-Headers', '*');
    next();
})

// also we can use cors library 'npm i cors'


app.get('/', (req, res) => {
    console.log(req.headers.origin);
    res.json({ message: "Hello, GET request" });

})

app.post('/', (req, res) => {
    res.json({ message: "Hello, POST request" });
})

app.put('/', (req, res) => {
    res.json({ message: "Hello, put request" });
})

app.patch('/', (req, res) => {
    res.json({ message: "Hello, patch request" });
})

app.delete('/', (req, res) => {
    res.json({ message: "Hello, delete request" });
})

app.listen(port, () => {
    console.log(`Sever started on port ${port}`);
})