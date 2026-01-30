let email = "student123&gmail.com";

let n = email.indexOf("&");

let result = email.slice(0,n);
console.log(result);


let filename = "resume.pdf";
let p = filename.indexOf(".");
result = filename.slice(p+1,filename.length);
console.log(result);

let text = "hello world, hello js";

// returns a new string
console.log(text.replace("hello","hi"));

// returns a new string
console.log(text.replaceAll("hello","hi"));



// to convert a string into object we will use split method which returns a new object
let data = "I love JavaScript very much";

let arr = data.split(" ");
console.log(arr);