function tuckIn(arr1, arr2) {
    arr2.push(arr1[1]); 
    arr2.unshift(arr1[0]); 
    //console.log(arr1[0] + arr1[1]);
    return arr2;
}

console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));
console.log(tuckIn([15,150], [45, 75, 35]));
console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));







//tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]
//tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]