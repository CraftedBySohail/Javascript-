function getuser(){
    // will return a promise
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const user = {name : "SOhail",id : 1};
            reject(user);
        },200);
    });
}

getuser().then((data)=>{
    console.log("promise result : ",data);
})
.catch((err)=>{
    console.log("error",err);
});