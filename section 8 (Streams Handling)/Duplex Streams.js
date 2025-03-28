import fs from 'node:fs';
import {Readable, Writable, Duplex} from 'stream'

const readStream = fs.createReadStream('c:\\Users\\hp\\OneDrive\\Desktop\\01. Piercing Light.mp3', {highWaterMark: 1000*1000});


