// universal accepted format
// saari language isse samjhti hai
let obj1 = {
    name : "SOhail",
    ROll_no : 35,
    id : 333
};

// javascript obj to json Format
const jsonformat = JSON.stringify(obj1);

console.log(jsonformat);


const jsonfor =` {
    "name" : "Rohit",
    "age" : 30,
    "address" : "dwarka"
}`;


// json to javascript object

const jsObject = Json.parse(jsonfor);