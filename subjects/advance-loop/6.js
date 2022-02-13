// Number pattern 5

// for loop
console.log('---- for loop ----');
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if ((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0)) {
            process.stdout.write('1');
        } else {
            process.stdout.write('0');
        }
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let r = 0;
while (r < 5) {
    let c = 0;
    while (c < 5) {
        if ((r % 2 === 0 && c % 2 === 0) || (r % 2 !== 0 && c % 2 !== 0)) {
            process.stdout.write('1');
        } else {
            process.stdout.write('0');
        }
        c++;
    }
    console.log();
    r++;
}