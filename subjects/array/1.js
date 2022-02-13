let input = require('readline-sync');

let N = Number(input.question('Enter size of array : '));
const arr = [];

    for (let i = 0; i < N; i++) {
        arr[i] = Number(input.question('Enter elements in the array : '));
    }
    console.log('Elements in array are : ' + arr);

