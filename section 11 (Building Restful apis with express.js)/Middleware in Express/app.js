import express from 'express'

const app = express();

const port = 3000;



app.get('/', (req, res, next) => {
    // Request Handler Middleware - 3 Params
    
    try {
        console.log('Rinning Middleware1');
        res.end('hello guys');
        throw new Error('Manual error by ME!');
    } catch (error) {
        next(error);
    }
    

}
    , (req, res) => {
        // Request Handler Middleware - 2 Params
        console.log('Rinning Middleware2');

        res.write('Hello World2!\n');
    }, (err, req, res, next) => {
        // Request Handler Middleware - 4 Params
        console.log(err);
        console.log('Rinning Error Middleware');

        res.end('Error Found');
    }

)



app.listen(port, () => {
    console.log(`Serving on port ${port}`);
})