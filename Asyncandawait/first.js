

async function hello(params) {
    return new Promise((resolve,reject)=>{
        resolve("Rohit");
    }); 


}

const p1 = hello().then((value)=>{
    console.log("The resolved valued is :",value);
});

console.log(p1);