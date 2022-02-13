// 6. Check whether a year is leap year or not.
let input = require('readline-sync');

let y = Number(input.question('Input year : '));

if( ((y % 4 === 0) && (y % 100 !== 0)) || (y % 400 === 0) ){
    console.log(y + ' is leap year.');
} else {
    console.log(y + ' is common year.');
} 