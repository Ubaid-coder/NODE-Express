import express from 'express'
import cors from 'cors'
import directoryRoutes from './routes/directoryRoutes.js'
import fileRoutes from './routes/fileRoutes.js'

const app = express();
const port = 3000;

// parse the json
app.use(express.json());

// Enabling CORS
app.use(cors());

// Directory Route
app.use('/directory', directoryRoutes);

// File Route
app.use('/file', fileRoutes)


// server started
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
