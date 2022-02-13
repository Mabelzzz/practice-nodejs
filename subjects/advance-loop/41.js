// Number pattern 41 : Triangle Hard Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 1; i <= 5; i++) { 
    for (let j = 1; j <= (i * 2) - 1; j += 2) {
        process.stdout.write(j + '');
    }
    for (let j = (i - 1) * 2 - 1; j >= 1; j -= 2) {
        process.stdout.write(j + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    let y = 1;
    while (y <= (x * 2) - 1) {
        process.stdout.write(y + '');
        y += 2;
    }
    y = (x - 1) * 2 - 1;
    while (y >= 1) {
        process.stdout.write(y + '');
        y -= 2;
    }
    console.log();
    x++;
}