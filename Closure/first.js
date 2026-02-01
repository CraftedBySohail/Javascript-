function Counter(){
 function increment(){
    console.log("I am increment function");
    

    };
    
    return increment;
};


let greet = Counter();
console.log(greet());