import express, { json } from 'express'

const app = express();
const port = 3000;

// Parsing JSONBody (Custom Middleware )
/* app.use((req, res, next) => {
    req.on('data', (chunk) => {
        const reqBody = JSON.parse(chunk.toString());
        req.body = reqBody;
        next();
    })
})
*/

//Expresss Middleware
app.use(express.json());



app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.route.path);
    res.end('Home Route');
})

app.get('/user', (req, res) => {

    res.end('USER NAME')
})

app.post('/user', (req, res) => {
    console.log(req.body);
    console.log(req.url);
    res.end('User Created');
})

// Login
app.get('/login', (req, res) => {
    res.end('Logged In');
})


app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})
