//primitive 

// 7types :string, number, boolean, null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.2

//reference type (non primitive)

//arrays, objects, functions 

const heros=["shakiman", "naagraj", "doga"]
let myobj={
    name:"pragyan",
    age:"20",

}

const myFunction = function(){
    console.log("hello world ")
}

console.log(typeof heros)
console.log(typeof myFunction)


///******************************************* */

//stack(primitive)=>gives a copy , heap(non primitive)=>gives reference

let myYoutubename = "pragyan"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername); 
console.log(myYoutubename);

let userOne ={
    email: "pragyan@gmail.com",
    upi: "user@ybl"
}

let userTwo=userOne

userTwo.email="ritesh@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)

