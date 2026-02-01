// Custom filter method

let arr = [1,2,3,4,,5,6,7,8,9,10,11,12,13];

arr.filtering = function (compare){
    let ans = [];

    for(let word of arr){
        if(compare(word)) ans.push(word);
    }

    return ans;
}

let new_arr = arr.filtering((arr)=>arr>5);
console.log(new_arr);