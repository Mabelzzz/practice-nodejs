// Number pattern 47 : Triangle Hard Number Patterns (finished)

// for loop
console.log('---- for loop ----');
for (let i = 1; i <= 5; i++) { 
    for (let j = 1, k = 1; j <= 9; j++) {
        for (let k = 1; k <= 16; k+=k) {
            process.stdout.write(j + '');
        }
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    let y = 1;
    while (y <= (x * 2 - 1)) {
        process.stdout.write(y + '');
        y++;
    }
    console.log();
    x++;
}