
function Counter(){
    let global = 50;
    function increment(){
        global++;
        console.log(global);
      
    }
 
    return increment;
};

let count = Counter();
count();
count();
count();