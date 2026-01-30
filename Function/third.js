// arrow function in javascript

let hello = (a,b)=>{
    return a+b;
}

console.log(hello(9,5));
// Default Parameter

let num = function(a = 1,b = 2){
    return a+b;
}

console.log(num(9,9,7,9,5,43,3))

// Rest