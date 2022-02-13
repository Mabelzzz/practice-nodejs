// Number pattern 44 : Triangle Hard Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 1, c = 1, k = 1; i <= 5; i++) { 
    for (let j = 1; j <= c; j++) {
        process.stdout.write(k + '');
        k++;
    }
    for (let j = (i * 2) - 1; j >= i; j--) {
        process.stdout.write(j + '');
    }
    console.log();
}

//while loop 
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    let y = 3, z = x + 1;
    while (y <= x) {
        process.stdout.write(z + '');
        y++;
        z++;
    }
    y = (x * 2) - 1;
    while (y >= x) {
        process.stdout.write(y + '');
        y--;
    }
    console.log();
    x++;
}