function printx(x) {
    console.log(x);
}

for (let i = 0; i < 5; i++) { //ใส่ 0 แล้วปริ้น
    printx(i);
}

function printy(y) {
    if (y < 5) {
        y = y + 1;
        printy(++y); // ++y คือ เปลี่ยนค่า y ก่อนแล้วค่อยทำ
    }
    console.log(y);
    return y;
}
console.log('=== Recursion===');
printy(0);

//recusive จะทำจากหลังมาหน้า หลักๆมี 2 แบบ คือ
// 1. เรา
function fact(x) {
    if (x > 0) {
        return x* fact(--x);
    } else {
        return 1;
    }
}
console.log('=== Recursion===');
console.log('FACT 5 :', fact(5));

function factRecursive(x) {
    if (x > 0) {
        return x * factRecursive(--x);
    } else {
        return 1;
    }
}
function factLoop(x) {
    sum = 1;
    for (let i = x; i > 0; i--) {
        sum *= i;
    }
    return sum;
}