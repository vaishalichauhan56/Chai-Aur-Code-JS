const mySym = Symbol("Key1");

const jsUser = {
    name: "Vaishali",
    age: 31,
    location: "Gandhinagar",
    email: "vaishalichauhan@gmail.com",
    isLoggedin : false,
    lastLoginDay: ["Monday", "Saturday"],
    [mySym]:"mykey1"
}
console.log(jsUser["age"]);
console.log(jsUser["lastLoginDay"]);
console.log(jsUser[mySym]);

// Object.freeze(jsUser)

jsUser.email = "vaishali@mail.com"
console.log(jsUser);


jsUser.greetinG = function(){
    console.log("Hello, This is Function");    
}
jsUser.greetingTwo = function(){
    console.log(`Hello, This is Function ${this.name}`);    
}

// console.log(jsUser.greetinG());
console.log(jsUser.greetingTwo());



