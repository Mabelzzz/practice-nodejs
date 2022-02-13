// 4. Check whether a number is divisible by 5 and 11 or not.
let input = require('readline-sync');

let x = Number(input.question('Input Number : '));

if(x % 5 === 0 && x % 11 === 0) {
    console.log('Number is divisible by 5 and 11');
} else {
    console.log('Number is not divisible by 5 and 11');
} 