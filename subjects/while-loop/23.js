// 23. calculate factorial of a number.
let input = require('readline-sync');

let n = Number(input.question('Input number : '));
let  fact = 1, i = 1;

if (n === 0) {
    fact = 1;
} else {
    while (i <= n) {
        fact = fact * i;
        i++;
    }
}
console.log('Factorial : ' + fact)