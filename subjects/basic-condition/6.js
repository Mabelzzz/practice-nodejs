// 6.จงเขียนโปรแกรมที่รับข้อมูลเป็นตัวเลขชนิดทศนิยม 3 ตัวเข้าทางคีย์บอร์ดแล้วทำการหาผลรวมและค่าเฉลี่ยของตัวเลขเหล่านั้น โดยแสดงผลลัพธ์ออกทางหน้าจอ
let input = require('readline-sync');

let sum = 0, num = [];

for(let a = 1; a <= 3; a++) {
    num[a] = Number(input.question('Input a decimal' + a + ' : '));
    for(let b = 1; b >= 1; b++) {
        if (num[a] % 1 !== 0) {
            sum = sum + num[a]; 
            break;
        } else {
            num[a] = Number(input.question('Not a decimal! Please try again. \nInput a decimal' + a + ' : '));
        }
    } 
}
console.log('Sum = %d , Average = %d', sum, (sum / 3));