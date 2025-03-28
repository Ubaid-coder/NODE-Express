import express from 'express'
import { createWriteStream } from 'node:fs';
import { rename, rm, writeFile } from 'node:fs/promises'
import path from 'node:path';
import filesData from '../filesDB.json' assert {type: 'json'}



const router = express.Router();
const fullPath = path.resolve(import.meta.dirname, '../');

// Reading file
router.get('/:id', (req, res) => { // /num.txt/ // '{filename: num.txt}'
    try {
        const {id} = req.params;
        const fileData = filesData.find((file) => file.id ==id);
        console.log(fileData);
        const { action } = req.query;
        
        if (action == 'download') {
            res.set('Content-Disposition', 'attachment;');
        }

        res.sendFile(`${fullPath}/storage/${id}${fileData.extention}`);

    } catch (error) {
        res.json({ message: error.message })
    }

})


// Creating a new file
router.post('/:filename', (req, res) => {
    try {
        const { filename } = req.params;
        const extention = path.extname(filename);
        const id = crypto.randomUUID();
        const fullFileName = `${id}${extention}`

        const writeStream = createWriteStream(`./storage/${fullFileName}`);

        req.pipe(writeStream);
        req.on('end', async() => {
            filesData.push({
                id,
                extention,
                name: filename

            })
            await writeFile('./filesDb.json',JSON.stringify(filesData))
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