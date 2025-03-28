import express from 'express'

const app = express();

const port = 3000;


app.get('/', (req, res) => {
    res.end('Home Route');
})

app.get('/login', (req, res) => {
    res.end('Login Page');
})

app.post('/', (req, res) => {
    res.end('POST Home Route')
})

app.delete('/', (req, res) => {
    res.end('DELETE Home Route')
})

app.put('/', (req, res) => {
    res.end('PUT Home Route')
})

app.patch('/', (req, res) => {
    res.end('PATCH Home Route')
})




app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})