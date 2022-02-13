// 5. Check whether a number is even or odd.
let input = require('readline-sync');

let x = Number(input.question('Input Number : '));

console.log(x % 2 === 0 ? 'Even' : 'Odd');

// if(x % 2 === 0) {
//     console.log('Number is even.');
// } else {
//     console.log('Number is odd.');
// } 

