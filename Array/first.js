// array if mutable in javascript

// array declaration
let arr = [1,"Sohail","Rizwan",true]; 

let n = arr.length;

for(let i = 0;i<n;i++){
    console.log(arr[i],typeof arr[i]);
}



// array is mutable
arr[0] = 2;
console.log(arr);

// push operation in array
arr.push("Shantanu");
console.log(arr);





// pop operation in array
arr.pop();
console.log(arr);