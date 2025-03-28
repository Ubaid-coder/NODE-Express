import fs from 'node:fs'
import { pipeline } from 'node:stream';

console.time();

const filePaht = "c:\\Users\\hp\\OneDrive\\Desktop\\01. Piercing Light.mp3";

const readStream = fs.createReadStream(filePaht, { highWaterMark: 810 * 810 });
const writeStream = fs.createWriteStream('music.mp4', { highWaterMark: 810 * 810 });

// readStream.pipe(writeStream);


pipeline(readStream, writeStream, (err) => {
    console.log('Error occured: ',err);
})

readStream.destroy('khatam')


// setTimeout(() => {
//     readStream.unpipe(writeStream);
//     readStream.destroy();
// }, 500)



// readStream.on('error', (err) => {
//     console.log(err.message);
// })


// readStream.on('data', (chunk) => {
//     const isEmpty = writeStream.write(chunk);
//     if(!isEmpty){
//         readStream.pause();
//     }
// })

// writeStream.on('drain', () => {
//     readStream.resume();
// })

readStream.on('end', () => {
    console.timeEnd();
})