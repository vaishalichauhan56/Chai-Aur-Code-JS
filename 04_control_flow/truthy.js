const userEmail = []
if (userEmail) {
    console.log("Have value");
} else {
    console.log("dont have value");
}

// Falsy Value
// flase, BigInt 0n, 0,-0,"",null,NaN, undefined,

//Truthy Value
// "0","false"," ",[],{},function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");

}

//Nullish Coalescing Operator (??) Null Undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
val1 = null ?? 15 ?? 10;


console.log(val1);


// Terniary Operator
// Condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Less than 80") : console.log("more than 80");




