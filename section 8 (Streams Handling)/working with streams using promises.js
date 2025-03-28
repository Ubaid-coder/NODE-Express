import fs from 'node:fs/promises';

console.time();
const readHandleStream = await fs.open('large.txt',);
const writeHandleStream = await fs.open('copylarge.txt','w+');
const WriteStream = writeHandleStream.createWriteStream();
const ReadStream = readHandleStream.createReadStream();

ReadStream.pipe(WriteStream);
console.timeEnd();

// console.time();
// for (let i = 1; i <= 10; i++) {
//     await fs.appendFile('large.txt', `${i}, `);
// }
