import express from 'express'
import {readdir} from 'node:fs/promises'

const app = express();
const port = 3000;

// Enabling CORS
app.use((req, res, next) => {
    res.set("Access-Control-Allow-Origin", "*");
    next();
})

// Serving Files
// app.use(express.static('./storage'));
app.use((req, res, next) => {
    if(req.query.action == 'download'){
        res.set('Content-Disposition', 'attachment; ');
    }
    const serverstatic = express.static('storage');
    serverstatic(req, res, next);

});

//Serving Directory Content
app.get('/', async(req, res) => {

    const filesList = await readdir('./storage')
    
    res.json(filesList);
    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});