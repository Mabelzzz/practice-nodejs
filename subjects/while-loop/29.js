// 29. find all prime factors of a number.
let input = require('readline-sync');

let n = Number(input.question('Input number : '));
let i = 2;

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

while (i <= n) {
    if (n % i === 0) {
        let x = Number(isPrime(i));
        if (x !== 0) {
            process.stdout.write(x + ' ');
        } 
    }
    i++;
}
