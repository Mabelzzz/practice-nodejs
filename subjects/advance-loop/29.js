// Number pattern 29 : Triangle Easy Number Patterns 

// for loop
console.log('---- for loop ----');
for (let i = 1; i <= 5; i++) { 
    for (let j = 5; j >= i; j--) {
        process.stdout.write(j + '');
    }
    console.log();
}

//while loop
console.log('---- while loop ----');
let x = 1;
while (x <= 5) {
    let y = 5;
    while (y >= x) {
        process.stdout.write(y + '');
        y--;
    }
    console.log();
    x++;
}
