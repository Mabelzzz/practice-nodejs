// Number pattern 13

// for loop
console.log('---- for loop ----');
let k = 0;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        k += 1;
        process.stdout.write(k > 9 ? (k + ' ') : (k + '  '));
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 0, z = 0;
while (x < 5) {
    let y = 0;
    while (y < 5) {
        z += 1;
        process.stdout.write(z > 9 ? (z + ' ') : (z + '  '));
        y++;
    }
    console.log();
    x++;
}