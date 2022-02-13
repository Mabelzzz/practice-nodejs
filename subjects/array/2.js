let input = require('readline-sync');
let N = Number(input.question('Enter size of array : '));
const arr = [];
let M;

for (let i = 0; i < N; i++) {
    M = Number(input.question('Enter elements in the array : '));
    if (M < 0) {
        arr.push(M); 
    }
}
console.log('All nagative elements in array are : ' + arr);

