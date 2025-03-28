import express from 'express'

const app = express();
const port = 5000;

app.use(express.json());

app.use('/admin', (req, res, next) => {
    console.log(req.body);
    if (req.body.username == 'ubaid' && req.body.password == 'secret') {
        res.write(`Welcome ${req.body.username} `);
        next()
    } else {
        res.status(401).send('Unauthorized');
    }
})

app.post('/admin', (req, res) => {
    res.end('Hello Admin')
})


app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
})