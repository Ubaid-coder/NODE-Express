import express from 'express'
import { createWriteStream } from 'node:fs';
import { rename, rm } from 'node:fs/promises'
import path from 'node:path';


const router = express.Router();
const fullPath = path.resolve(import.meta.dirname, '../');

// Reading file
router.get('/*', (req, res) => { // /num.txt/ // '{filename: num.txt}'
    try {
        const filename = path.join('/', req.params[0])
        const { action } = req.query;
        console.log(filename);
        if (action == 'download') {
            res.set('Content-Disposition', 'attachment;');
        }

        res.sendFile(`${fullPath}/storage/${filename}`);
        
    } catch (error) {
        res.json({ message: error.message })
    }

})


// Creating a new file
router.post('/*', (req, res) => {
    try {
        const filename = path.join('/', req.params[0])
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
router.delete('/*', async (req, res) => {


    const filename = path.join('/', req.params[0])
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
router.patch('/*', async (req, res) => {
    try {
        const filepath = path.join('/', req.params[0])
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

export default router;