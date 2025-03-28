import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify({message:'This is message'}));

    res.status(201).json({message:'This is message'});
    res.json({message:'This is message'});
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})