let input = require('readline-sync');

let N = Number(input.question('Enter size of array : '));
const arr = [];
let max1 = 0, max2 = 0;

for (let i = 0; i < N; i++) {
    arr[i] = Number(input.question('Input array elements : '));
    if (arr[i] >= max1) {
        max2 = max1;
        max1 = arr[i];
    } else if (arr[i > max2 && arr[i] < max1]) {
        max2 = arr[i];
    }
}
console.log('First largest = ' + max1);
console.log('Second largest = ' + max2);


