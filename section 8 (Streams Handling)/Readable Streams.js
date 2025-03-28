import fs from 'node:fs'
// import fs from 'node:fs/promises'

// console.time();
// const fileBuff = await fs.readFile('chars.txt'); //Can not read file more then 2GB

// console.log(fileBuff.byteLength);
// // console.log(fileBuff.toString());

// console.timeEnd(); ~66sec

const readStream = fs.createReadStream('./chars.txt', {highWaterMark: 90000});

readStream.on('data', (chunkBuffer) => {
    
    console.time();
    // console.log(chunkBuffer);
    console.log(chunkBuffer.byteLength);
    // fs.appendFileSync('createdFile.txt',chunkBuffer)
    console.timeEnd()
})

readStream.on('close', () => {
    console.log('Read stream closed.')
})

// readStream.on('readable', () => {
//     console.log('readable data.')
// })

readStream.on('error', (err) => {
    console.error('Error reading file:', err)
})
readStream.on('end', () => {
    console.log('done reading file.')
})
