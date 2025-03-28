import fs from 'node:fs';

const wrieStream = fs.createWriteStream('streamFile.txt', { highWaterMark: 4 });

// console.log(wrieStream.writableHighWaterMark);

let i = 1;
write1000a()

wrieStream.on('drain', () => {
    write1000a();
    
})

function write1000a() {
    while (i <= 1000) {
        console.log(wrieStream.writableLength);
        let isEmpty = wrieStream.write('a');
        

        i++;
        console.log(isEmpty);
        if (!isEmpty) break;
    }
}
