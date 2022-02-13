// Number pattern 21 : Triangle Easy Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 5; i >= 1; i--) { 
    for (let j = 1; j <= i; j++) {
        process.stdout.write(i + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 5;
while (x >= 1) {
    let y = 1;
    while (y <= x) {
        process.stdout.write(x + '');
        y++;
    }
    console.log();
    x--;
}