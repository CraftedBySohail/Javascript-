const arr = [1,2,3,4,5,6,7,8,9];


const s1 = new Set(arr);
s1.add(11);

console.log(s1);
console.log(s1.has(8));