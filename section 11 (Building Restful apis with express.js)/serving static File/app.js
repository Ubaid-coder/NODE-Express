import express from 'express'


const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.end('Hello World');
})


app.get('/server', (req, res) => {
    const path = import.meta.filename;
    console.log(path);
    res.sendFile(`${import.meta.dirname}/app.js`);
})

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})
