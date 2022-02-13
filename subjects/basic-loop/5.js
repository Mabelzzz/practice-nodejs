/* 5. Write a program that asks the user type the value of N ad writes this picture :
        N = 1 
        * 
        N = 2 
        **
        * 
        N = 3 
        *** 
        **
        *
*/
for (let n = 1; n <= 3; n++) {
    console.log('N = ' + n);
    for (let i = n; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write('*');
        }
        console.log();
    }
    console.log();
}

/*      N = 1 
        * 
        N = 2 
        *
        ** 
        N = 3 
        * 
        **
        ***
*/

for (let a = 1; a <= 3; a++) {
    console.log('N = ' + a);
    for (let b = 1; b <= a; b++) {
        //console.log('*');
        process.stdout.write('*');
        for (let c = 1; c < b; c++) {
            process.stdout.write('*');
        }
        console.log();
    }
    console.log();
}