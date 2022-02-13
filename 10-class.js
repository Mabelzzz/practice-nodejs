//Class สิ่งที่รวมทั้งหมดที่เรียนมา ฟังก์ชัน
//OOP
// encapsulation: public protect private
class my {

    //attribute , property
    firstname;
    lastname;
    height;
    weight;

    constructor(fn, ln, h, w) { //ตั้งค่าต่างๆ
        this.firstname = fn;
        this.lastname = ln;
        this.height = h;
        this.weight = w;
    }
    get firstname() {
        return `-` + this.#firstname;
    }
    get lastname() {
        return `-` + this.#lastname;
    }
    set firstname(name) {
        if (name === '') {
            throw new 'Cannot allow set firstname to empty string';
        }
        this.#firstname = name;
    }
    //Method, function
    speak() {
        console.log('PRINT: ', this.name);
    }
    walk() {
        console.log('PRINT: ', this.name);
    }
    run() {
        console.log('PRINT: ', this.name);
    }
    print() {
        console.log('PRINRT : ', this.name);
    }
    //overide method
    speak(msg) {
        console.log('PRINT: ', this.name);
    }
}
let moke = new Person('Moke', 'Un', 170, 65);
let mobile = new Person('Mobile', 'BNK', 165, 55);
let kla = new Student('Kla', 'Harn', 170, 75)

console.log(mok.firstname)
console.log(mobile.firstname)
mobile.speak('5555')


class Student extends Person {

    constructor(fn, ln, h, w) {
        super(); //เอาทุกอย่างของพ่อ เรียกมาใช้งาน
        this.#firstname = fn;
        this.#lastname = ln;
        this.#height = h;
        this.#weight = w;

    }
}

// Property >> คุณสมบัติ เช่น ขาว สูง น้ำหนัก
// Action, Method >> กิริยา การกระทำ เช่น เดิน วิ่ง พูด