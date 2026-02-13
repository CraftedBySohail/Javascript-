// prototype and classes

const obj  = {
    name : "Sohail",
    age : 38,
    greet : function(){
        console.log("Hello");
    }
};

const obj2 = {
    account : 68
};

obj2.__proto__ = obj;

console.log(obj2.name);