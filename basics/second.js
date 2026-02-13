// code for the reverse and integer in javascript
let a = 1234;
let rev = 0;
while(a!=0){
    let num = a % 10;
    rev = rev * 10 + num;
    a = Math.floor(a/10);
}

console.log(rev);