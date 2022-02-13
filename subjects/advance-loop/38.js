// Number pattern 38 : Triangle 0,1 Easy Number Patterns

// for loop
console.log('---- for loop ----');
for (let i = 1; i <= 5; i++) { 
    for (let j = 1; j <= i; j++) {
        process.stdout.write(i === 1 || i === 5 || j === 1 || j === i ? `1` + '' : `0` + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    let y = 1;
    while (y <= x) {
        process.stdout.write(x === 1 || x === 5 || y === 1 || y === x ? `1` + '' : `0` + '');
        y++;
    }
    console.log();
    x++;
}