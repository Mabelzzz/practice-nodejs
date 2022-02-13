// 1. Find maximum between two numbers.
let readlineSync = require('readline-sync');

let x = Number(readlineSync.question('Input Number1 : '));
let y = Number(readlineSync.question('Input Number2 : '));

//sol1
if(x > y) {
    console.log('Maximum = ' + x );
} else if (y > x){
    console.log('Maximum = ' + y );
} else {
    console.log('Both the numbers are equal.');
}

//sol2
let max = x > y ? x : y;
console.log('Maximum = ' + max);