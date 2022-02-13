function detectWord(str) {
    let word = [];
    for (let s = 0; s < str.length; s++) {
        if (str[s] === str[s].toLowerCase()) {
            //console.log(str[s]);
            word.push(str[s]); 
        } 
    }
    return word.join("");
}
console.log(detectWord("UcUNFYGaFYFYGtNUH")); // ➞ "cat"
console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr")); // ➞ "burglar"
console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); // ➞ "embezzlement"
