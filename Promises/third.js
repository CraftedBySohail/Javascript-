const p1 = new Promise((resolve,reject)=>{
    // resolve("Hello");
    reject("reject");
});


p1.then((response)=>{
    console.log(response);
})
.catch((err)=>{
    console.log("error occured");
})