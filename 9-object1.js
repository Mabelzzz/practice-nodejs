const profile = {
    name: 'Araiva',
    height: 174,
    weight: 70,
    grades: [
        { subject: 'Social', score: 100 },
        { subject: 'Eng', score: 80 },
        { subject: 'Math', score: 60 },
        { subject: 'Physic', score: 60 }
    ],
};
// profile.address: 'Thailand'; // not suggest
Object.assign(profile, {
    address: 'Thailand'
});

profile = {
    ...profile, //spread operation
    'money': 200,
    weight: 60,
    school:'Bodindecha',
}

console.log('name', profile.hasOwnPropert('name'));
console.log('height', !!profile.hight);
console.log('weight', profile.weight);

function getValue(key) {
    return profile[key] || 0;
}
console.log(getValue('>>school', getValue('school')));