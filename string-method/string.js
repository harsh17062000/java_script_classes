// let str = "      this is js class         ";

// console.log(str);
// console.log(str[0]);

// //method of string 

// console.log(str.length);

// console.log(str.replaceAll(" ",""));

// console.log(str.includes("sj"));

// console.log(str.slice(3,6));

// console.log(str.slice(11,str.length));

// console.log(str.trim());



let str = "qwuiory kajshdf kajshf lkehr klakilshflkjwd pqoqejraklsncasnc qopiwhrhqqifn oqiehrqhfnlkasderfhgri qeowihf";

let store = "";
for (let i = 0;i < str.length; i++){
    if(!(str[i] === "v")){
        store = store + str[i];
    }
    else{
        store = store + "hello";
    }
}

console.log(store);
