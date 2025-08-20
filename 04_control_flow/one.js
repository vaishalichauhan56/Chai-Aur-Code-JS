const isUserLoggedin = true

if (2 === "2") {
    console.log('Executed');
}
let balance = 355

// if(balance > 300) console.log(`${balance}`); // Bad Code
// console.log(`out of scope`)// Bad Code

if (balance < 500) {
    console.log(`balance is <  500`);
} else if (balance > 750) {
    console.log(`balance is > 750`);
} else if (balance < 900) {
    console.log(`balance is < 900`);
} else {
    console.log(`balance is low`);
}


const userLoggedin = true
const debitCard = true
const loginEmail = false
const loginGoogle = true

if(userLoggedin && debitCard){
    console.log("Allow to buy course");
    
}
if(loginEmail || loginGoogle){
    console.log("Allow to login");
    
}