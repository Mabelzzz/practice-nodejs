// 25. find LCM of two numbers.
let input = require('readline-sync');

let x = Number(input.question('Input first number : '));
let y = Number(input.question('Input second number : '));

let max = x > y ? x : y;
let  i = max;

while (i = 1){
    if (max % x === 0 && max % y === 0) {
        console.log('HCF of %d and %d : %d', x, y, max);
        break;
    }
    i += max;
}