let obj = {
    name : "harsh",
    age : 24,
    contact : 4567
}

console.log(obj.age)
for (k in obj) 
    {
        console.log(k)  //for displaying key word.
        console.log(obj[k]) //for displaying key value.
    } 

// . dot is known as "access member operater"
// ; semicolon is known as "terminator"

let obj1 =
 {
    name : document.querySelector("#name").value,
    age : document.querySelector("#age").value,
    contact : document.querySelector("#contact").value
}

localStorage.setItem("data",JSON.stringify(obj))