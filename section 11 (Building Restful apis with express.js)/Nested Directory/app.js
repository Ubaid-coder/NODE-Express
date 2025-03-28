import express from 'express'
import { createWriteStream } from 'node:fs';
import { mkdir, readdir, rename, rm, stat } from 'node:fs/promises'
import cors from 'cors'
import path from 'node:path';


const app = express();
const port = 3000;

// parse the json
app.use(express.json());

// Enabling CORS
app.use(cors());

//Serving Directory Content
app.get('/directory/?*', async (req, res) => {

    const dirname = path.join('/', req.params[0]);
    console.log(dirname);
    try {
        const fullDirPath = `./storage/${dirname ? dirname : ''}`;
        const filesList = await readdir(fullDirPath);

        const resData = [];

        for (const item of filesList) {
            const stats = await stat(`${fullDirPath}/${item}`);
            resData.push({ name: item, isDirectory: stats.isDirectory() });
        }
        res.json(resData);

    } catch (error) {
        res.json(error.message)
    }

})


app.post('/directory/*', async (req, res) => {
    try {
        const dirname = path.join('/',req.params[0]);
        await mkdir(`./storage/${dirname}`);
        res.json({ message: `Directory ${dirname} created successfully.` });
    } catch (error) {
        res.json({ message: error.message });
    }
})
// Reading file
app.get('/files/*', (req, res) => { // /num.txt/ // '{filename: num.txt}'
    const filename = path.join('/',req.params[0])
    const { action } = req.query;
    console.log(filename);
    if (action == 'download') {
        res.set('Content-Disposition', 'attachment;');
    }
    res.sendFile(`${import.meta.dirname}/storage/${filename}`)
})

// Creating a new file
app.post('/files/*', (req, res) => {
    try {
        const filename = path.join('/',req.params[0])
        const writeStream = createWriteStream(`./storage/${filename}`);
        req.pipe(writeStream);
        req.on('end', () => {
            res.end('File uploaded successfully!');
        })
    } catch (error) {
        res.end('Error uploading!')
    }
})

// Delete the File
app.delete('/files/*', async (req, res) => {

    
    const filename = path.join('/',req.params[0])
    const filepath = `./storage/${filename}`;
    try {
        await rm(filepath, { recursive: true });
        res.json({ message: `File ${filename} deleted successfully.` });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Error deleting file.' });
    }

})

// Update the file
app.patch('/files/*', async (req, res) => {
    try {
        const filepath = path.join('/',req.params[0])
        const { newfilename } = req.body;


        await rename(
            `./storage/${filepath}`,
            `./storage/${newfilename}`
        )
        res.json({ message: 'File Changed' });

    } catch (error) {
        res.json({ message: error.message });
    }
})

// server started
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
