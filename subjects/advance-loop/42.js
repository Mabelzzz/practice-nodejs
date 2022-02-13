// Number pattern 42 : Triangle Hard Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 1; i <= 5; i++) { 
    for (let j = 2; j <= (i * 2); j += 2) {
        process.stdout.write(j + '');
    }
    for (let j = (i - 1) * 2; j >= 2; j -= 2) {
        process.stdout.write(j + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    let y = 2;
    while (y <= (x * 2)) {
        process.stdout.write(y + '');
        y += 2;
    }
    y = (x - 1) * 2;
    while (y >= 2) {
        process.stdout.write(y + '');
        y -= 2;
    }
    console.log();
    x++;
}