// Number pattern 14

// for loop
console.log('---- for loop ----');
for (let i = 5; i > 0; i--) {
    for (let j = 6, k = 5; k > 0; j-- && k--) {
        process.stdout.write(j - 1 < i ? i + '' : (j - 1) + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 5;
while (x > 0) {
    let y = 6, z = 5;
    while (z > 0) {
        process.stdout.write(y - 1 < x ? x + '' : (y - 1) + '');
        y--;
        z--;
    }
    console.log();
    x--;
}

