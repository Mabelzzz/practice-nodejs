const numbers = [0, 1, 2]; //array มักใช้กับประเภทเดียวกัน มีหลายๆอัน
const fruits = ['banana', 'orange', 'apple'];
const students = [
    ['Araiva', 174, 71],
    ['Kla', 170, 60],
    ['Mok', 180, 75],
];//่ส่วนใหญ่ 2 มิติ มากสุด 3 ที่ใช้กัน
console.log(numbers[0]); //0
console.log(fruits[1]);  //orange
console.log(students[2][0]); //Mok

for (let i = 0; i < 3; i++) {
    console.log(fruits[i]);
}
fruits[0] = 'mango'; // เปลี่ยนแปลงค่า
console.log(fruits[0]);

//swap element in array
//console.log(arr) => [1, 2];
let arr = [2,1];
let temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

console.log(arr);

//revers arr
//console.log(numbers) //[5, 4, 3, 2, 1]
let num = [1, 2, 3, 4, 5];
for (let i = 0, j = 5; i <= 5 & j >= 1; ++i && --j) {
    num[i] = j;  
}
console.log(num);


