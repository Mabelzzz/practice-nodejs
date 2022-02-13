// Number pattern 37 : Triangle 0,1 Easy Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 1, k = 1; i <= 5; i++) { 
    for (let j = 1; j <= i; j++ && k++) {
        process.stdout.write(k % 2 === 0 ? `0` + '' : `1` + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1, z = 1;
while (x <= 5) {
    let y = 1;
    while (y <= x) {
        process.stdout.write(z % 2 === 0 ? `0` + '' : `1` + '');
        y++ && z++;
    }
    console.log();
    x++;
}