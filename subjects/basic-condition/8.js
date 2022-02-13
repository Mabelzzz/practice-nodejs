//
let input = require('readline-sync');

let a = Number(input.question('Input A : '));
let b = Number(input.question('Input B : '));
let c = Number(input.question('Input C : '));
let d = Number(input.question('Input D : '));

let p = ((a * d) + (b * c));
let q = (b * d);
let x;
let sum = new Fraction(x);

for (let i = 0; i <= 1000; i++) {
    if(p > q && p % i === 0 && q % i === 0) {
        x = (p/i) / (q/i);
        console.log(sum.toString());
    } else {
        continue;
    }
}
//console.log('Sum : %d' , sum.toString());