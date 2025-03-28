import express, { json } from 'express'

const app = express();
const port = 3000;

app.use(express.json());

// req.url.startsWith(routeName)
app.use('/users/1', (req, res, next) => { // POST, PUT, GET etch
    res.send('first middleware');
})

app.use('/users', (req, res, next) => { 
    console.log('url: ',req.url);
    console.log(req.method, 'method');
    res.send('second middleware');
})

app.use('/admin', (req, res, next) => {
    
    const password = req.body.password; 
    
    console.log(req.url); // trim  the matched part only in app.use() 
    console.log(req.originalUrl);
    
    if(password === 'kbn3104') next();
    else res.status(401).send('invalid Password');
    
})

app.post('/admin', (req, res) => {
    res.send(`Hello ${req.body.name}, welcome to dashboard`);
})

app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})
