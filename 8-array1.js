const numbers = ['A', 'B', 'C', 'D', 'E'];
console.log('size : ', numbers);

numbers.push(6); //เพิ่ม 6
console.log(numbers);

numbers.unshift(0); //ใส่ 0 ข้างหน้า เอาข้างหน้าออก
console.log(numbers);

const mini = numbers.slice(1, 4); //ตัดอาเรย์ เริ่ม 1 ตัด 4
console.log(mini);
numbers.forEach((el, i, arr) => {
    console.log(`${i} = ${el}`);
});