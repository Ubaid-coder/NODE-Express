import express from 'express';

const app = express();
const port = 5000;

app.disable('x-powwered-by');

app.get('/',(req, res) => {
    res.send('Hello World');
    
})

app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`)
})

