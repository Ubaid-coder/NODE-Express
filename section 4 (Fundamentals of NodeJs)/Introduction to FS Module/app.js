import fs from 'node:fs/promises'

// const file = fs.readFileSync('./file-1.txt);
// console.log(file.toString());

// fs.readFile('./file-1.txt',(err,data) => {
//     const content = data.toString();
//     console.log(content);
// });
let num = 0;
setInterval(() => {
    console.log(num++);
},[1000])

const file = await fs.readFile('./index.html',);
console.log(file.toString());


console.log('End');
