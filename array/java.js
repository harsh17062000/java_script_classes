let arr = [34,45,2,4,6,7,34,"hello"];
let arr1 = ["this is a array class"];

let arr2 = [463,4,7,"hello",function(){console.log("function call")}];

let arr3 = [null,undefined,4,6,87];

console.log(arr);
console.log(arr[9][4])

for(let i = 0; i<arr.length ; i++)
{
    console.log(i);
    console.log(arr[i]);
}

for(let i in arr)
{
    //index of array element
    console.log(i)
}

for (let i of arr)
{
    //
    console.log(i);
}