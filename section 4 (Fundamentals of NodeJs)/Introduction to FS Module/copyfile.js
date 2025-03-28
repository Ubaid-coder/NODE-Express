import {copyFile} from 'node:fs/promises'

await copyFile('me.jpg','destination.txt');
console.log('The file has been copied');