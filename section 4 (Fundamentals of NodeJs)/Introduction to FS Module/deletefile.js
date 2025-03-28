import fs from 'node:fs/promises'

// fs.unlink('./error.log');

fs.rm('./cocacola', {recursive:true})