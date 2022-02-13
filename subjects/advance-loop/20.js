// Number pattern 20 : Triangle Easy Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 1; i <= 5; i++) { 
    for (let j = 1; j <= i; j++) {
        process.stdout.write(i + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    let y = 1;
    while (y <= x) {
        process.stdout.write(x + '');
        y++;
    }
    console.log();
    x++;
}