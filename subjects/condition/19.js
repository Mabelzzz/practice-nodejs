/* 19. Input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. 
Calculate percentage and grade according to following:
Percentage >= 90% : Grade A
Percentage >= 80% : Grade B
Percentage >= 70% : Grade C
Percentage >= 60% : Grade D
Percentage >= 40% : Grade E
Percentage < 40% : Grade F
*/
let input = require('readline-sync');

let a = Number(input.question('Input Physics score : '));
let b = Number(input.question('Input Chemistry score : '));
let c = Number(input.question('Input Biology score : '));
let d = Number(input.question('Input Mathematics score : '));
let e = Number(input.question('Input Computer score : '));

let score = (a + b + c + d + e) / 5;
let grade;

if(score >= 90) {
    grade = 'A';
} else if (score >= 80 ) {
    grade = 'B';
} else if (score >= 70 ) {
    grade = 'C';
} else if (score >= 60 ) {
    grade = 'D';
} else if (score >= 40 ) {
    grade = 'E';
} else {
    grade = 'F';
}

console.log('Percentage = ' + score);
console.log('Grade ' + grade);