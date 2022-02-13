// Number pattern 40 : Triangle Hard Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 1; i <= 5; i++) { 
    if (i % 2 === 1) {
        k = 1;
    } else {
        k = 2;
    }
    for (let j = 1; j <= i; j++) {
        process.stdout.write(k + '');
        k += 2;
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    if (x % 2 === 1) {
        z = 1;
    } else {
        z = 2;
    }
    let y = 1;
    while (y <= x) {
        process.stdout.write(z + '');
        y++;
        z += 2;
    }
    console.log();
    x++;
}