import express from 'express'

const app = express();
const port = 5000;

app.get('/',
    (req, res, next) => {
        try {
            res.end('Hello From express');
            // throw new Error('I created this error')
            console.log('Middleware 1');
        } catch (error) {

            next(error);
        }
    },

    (err, req, res, next) => {
        console.log({ err: err.message });
        console.log('Error Occured');
        res.end("Error occured");
    },

    (req, res) => {
        console.log('Middleware 2');
        res.end('Hello from middleware');

    }
)

app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
})