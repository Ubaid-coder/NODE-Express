import express from 'express'

const app = express();
const port = 5000;

app.get('/',
    (req, res) => {
        res.end('HomeRoute')
    }
)

app.get('/login',
    (req, res) => {
        res.end('Login successfully');
    }
)

app.post('/',
    (req, res) => {
        res.end("Post Home Route")
    }
)

app.put('/',(req, res) => {
    res.end('Put Home Route')
})

app.delete('/',(req, res) => {
    res.end('Delete Home Route')
})



app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
})