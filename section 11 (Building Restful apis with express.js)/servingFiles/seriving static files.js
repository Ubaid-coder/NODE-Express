import express from 'express'

const app = express();
const port = 5000;

// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('From Express');
})

app.get('/test', (req, res) => {
    res.sendFile(`${import.meta.dirname}/public/num.txt`)
})

app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
})