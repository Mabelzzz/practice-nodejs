// Number pattern 16

// for loop
console.log('---- for loop ----');
for (let i = 0; i < 5; i++) { //มีบัคนิดนึง แถวแรกเลยมาตัวนึง
    for (let j = i, k = 5; k > 0; j++ && k--) {
        process.stdout.write(j + 1 > 5 ? k + '' : (j + 1) + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 0;
while (x < 5) {
    let y = x, z = 5;
    while (z > 0) {
        process.stdout.write(y + 1 > 5 ? z + '' : (y + 1) + '');
        y++;
        z--;
    }
    console.log();
    x++;
}