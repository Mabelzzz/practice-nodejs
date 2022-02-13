
function calGrade(score) {
    let grade;
    if(score >= 80) {
        grade = 'A';
    } else if (score >= 70 ) {
        grade = 'B';
    } else if (score >= 60 ) {
        grade = 'C';
    } else if (score >= 50 ) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    return grade;
}

let Mobile_score = 80;
let Nay_score = 78;
let x = calGrade(Mobile_score);
let y = calGrade(Nay_score);
//console.log('Mobile\'s grade is' + ' ' + x );
//console.log('Nay\'s grade is' + ' ' + y );

//console.log(`Mobile\'s grade is' + ' ' + x );
//console.log(`Nay\'s grade is' + ' ' + y );