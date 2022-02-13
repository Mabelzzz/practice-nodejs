/* 9. Exercise HamonicSum (Loop): Write a program called HamonicSum to compute the sum of a harmonic series, as show below, where n=50,000. 
      The program shall compute the sum from left-to- right as well as from the right-to-left. 
      Obtain the difference between these two sums and explain the difference. Which sum is more accurate.?
      𝐻𝑎𝑚𝑜𝑛𝑖𝑐(𝑛) = 1 + (1 / 2) + (1 / 3) + ⋯ + (1 / 𝑛)      */
//sol 1 use for loop
let sum1 = 0, sum2 = 0;
for (let x = 1; x <= 50000; x++) {
    sum1 = sum1 + (1 / x);
}
for (let y = 50000; y >= 1; y--) {
    sum2 = sum2 + (1 / y);
}
console.log('Sum from left to right : %d , Sum from right to left : %d', sum1, sum2);
if(sum1 - sum2 > 0) {
    console.log('Sum from left to right greater than sum from right to left : ' + (sum1-sum2));
} else if (sum1 - sum2 < 0) {
    console.log('Sum from left to right less than sum from right to left : ' + (sum2-sum1));
} else {
    console.log('Sum from left to right equal to sum from right to left');
}

//sol 2 use while loop
let s1 = 0, s2 = 0, i = 1, j = 50000;
while(i <= 50000) {
    s1 = s1 + (1 / i);
    i++; 
}
while(j >= 1) {
    s2 = s2 + (1 / j);
    j--; 
}
console.log(s1,s2);