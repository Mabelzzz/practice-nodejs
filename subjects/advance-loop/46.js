// Number pattern 45 : Triangle Hard Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 1; i <= 5; i++) { 
    if (i % 2 === 1) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j + '');
        }
    } else {
        for (let j = i; j >= 1; j--) {
            process.stdout.write(j + '');
        }
    }
    console.log();
}

//while loop 
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    if (x % 2 === 1) {
        let y = 1;
        while (y <= x) {
            process.stdout.write(y + '');
            y++;
        }
    } else {
        y = x;
        while (y >= 1) {
            process.stdout.write(y + '');
            y--;
        }
    }
    console.log();
    x++;
}