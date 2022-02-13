// 1. print all natural numbers from 1 to n. - using while loop
let input = require('readline-sync');

let n = Number(input.question('Input natural number : '));
let i = 1, j = 1;
while (i < 1000) {
    if (n > 0 && n % 1 === 0) {
        break;
    } else {
        n = Number(input.question('Not a natural numbers! Please try again. \nInput natural number : '));
    }
    i++;
} 


while (j <= n) {
    process.stdout.write(j + ' ');
    j++;
}