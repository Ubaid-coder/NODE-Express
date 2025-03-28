


import fs from 'node:fs/promises'

fs.writeFile('./Hello.txt', 'Hi, I am Ubaid and write this with nodejs writeFile.')
// fs.appendFile('./Hello.txt','\nHelloWorld')

const read = await fs.readFile('./Hello.txt',);
console.log(read);
// const write = await fs.writeFile('c:\\users\\hp\\onedrive\\desktop\\hulk.txt',read);

async function handleFile() {
    const sourcePath  = process.argv[2]; 
    const destinationPath = process.argv[3];
    

    if (!sourcePath || !destinationPath) {
        console.log("Please provide both source and destination paths.");
        return;
    }

    try {
        const picture = await fs.readFile(sourcePath);
        console.log(`Successfully read file from: ${sourcePath}`);

        await fs.writeFile(destinationPath, picture);
        console.log(`File written successfully to: ${destinationPath}`);
    } catch (err) {
        await fs.writeFile('./error.log', `${err.message}`);
        console.error(`Error: ${err.message}`);
    }
}

handleFile();


// setInterval(() => {
//     fs.writeFile('./time.txt', new Date().toLocaleTimeString())
// }, [1000])


