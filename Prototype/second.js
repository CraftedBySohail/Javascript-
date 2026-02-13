// const obj = {
//     name : "Sohail",
//     age : 10,
//     greet:function(){
//         console.log(this.name);
//     }
// }




class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(this.name);
        console.log(this.age);
        return ;
    }
};

const person1 = new Person("Rohit",20);
const person2 = new Person("SOhail",40)
console.log(person1.sayHi());
console.log(person2.sayHi());