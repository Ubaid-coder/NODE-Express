import express from 'express'

const app = express();
const port = 5000;

// app.use((req, res, next) => {
//     console.log(req.url);
//     // console.log(req.headers);
//     req.on('data', (chunk) => {
//         const reqBody = JSON.parse(chunk.toString());
//         req.body = reqBody;

//         next();
//     })

// })

app.use(express.json());

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

app.post('/user', (req, res) => {
    console.log(req.body);
    res.end('Post user');
})


app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
})