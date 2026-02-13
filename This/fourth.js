function Person(name,age){
    this.name = name,
    this.age  = age
}

Person.prototype.greet = function(){
    console.log(`hi, ${this.name}`);
}

const p1  = new Person("Sohail",50);
console.log(p1.greet());