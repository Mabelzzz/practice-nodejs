// Number pattern 18

// for loop
console.log('---- for loop ----');
for (let i = 5; i >= 1; i--) {
    for (let j = 5; j > i; j--) {
        process.stdout.write(j + '');
    }
    for (let j = 1; j <= i * 2-1; j++) {
        process.stdout.write(i + '');
    }
    for (let j = i + 1; j <= 5; j++) {
        process.stdout.write(j + '');
    }
    console.log();
}
for (let i = 1; i < 5; i++) {
    for (let j = 5; j > i; j--) {
        process.stdout.write(j + '');
    }
    for (let j = 1; j <= i * 2 - 1; j++) {
        process.stdout.write((i + 1) + '');
    }
    for (let j = i + 1; j <= 5; j++) {
        process.stdout.write(j + '');
    }
    console.log();
}

//while loop
/*
console.log('---- while loop ----');
let x = 5;
while (x >= 1) {
    let y;
    while (y = 5 && y > x) {
        process.stdout.write(y + '');
        y--;
    }
    while (y = 1 && y <= x * 2 - 1) {
        process.stdout.write((y + 1) + '');
        y++;
    }
    while (y = x && y <= 5) {
        process.stdout.write(y + '');
        y++;
    }
    console.log();
    x--;
}

while (x=1 && x < 5) {
    while (y=5 && y > x) {
        process.stdout.write(y + '');
        y--;
    }
    while (y=1 && y <= x * 2 - 1) {
        process.stdout.write((y + 1) + '');
        y++;
    }
    while (y = x && y <= 5) {
        process.stdout.write(y + '');
        y++;
    }
    console.log();
    x++;
} */
