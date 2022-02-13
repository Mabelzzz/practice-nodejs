// Number pattern 34 : Triangle Easy Number Patterns 

// for loop
console.log('---- for loop ----');
for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        process.stdout.write(((1 + ((i - 1) * 2)) + ((5 - j) * 2)) + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    let y = 5;
    while (y >= x) {
        process.stdout.write(((1 + ((x - 1) * 2)) + ((5 - y) * 2)) + '');
        y--;
    }
    console.log();
    x++;
}