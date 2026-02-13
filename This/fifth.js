

const user = {
    name : "Sohail",
    age : 30
}


const user1 = {
    name : "Rahul",
    age : 30
}

function increment(value){
    this.age+=value;
}

increment.call(user,5);
increment.call(user1,10);

console.log(user,user1); 

// call apply bind , this point to the invoking object
