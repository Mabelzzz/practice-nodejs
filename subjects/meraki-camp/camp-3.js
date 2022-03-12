function largestSwap(num) {
    let text = String(num);
    if(num >= 10 && num <=99) {
        if (num >= Number(text.charAt(1) + text.charAt(0))) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(largestSwap(27)); // ➞ false
console.log(largestSwap(43)); // ➞ true



