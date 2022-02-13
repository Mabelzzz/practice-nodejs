// 28. find sum of all prime numbers between 1 to n.
let input = require('readline-sync');
let p = Number(input.question('Input upper limit : '));
let n = 2, sum = 0;

function isPrime(a) { //function for check whether a number is prime number or not.
    let i = 2;
    while (i <= a) {
        if (a % i === 0 && i !== a) { //a isn't prime, so return 0
            return 0; 
        } else if (a % i === 0 && i === a){ //a is prime, so return a
            return a;
        }
        i++;
    }
}

while (n < p) {
    let x = Number(isPrime(n));
    if (x !== 0) {
        sum += x;
    } 
    n++;
}
console.log('Sum of all prime numbers between 1 to %d : %d', p, sum);
