const items = [
  { name: "Milk", mfg: "2023-01-01", exp: "2023-06-01" },
  { name: "Bread", mfg: "2023-02-10", exp: "2023-02-20" },
  { name: "Juice", mfg: "2023-03-05", exp: "2023-07-01" },

];
items.selectName = function (callback){
    let result = [];
    for (let i = 0; i < this.length; i++) 
        { result.push(callback(this[i], i)); 

        } 
    return result;
}


let output = items.selectName(item=>{
    return {
        name : item.name,
        exp : item.exp
    };
});

console.log(output);