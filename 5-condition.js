// condition
// TRUE FALSE, 1 0
// > >= < <= === !
//&& and , || or
//  T && T = T
// F || F = F
// false, undefined, NaN, 0, ''

let a = 11;
let b = 2;
let c;
if(a > b && c) {
    console.log('TRUE');
} else {
    console.log('FALSE');
}
/*
let x = 4;
let y = 10;
if(x > y) {
    console.log(x);
} else {
    console.log(y);
} */

let x = 12;
let y = 12;
if(x > y) {
    console.log('x is greater');
} else if (x < y) {
    console.log('y is greater');
} else {
    console.log('x and y is equal');
}

/* 
} else(x === y)
console.log(x); */

//const value = 1 > 2 M 'greater' : 'lower' :