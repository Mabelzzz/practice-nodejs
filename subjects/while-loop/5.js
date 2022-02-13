// 5. print all odd number between 1 to 100.
let o = 2;
while(o < 100) {
    if(o % 2 !== 0) {
        process.stdout.write(o + ' ');
    } 
    o++;
}