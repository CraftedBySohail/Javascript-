// iterating over an object

// using object.key

let obj = {
    name : "Sohail",
    age : 30,
    "Roll_no" : 35
};


console.log(Object.keys(obj));


// using object.values
// return an array
console.log(Object.values(obj));


// using entries
// returns array 
console.log(Object.entries(obj));



// iterating using this methods
for(let [key , value] of Object.entries(obj) ){
    console.log(`Key :${key} , value : ${value}`);
}


// concept of shallow copy important in js 
// since obj is mutable 
// the copy is of reference type

let obj1 = { value: 10 };
let obj2 = obj1; // Copies the reference, NOT the object.

obj2.value = 20; // Mutates the single object.

console.log(obj1.value); // 20 (The original was changed!)


// to avoid this we use spread operator
const original = { name: "Alice", age: 30 };

// Using spread syntax (most common and modern)
const copy = { ...original };

copy.age = 31;

console.log(original.age); // 30 (The original is safe!)
console.log(copy.age);     // 31
//(Note: This is a "shallow" copy. If the object contains other objects, those nested objects will still be references, not copies.)