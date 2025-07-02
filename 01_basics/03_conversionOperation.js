let score = true

let variableInNumber = Number (score);

console.log(typeof score); //string
console.log(typeof variableInNumber); // number
console.log(variableInNumber); // NaN bcs score doesn't have pure numbers they have alphabates also


let isLoggedIn = "vaishali"
let isBoolean = Boolean (isLoggedIn)
let isString = String (isLoggedIn)

console.log(isBoolean);

// Operations

let value = 5;
let negValue = -value
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(3**2)
console.log("1" + 2 +2); // 122
console.log(1 + 2 +"2"); //32
console.log(+true);
console.log(+"");
console.log(null>0); //false bcs null convert into 0
console.log(null==0); // false bcs null convert into undefined
console.log(null>=0);// true


