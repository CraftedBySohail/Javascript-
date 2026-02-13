// Global object in windows it is called window and in the node.js it is valled global
//globalThis points  to the global object of the environment


// this in function
const user = {
    name : "Rohit",
    // greet: function(){
    //     console.log(this);
    // }
    greet(){
        console.log(this.name);
    }
};

const user2 = {
    name : "Mohit",
}


 user2.greet = user.greet;

user2.greet();
console.log(user2);