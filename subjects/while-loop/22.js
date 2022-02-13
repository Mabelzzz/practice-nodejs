// 22. find all factors of a number.
let input = require('readline-sync');

let n = Number(input.question('Input number : '));
let i = 1;

while (i <= n) {
    if (n % i === 0) {
        process.stdout.write(i + ' ');
    }
    i++;
}