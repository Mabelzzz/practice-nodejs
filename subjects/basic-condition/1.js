/* จงเขียนโปรแกรมรับค่าใส่ตัวแปร A, B, C, และ m เป็นเลขจำนวนเต็มจากแป้นพิมพ์แล้วนำมาคำนวนหาค่าตัวแปร Y ตาม ต่อไปน้ี
   Y = A * m * 2 + B * m + C เมื่อ m > 5 
   Y = A * m * 2 + B * m - C เมื่อ m = 5 
   Y = A * m * 2 + B * m เมื่อ m < 5
   เช่น A = 3, B = 4, C = 5 และ m = 6 จะได้ผลลัพพ์ Y = 3 * 6 * 2 + 4 * 6 + 5 = 65 */
let input = require('readline-sync');

let i=0, Y;
let A = Number(input.question('Input A : '));
let B = Number(input.question('Input B : '));
let C = Number(input.question('Input C : '));
let m = Number(input.question('Input m : ')); 

while (i<10) {
    if (A % 1 === 0){
        if (B % 1 === 0) {
            if (C % 1 === 0) {
                if (m % 1 === 0) {
                    break;
                } else {
                    m = Number(input.question('m not an integer! Please try again. \nInput m : ')); 
                }
            } else {
                C = Number(input.question('C not an integer! Please try again. \nInput C : '));
            }
        } else {
            B = Number(input.question('B not an integer! Please try again. \nInput B : '));
        }
    } else {
        A = input.question('A not an integer! Please try again. \nInput A : ');
    }
}

if (m > 5) {
    Y = (A * m * 2) + (B * m) + C;
} else if (m = 5) {
    Y = (A * m * 2) + (B * m) - C;
} else {
    Y = (A * m * 2) + (B * m);
}
console.log('Y = %d',Y);