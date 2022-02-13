// 3. print all alphabets from a to z. - using while loop
let i = 'A'.charCodeAt();
while (i <= 'Z'.charCodeAt()) {
    process.stdout.write(String.fromCharCode(i) + ' ');
    i++;
} 

