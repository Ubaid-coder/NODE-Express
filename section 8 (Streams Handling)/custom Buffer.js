import fs from 'fs'

console.time();

const buff = Buffer.allocUnsafe(4);

const fd = fs.openSync('numbers.txt', 'w');

for(let i =1; i<=10; i++) {
    buff.write(`${i}, `);
    
    // fs.writeFileSync(fd, `${i}, `);
}

fs.closeSync(fd);
console.timeEnd();