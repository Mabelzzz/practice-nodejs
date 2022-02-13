// 26. check whether a number is Prime number or not.
let input = require('readline-sync');
let n = Number(input.question('Input number : '));
let ans;
let i = 2;
while (i <= n) {
    if (n % i === 0 && i !== n) {
        ans = 'not prime number'
        break;
    } else if (n % i === 0 && i === n){
        ans = 'prime number'
        break;
    }
    i++;
}
console.log('%d is %s', n, ans);
    