/* 10. Exercise ComputePI (Loop & Condition): Write a program called ComputePI to compute the value of π, 
using the following series expansion, You have to decide on the termination criterion used in the computation 
(Such as the number of terms used or the magnitude of additional term). Is this series suiable for computing π?.
𝜋 = 4 × (1 − (1 / 3) + (1 / 5) − (1 / 7) + (1 / 9) − (1 / 11) + (1 / 13) − (1 / 15) + ⋯)     */
let input = require('readline-sync');

let n = Number(input.question('Input Number : '));
let i, j, p = 1, q = 3, sum = 0;

if (n % 2 === 0) {
    i = j = (n / 2);
} else {
    j = (n-1) / 2;
    i = j + 1
}

for(let a = 1; a <= i; a++) {
    sum = sum + (1 / p);
    p = p + 4;
}
for (let b = 1; b <= j; b++) {
    sum = sum - (1 / q);
    q = q + 4;
}
console.log('𝜋 = ' + (4 * sum));