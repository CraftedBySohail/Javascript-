class Person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
};
// here in the constructor this points to an empty object
const p1 = new Person("R",20);
console.log(p1);