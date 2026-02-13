
'use strict';
function greet(){
    console.log(`hi ${this.name}`);
}
const user = {
    name : "Rohit",
    age : 30
}
greet.call(user);

