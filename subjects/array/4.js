let input = require('readline-sync');

let N = Number(input.question('Enter size of array : '));
const arr = [];
let max = 0, min = 100000000000;
for (let i = 0; i < N; i++) {

    arr[i] = Number(input.question('Input array elements : '));
    if (arr[i] >= max) {
        max = arr[i];
    } 
    if (arr[i] <= min) {
        min = arr[i];
    }
}
console.log('Maximum = ' + max);
console.log('Minimum = ' + min);


