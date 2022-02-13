// variable with key value
const profile = {
    name: 'Mobile',
    height: 174,
    weight: 70,
    grades: [
        { subject: 'Math', score: 100 },
        { subject: 'Eng', score: 80 },
        { subject: 'Social', score: 60 }
    ]
}
console.log(profile.name);
console.log(profile.grades[1].score); //80
profile.name = 'Mok';
//javascript is object programimg
console.log('subjects = ', profile.grades.length); //80

//create function name: 

function getScore(subject) {
/*   for (let i = 0; i < profile.grades.length; i++) {
        if (profile.grades[i].subject === subject) {
            return profile.grades[i].score;
        }
    } */
    profile.grades.forEach (el => {
        if (profile.grades[i].subject === subject) {
            return el.score;
        }
    })
    return 0;
}

console.log('Eng = ', getScore('Eng'));
console.log('Math = ', getScore('Eng'));
console.log('Se = ', getScore('Eng'));
console.log('Math = ', profile.grades.find(el => el.subject === subject));
