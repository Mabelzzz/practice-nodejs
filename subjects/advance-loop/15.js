// Number pattern 15

// for loop
console.log('---- for loop ----');
for (let i = 0; i < 5; i++) { //มีบัคนิดนึง แถวแรกเลยมาตัวนึง
    for (let j = i, k = 0; k < 5; j++ && k++) {
        process.stdout.write(j + 1 > 5 ? `5` : (j + 1) + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 0;
while (x < 5) {
    let y = x, z = 0;
    while (z < 5) {
        process.stdout.write(y + 1 > 5 ? `5` : (y + 1) + '');
        y++;
        z++;
    }
    console.log();
    x++;
}