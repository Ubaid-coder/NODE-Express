import express from 'express'
import { mkdir, readdir, stat } from 'node:fs/promises'
import path from 'node:path';


const router = express.Router();

//Serving Directory Content
router.get('/?*', async (req, res) => {

    const dirname = path.join('/', req.params[0]);

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

router.post('/*', async (req, res) => {
    try {
        const dirname = path.join('/',req.params[0]);
        await mkdir(`./storage/${dirname}`);
        res.json({ message: `Directory ${dirname} created successfully.` });
    } catch (error) {
        res.json({ message: error.message });
    }
})

export default router;