// 7. จงเขียนโปรแกรมคำนวณอายุของพ่อและลุง โดยไม่มีรับ input 
//    ทั้งนี้กำหนดให้พ่อและลุงมีอายุรวมกัน 109 ปี และลุงมีอายุมากกว่าพ่ออยู่ 5 ปี ให้หาว่าพ่อและลุงอายุเท่าไหร่
for (let uncle = 0; uncle <= 109; uncle++) {
    for (let dad = 0; dad <= 109; dad++) {
        if(uncle + dad === 109 && uncle - dad === 5) {
            console.log('Dad\'s age : ' + dad);
            console.log('Uncle\'s age : ' + uncle);
        } else {
            continue;
        }
    }
}