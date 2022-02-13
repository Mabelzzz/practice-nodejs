// 18. Calculate profit or loss.
let input = require('readline-sync');

let c = Number(input.question('Input cost price : '));
let s = Number(input.question('Input selling price : '));

if(s > c) {
    console.log('Profit is ' + (s-c));
} else if (c > s) {
    console.log('Loss is ' + (c-s));
} else {
    console.log('No Profit No Loss.');
}