// 2.เขียนโปรแกรมเพื่อคำนวณค่าพื้นที่ของวงกลม โดยรับค่า input เป็นรัศมี 
//   ตามสูตรต่อไปน้ี  พื้นที่วงกลม = π * รัศมี^2 
let input = require('readline-sync');

let r = Number(input.question('Input Radius : '));
let a = (22 / 7) * (Math.pow(r, 2));
console.log('Circle area : ' + a);