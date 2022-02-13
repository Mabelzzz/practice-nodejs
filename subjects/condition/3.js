// 3. Check whether a number is negative, positive or zero.
let input = require('readline-sync');

let x = Number(input.question('Input Number : '));


if(x > 0) {
    console.log('Number is positive.');
} else if (x < 0){
    console.log('Number is negative.');
} else {
    console.log('Number is zero.');
}