// 4. print all even numbers between 1 to 100. - using while loop
let e = 2;
while(e < 100) {
    if(e % 2 === 0) {
        process.stdout.write(e + ' ');
    } 
    e++;
}