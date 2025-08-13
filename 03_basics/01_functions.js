function sayMyName(){
    console.log("V");
    console.log("A");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
    console.log("I");
    
}

// sayMyName()

function addNumber(num1,num2){
    console.log(num1+num2);    
}

function addNumber(num1,num2){
    let result = num1 + num2;
    console.log("Result");
    
    return result;
}

let result = addNumber(85, 8)
console.log(result); 


// function userName(user){
//     return`${user} is logged in.`
// }

// console.log(userName("Vaishali"));
function userName(user){

    if(!user){
        console.log("Enter Username");
        return
    }
    return`${user} is logged in.`
}

console.log(userName("Nishu"));


function calculaterNum(...num1){
    return num1;
}

console.log(calculaterNum(200,300,800,700,9,5));


const user = {
    userName : "Vaishali",
    price:200
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.userName} and price is ${anyObj.price}`);
    
}
handleObject(user)

const myNewArray = [20,30,40,50]
function returnArray(getArray){
    return getArray[1]
}
console.log(returnArray(myNewArray));
