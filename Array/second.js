// use of the spread operator
// because the array is mutable
let arr1 = ["a","b"];
let arr2 = ["c","d"];

let newarr1 = [...arr1];
console.log(newarr1);

let newarr2 = [...arr1,...arr2];
console.log(newarr2);