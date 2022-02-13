// 4.จงเขยีนโปรแกรมที่รับข้อมูลเป็นองศาเซลเซียส(Celsius) เข้าทางคีย์บอร์ด แล้วทำการแปลงให้เป็นองศาฟาเรนไฮต์(Fahrenheit) 
//   จากสูตร Celcius = (5/9)(Fahrenheit - 32)
let input = require('readline-sync');

let C = Number(input.question('Input Celcius : '));
let F = (C * 9 / 5) + 32;
console.log('Celsius to Fahrenheit : ' + F);