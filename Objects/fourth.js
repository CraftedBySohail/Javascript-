// shallow copy by using the ... spread operator
let orgObj = {
    name : "Sohail",
    age : 30,
    address : {
        city : "Mumbai"
    }
};

let newObj = {...orgObj};

newObj.name = "Alice";
newObj.address.city = "Rajasthan";
console.log(newObj);
console.log(orgObj);