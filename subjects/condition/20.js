/* 20. Input basic salary of an employee and calculate its Gross salary according to following:
Basic Salary <= 10000 : HRA = 20%, DA = 80%
Basic Salary <= 20000 : HRA = 25%, DA = 90%
Basic Salary > 20000 : HRA = 30%, DA = 95%
*/
//HRA (House Rent Allowance) >> ค่าเช่าบ้าน
//DA (Dearness Allowance) >> เบี้ยเลี้ยง
let input = require('readline-sync');

let salary = Number(input.question('Input basic salary of an employee : '));
let HRA, DA, hra, da, gross_salary;


if(salary <= 10000) {
    HRA = 0.20;
    DA = 0.80;
} else if (salary <= 20000){
    HRA = 0.25;
    DA = 0.90;
} else {
    HRA = 0.30;
    DA = 0.95;
}

hra = salary * HRA;
da = salary * DA;
gross_salary = salary + da + hra;

console.log(gross_salary);
