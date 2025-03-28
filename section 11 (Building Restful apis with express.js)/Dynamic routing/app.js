import express from 'express'
import { createWriteStream } from 'node:fs';
import { readdir, rename, rm } from 'node:fs/promises'

const app = express();
const port = 3000;

// parse the json
app.use(express.json());

// Enabling CORS
app.use((req, res, next) => {
   
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
    })

    next();
})


// Opening file
app.get('/:filename/', (req, res) => { // /num.txt/ // '{filename: num.txt}'
    const { filename } = req.params;
    const { action } = req.query;

    console.log(filename, action);
    if (action == 'download') {
        res.set('Content-Disposition', 'attachment;');
    }
    res.sendFile(`${import.meta.dirname}/storage/${filename}`)
})

//Serving Directory Content
app.get('/', async (req, res) => {

    const filesList = await readdir('./storage')

    res.json(filesList);

})

app.post('/:filename',(req, res) => {
    try {
        const { filename } = req.params;
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
app.delete('/:filename', async (req, res) => {

    const { filename } = req.params;
    const filepath = `${import.meta.dirname}/storage/${filename}`;
    try {
        await rm(filepath);
        res.json({ message: `File ${filename} deleted successfully.` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error deleting file.' });
    }

})

// Update the file
app.patch('/:filename', async (req, res) => {
  try {
      const {filename} = req.params;
      const {newfilename} = req.body;
      console.log(newfilename);
      await rename(
          `./storage/${filename}`,
          `./storage/${newfilename}`
      )
     res.json({message: 'File Changed'});

  } catch (error) {
    res.json({message: error.message});
  }
})


// server started
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
