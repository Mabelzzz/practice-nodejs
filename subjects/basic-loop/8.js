/* 8. Exercise Product 1 To N (Loop): Write a program called Product 1 to N to compute the product of integer 1 to 10 (ie. 1x2x3x4x...x10). 
      Try computing the product from 1 to 11, 1 to 12, 1 to 13, and 1 to 14. Write down the product obtained and explain the result   */
let sum = 1;
for (let i = 11; i <= 14; i++) {
    for (let j = 1; j <= i; j++) {
        sum = sum * j;
        if (j < i) {
            process.stdout.write(j + ' * ');
        } else {
            process.stdout.write(j + ' = ' + sum);
        }
    }
    console.log();
}