// let obj = {
//     name : "harsh",
//     age : 24,
//     contact : 4567
// }

// console.log(obj.age)
// for (k in obj) 
//     {
//         console.log(k)  //for displaying key word.
//         console.log(obj[k]) //for displaying key value.
//     } 

// // . dot is known as "access member operater"
// // ; semicolon is known as "terminator"

// let obj1 =
//  {
//     name : document.querySelector("#name").value,
//     age : document.querySelector("#age").value,
//     contact : document.querySelector("#contact").value
// }

// localStorage.setItem("data",JSON.stringify(obj))


function save()
{
    let data = {
        name : document.querySelector('#name').value,
        age : document.querySelector('#age').value,
        contact : document.querySelector('#contact').value
    }
    localStorage.setItem("mydata",JSON.stringify(data))
}

let m = JSON.parse(localStorage.getItem("mydata"))
console.log(m);

let myname = document.querySelector('#myname')
let myage = document.querySelector('#myage')
let mycontact = document.querySelector('#mycontact')

myname.innerHTML = m.name;
myage.innerHTML = m.age;
mycontact.innerHTML = m.contact;