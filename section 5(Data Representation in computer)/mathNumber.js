const digitsList1 = [2,4,6,5];
const digitsList2 = [7,3,2];

const num1 = 2*1 + 4*10 + 6*100 + 5*1000;
const num2 = 7* Math.pow(10,0) + 3*Math.pow(10,1) + 2*Math.pow(10,2);

// console.log('num1:'+ num1);
// console.log('num2:'+ num2);
function digitsToNumber(digits) {
    let num=0;
    debugger
   digits.forEach((digit,index) => {
    num += digit*Math.pow(10,index)
   })
    return console.log(num);
}
/* num=0
    2X10^0=2+num = 2+0
    num=2
    4X10^1=40+num = 40+2
    num=42
    6X10^2=600+num = 600+42
    5X10^3=5000+num = 5000+642
    num=5642

*/

digitsToNumber(digitsList1);