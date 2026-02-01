// reduce
// returns new array
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

let sum = arr.reduce((acc,curval)=>{
    return acc+=curval;
},0);

console.log(sum);