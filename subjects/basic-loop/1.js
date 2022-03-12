// 1. Write Program to read in 10 numbers and compute the average, maximum and minimum value
let input = require('readline-sync');

let sum = 0;
let max = 0; 
let min = 10000000;
let n;
let num = [];

for(let a = 1; a <= 10; a++) {
    n = Number(input.question('Input Number' + a + ' : '));
    num[a] = n;
    sum = sum + n;
    if (n === 0) {
        break;
    }
    if (num[a] >= max) {
        max = num[a];
    } 
    if (num[a] <= min) {
        min = num[a];
    }
}

console.log('Average : '+ (sum / 10));
console.log('Maximum : ' + max);
console.log('Minimum : ' + min);