// 10. จงเขียนโปรแกรมคำนวณสถานการณ์ต่อไปน้ี
//     ฝากเงิน 10 ปี ปีละ n บาท โดยธนาคารให้ดอกเบี้ย x% เมื่อถึง 10 ปี จะมีเงินเก็บเท่าไหร่
let input = require('readline-sync');

let num = [], x = [], sum = 0;

for(let a = 1; a <= 10; a++) {
    num[a] = Number(input.question('Year ' + a + ' deposit money : '));
    x[a] = Number(input.question('Year ' + a + ' have interest(%) : '));
    sum = sum + num[a] + (x[a] * num[a] / 100);
}
console.log('10 years will have money : %d', sum);