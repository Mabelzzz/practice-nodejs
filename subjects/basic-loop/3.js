// 3. Request the user to type number, or type 0 to stop. 
//    Show how many numbers were between 100 and 200 (both include).
let input = require('readline-sync');

let count = 0, n;
let num = [];

for(let a = 1; a <= 10; a++) {
    n = Number(input.question('Input Number' + a + ' : '));
    num[a] = n;
    if (num[a] > 100 && num[a] < 200) {
        count = count + 1;
    }
}

console.log('Numbers were between 100 and 200 : ' + count);
