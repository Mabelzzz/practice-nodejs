// 21. find power of a number using for loop.
let input = require('readline-sync');

let n = Number(input.question('Input base : '));
let p = Number(input.question('Input exponent : '));
let value = 1, i = 1;

while(i <= p) {
    value *= n;
    i++;
}
console.log('The value of %d ^ %d = %d', n, p, value);