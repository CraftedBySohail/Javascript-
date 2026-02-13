// inheritance 
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    };
    sayHi(){
        console.log(`${this.age},${this.name}`);
    }

};

const p1 = new Person("SOhail",45);
p1.sayHi();


class Customer extends Person{
    constructor(name,age,account,balance){
        super(name,age);
        this.account = account;
        this.balance= balance;
    }

    checkBalance(){
        return this.balance;
    }

    
};

const c1 = new Customer("Mohan",20,12,540);

console.log(c1.sayHi());