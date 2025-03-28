import express from 'express'

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    // res.setHeader('Content-Type', "application/json")
    // res.end(JSON.stringify({message: 'HelloWorld!'}))
    res.status(200).json({message: 'HelloWorld!'})
   
})

app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
})