// 6. find sum of all natural numbers between 1 to n.
let input = require('readline-sync');

let n = Number(input.question('Input natural number : '));
let i = 1;
let j = 1;
let sum = 0;

while (i < 1000) {
    if (n > 0 && n % 1 === 0) {
        break;
    } else {
        n = Number(input.question('Not a natural numbers! Please try again. \nInput natural number : '));
    }
    i++;
} 

while (j <= n) {
    sum = sum + j;
    j++;
}
console.log('Sum of all natural numbers between 1 to %d : %d', n, sum);