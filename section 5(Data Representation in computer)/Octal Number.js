// Octal is a base-8 number system, which means it uses digits from 0 to 7. Here's a quick guide:

/*
How Octal Works:

* Each place value in an octal number represents a power of 8.
* Next digit to the left = 8^0 (1's place)
* Next digit to the left = 8^1 (8's place)
* Next digit to the left = 8^2 (64's place)


*/


/* 

Example of Octal NUmber:

* (Let us take 256 in ocatl number)=>{
    2 b56 = 2x8^2 + 5x^1 + 6x8^0
    2×64 + 5×8 + 6×1
    128 + 40 + 6 = 174 in decimal!
}



*/

//creating a function that can convert into octal numbers

function decimalToOctal(decimal) {
    return parseInt(decimal, 8);
}

//ocatal number representation 0o

console.log(decimalToOctal(12));