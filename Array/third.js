// performing opeation on the js

let arr1 = ["Cherry", "Apple", "Banana","Chickoo","watermelon"];

console.log(arr1.includes("Cherry"));
console.log(arr1.indexOf("Apple"));
console.log(arr1.indexOf("all"));
console.log(arr1.lastIndexOf("Apple"));


// sort method in the array correctly sort the string
// example

arr1.sort();
console.log(arr1);

// for number sorting
let arr2 = [1,2,3,4,35,6,7];
arr2.sort((a,b)=>{
    return a-b;
});

console.log(arr2);


// Flatteing an array
let num = [1,2,[3,4,[5,6]]];
let num2 = num.flat(Infinity);

console.log(num2);