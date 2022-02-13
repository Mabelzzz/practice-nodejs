// Number pattern 23 : Triangle Easy Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 1, k=5; i <= 5 && k >= 1; i++ && k--) { 
    for (let j = 1; j <= i; j++) {
        process.stdout.write(k + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1, z = 5;
while (x <= 5 && z >= 1) {
    let y = 1;
    while (y <= x) {
        process.stdout.write(z + '');
        y++;
    }
    console.log();
    x++;
    z--;
}