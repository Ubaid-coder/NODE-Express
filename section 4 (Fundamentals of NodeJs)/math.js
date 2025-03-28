export function Product(...nums) {
    let total = 1;
    for (num of nums) {
        total *= num;
    }
    return total;
}

export function Sum(...nums){
    let total = 0;
    for(let num of nums){
        total +=num;
    }
    return total;
}

// module.exports = 'HelloWorld'
// module.exports = {
//     Product,
//     Sum
// }
// module.exports = [
//     Product,
//     Sum
// ]