import fs from 'fs'

// const fd = fs.openSync('abc.txt','r'); // normally in read mode
// const fd = fs.openSync('abc.txt','r'); // normally in read mode
const fd = fs.openSync('abc.txt','a'); // normally in read mode

fs.writeSync(fd, 'hi')
