import fs from 'node:fs/promises'


const filePath = process.argv[2];
const letter = process.argv[3]


const fileContent = await fs.readFile(filePath,'utf8');
const wordsArray = fileContent.split(/[\W]/).filter((w) => w!= '');

const wordsCount = {};

wordsArray.forEach((word) => {
    if(word in wordsCount) {
        wordsCount[word] +=1;
    }else{
        wordsCount[word] = 1;
    }
})

if(letter){
    if(letter in wordsCount) {
        console.log(`${letter}:${wordsCount[letter]}`);
    }else{
        console.log('Word not found!');
    }
}else{
    console.log(wordsCount);
}

