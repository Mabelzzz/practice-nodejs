// Number pattern 5

// for loop
console.log('---- for loop ----');
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        process.stdout.write(i === Math.floor(5 / 2) && j === Math.floor(5 / 2) ? `0` : `1`);
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 0;
while (x < 5) {
    let y = 0;
    while (y < 5) {
        process.stdout.write(x === Math.floor(5 / 2) && y === Math.floor(5 / 2) ? `0` : `1`);
        y++;
    }
    console.log();
    x++;
}