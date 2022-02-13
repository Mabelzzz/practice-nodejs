// 2. Write Program that display the squares of numbers from 0 to 14
//    Ans : 0,1,4,9,16,...,164

for(let i = 0; i <= 14; i++) {
    process.stdout.write(String(Math.pow(i, 2)) + ' ');
}

