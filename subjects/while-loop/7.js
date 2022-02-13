// 7. find sum of all even numbers between 1 to n.
let input = require('readline-sync');

let n = Number(input.question('Input number : '));
let i = 1, sum = 0, e = 2;
while (i < 1000) {
    if (n > 1) {
        break;
    } else {
        n = Number(input.question('Not a positive number! Please try again. \nInput number : '));
    }
    i++;
} 

while(e < n) {
    if(e % 2 === 0) {
        sum = sum + e;
    } 
    e++;
}
console.log('Sum of all even numbers between 1 to %d : %d', n, sum);