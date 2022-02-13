// Number pattern 33 : Triangle Easy Number Patterns 

// for loop
console.log('---- for loop ----');
for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write(j > 1 ? i + (j - 1) + '' : i + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 5;
while (x >= 1) {
    let y = 1;
    while (y <= x) {
        process.stdout.write(y > 1 ? x + (y - 1) + '' : x + '');
        y++;
    }
    console.log();
    x--;
}