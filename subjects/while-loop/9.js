// 9. print multiplication table of any number.
let input = require('readline-sync');

let m = Number(input.question('Multiplication table : '));
let i = 1;

while(i <= 12) {
    console.log('%d * %d = %d', m, i, (m * i));
    i++;
}