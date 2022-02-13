// 2. Find maximum between three numbers.
let input = require('readline-sync');

let x = Number(input.question('Input Num1 : '));
let y = Number(input.question('Input Num2 : '));
let z = Number(input.question('Input Num3 : '));

if(x > y ) {
    if(x > z) {
        Max = x;
    } else {
        Max = z;
    }
} else {
    if(y > z) {
        Max = y;
    } else {
        Max = z;
    }
}
console.log('Maximum is ' + Max);