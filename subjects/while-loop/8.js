// 8. find sum of all odd numbers between 1 to n.
let input = require('readline-sync');

let n = Number(input.question('Input number : '));
let i = 1, sum = 0, o = 2;
while (i < 1000) {
    if (n > 1) {
        break;
    } else {
        n = Number(input.question('Not a positive number! Please try again. \nInput number : '));
    }
    i++;
} 

while(o < n) {
    if(o % 2 !== 0) {
        sum = sum + o;
    } 
    o++;
}
console.log('Sum of all odd numbers between 1 to %d : %d', n, sum);