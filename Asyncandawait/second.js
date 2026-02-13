async function greet(){

    return new Promise((resolve,reject)=>{
        resolve("Sohail");
    })


}

const response = greet();

response.then((data)=>{
    console.log(data);
});