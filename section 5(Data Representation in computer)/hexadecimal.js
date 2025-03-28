// Hexadecimal is represented as 0x 
// It starts with {0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f}
// a=10, b=11, c=12, d=13, e=14, f=15

const hexNumber = '0x1A';
parseInt(hexNumber,16);
//26


parseInt('0xFFF',16);
// 4095

//creating a function that can convert hex numbers

function convertHexToDecimal(hexNumber) {
    return parseInt(hexNumber, 16);
}

// Hexadecimal is represented as 0x

console.log(convertHexToDecimal('12'));