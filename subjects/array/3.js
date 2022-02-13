let input = require('readline-sync');

let N = Number(input.question('Enter size of array : '));
const arr = [];
let sum = 0;

for (let i = 0; i < N; i++) {
    arr[i] = Number(input.question('Input array elements : '));
    sum += arr[i];
}
console.log('Sum of all elements = ' + sum);

