import fsPromise from 'node:fs/promises'
import fs from 'fs'

setTimeout(() => {
    console.log('hi');
}, 0);

/*Async IO
const fileContent = await fsPromise.readFile('file.txt', 'utf-8')
console.log(fileContent);

fs.readFile('file.txt', 'utf-8', (err, data) => {
    console.log(data);
})
*/

//Sync IO
const fileContent = fs.readFileSync('file.txt', 'utf-8');
console.log(fileContent);