// 27. print all Prime numbers between 1 to n.
let input = require('readline-sync');
let p = Number(input.question('Input upper limit : '));
let n = 2;

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
process.stdout.write('Prime numbers between 1 to ' + p + ' : ');

while (n < p) {
    let x = Number(isPrime(n));
    if (x !== 0) {
        process.stdout.write(x + ' ');
    } 
    n++;
}
