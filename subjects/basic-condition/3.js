// 3. จงเขยีนโปรแกรมรับข้อมูลหน่วยวัดซึ่งมีหน่วยเป็นนิ้ว จากนั้นให้แปลงค่าจากนิ้ว (ให้ทั้งหมดอยู่ใน class เดียวกัน) 
// 3.1 แปลงน้ิวเป็นฟุต (1 ฟุต = 12 นิ้ว)
// 3.2 แปลงน้ิวเป็นเซนติเมตร (2.54 ซ.ม. = 1 นิ้ว)
// 3.3 แปลงนิ้วเป็นหลา (1 หลา = 36 นิ้ว)
let input = require('readline-sync');

let i = Number(input.question('Input Inch : '));
let f = i / 12;
let cm = i * 2.54; 
let y = i / 36;

console.log('Feet : %d , Centimeter : %d , Yard : %d', f, cm, y);