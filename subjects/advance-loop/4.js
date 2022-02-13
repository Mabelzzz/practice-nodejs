// Number pattern 4

// for loop
console.log('---- for loop ----');
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 0 || i === 4 || j === 0 || j === 4) {
            process.stdout.write('1');
        } else {
            process.stdout.write('0');
        }
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 0;
while (x < 5) {
    let y = 0;
    while (y < 5) {
        if (x === 0 || x === 4 || y === 0 || y === 4) {
            process.stdout.write('1');
        } else {
            process.stdout.write('0');
        }
        y++;
    }
    console.log();
    x++;
}