// 'use strict ';
const greet = ()=>{
    return this;
}


// greet();

// points to an empty object
// arrow function dont have their own this
console.log(this === greet());
