import fs from 'node:fs'

const readStream = fs.createReadStream('readFile.txt', {highWaterMark:4, encoding: 'utf-8'});
// readStream.setEncoding('utf8');


readStream.on('data', (chunk) => {
    console.log(chunk);
    readStream.destroy({ err: 'pta nhai kia hoa ha!' });
})

readStream.on('end', () => {
    console.log('ended');
})

readStream.on('error', (err) => {
    // console.log(err);
})

readStream.on('open', () => {
    console.log('opened');
})

readStream.on('close', () => {
    // console.log('closed');
})
