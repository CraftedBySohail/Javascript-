
let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countF(arr){
    let result = {};

    for(let i = 0;i<arr.length;i++){
        if(result[arr[i]] >= 1){
           result[arr[i]]++;
        }
        else result[arr[i]] = 1;
    }

    return result;
}



console.log(countF(arr));