/* 6. Exercise CozaLozaWoza (Loop&Condition) : Write a program called CozaLozaWoza which prints the numbers 1 to 110, 11 number per line. 
      The program shall print “Coza” in place of numbers which are multiples of 3, “Loza” for multiples of 5, 
      “Woza” for multiple of 7, “CozaLoza” for multiple of 3 and 5 so on. The output shall look like:
      1 2 Coza 4 Loza Coza Woza 8 Coza Loza 11
      Coza 13 Woza CozaLoza 16 17 Coza 19 Loza CozaWoza 22 23 Coza Loza 26 Coza Woza 29 CozaLoza 31 32 Coza       */
let n = 0;
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 11; j++) {
        n = n + 1;
        if (n % 3 === 0 && n % 5 === 0) {
            process.stdout.write('CozaLoza' + ' ');
        } else if (n % 3 === 0) {
            process.stdout.write('Coza' + ' ');
        } else if (n % 5 === 0) {
            process.stdout.write('Loza' + ' ');
        } else if (n % 7 === 0) {
            process.stdout.write('Woza' + ' ');
        } else {
            process.stdout.write(n + ' ');
        }
    }
    console.log();
}