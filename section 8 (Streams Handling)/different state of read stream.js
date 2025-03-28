import fs, { read } from 'node:fs';


const readStream = fs.createReadStream('readFile.txt', { highWaterMark: 4 });

// readStream.on('data', (chunk) => {
//     // readStream.pause();

//     // console.log(readStream.readableFlowing);
//     // console.log(readStream.readableEnded);
//     // console.log(readStream.isPaused());
// })

// readStream.on('end', (chunk) => {

//     console.log(readStream.readableFlowing);
//     console.log(readStream.readableEnded);
//     console.log(readStream.isPaused());
// })

let readCount = 0;
readStream.on('data', (chunk) => {
    // console.log(chunk.byteLength);    
    readCount++

    
    if (readCount === 1) {
        fs.writeFileSync('abc.txt', chunk)
    }else{
        fs.appendFileSync('abc.txt', chunk);
    }
    console.log(chunk);
    readStream.pause();

    setTimeout(() => {
        readStream.resume();
        console.log('writing ');
    }, 500);

})

readStream.on('resume', () => {
    console.log('Stream Resumed');
})

readStream.on('pause', () => {
    console.log('Stream Paused');
})