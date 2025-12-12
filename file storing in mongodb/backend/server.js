import express from 'express';
import { connectDB } from './lib/connectDb.js';
import multer from 'multer';
import cors from 'cors';
import File from './models/files.js'

const app = express();
const port = 4000;

app.use(express.json())

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });



app.use(express.json());

app.use(cors());

await connectDB();

app.get('/', async (req, res) => {

    res.json({ msg: 'Hello From home' });
})

app.get('/file/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);

        if (!file) return res.status(404).send("File not found");

        res.set({
            "Content-Type": file.contenttype,
            "Content-Disposition": `inline; filename="${file.filename}"`
        });

        res.send(file.data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/file/download/:id', async (req, res) => {
    try {
        const file = await File.findById(req.params.id);

        if (!file) return res.status(404).send("File not found");

        res.set({
            "Content-Type": file.contenttype,
            "Content-Disposition": `attachment; filename="${file.filename}"`
        });

        res.send(file.data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/files', async (req, res) => {

    const files = await File.find();

    const formatted = files.map(f => ({
        id: f._id,
        filename: f.filename,
        contenttype: f.contenttype,
        url: `http://localhost:4000/file`
    }));

    res.json({ formatted, msg: 'Your Files' }, { status: 200 });
});


app.post('/upload', upload.single("file"), async (req, res) => {

    try {
        const { originalname, mimetype, buffer } = req.file;
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const MB = req.file.size / 1024 / 1024;
        if (MB >= 16) {
            return res.status(400).send('File is large maximum 16MB allowed!');
        }

        const newFile = new File({
            filename: originalname,
            contenttype: mimetype,
            data: buffer
        })
        console.log('New file')

        await newFile.save();
        console.log('File Saved In DB')
    } catch (error) {
        console.log(error)
        return res.status(500).send("Server error")
    }

    res.send("OK");
});

app.delete('/file/delete/:id', async (req, res) => {
    const { id } = req.params;
    const file = await File.findByIdAndDelete({ _id: id });
    

    res.json({ msg: "Deleted!" })
})



app.listen(port, () => {
    console.log(`Server Running On PORT ${port}`);
})

