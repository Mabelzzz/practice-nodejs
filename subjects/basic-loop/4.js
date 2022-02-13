// 4. The country A has 50M inhabitants, and its population grow 3% per year. 
//    The country B, 70M and grow 2% per year. 
//    Tell in how many year A will surpass B. 
let A = 50000000, B = 70000000, y;
for (let i = 1; i < 100; i++) {
    A = A + (A * 3 / 100 );
    B = B + (B * 2 / 100 );
    if (A > B) {
        console.log('The country A will surpass B in '+ i + ' years');
        break;
    }
}