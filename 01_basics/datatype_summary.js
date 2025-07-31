let userOne = {
    email: "vaishali@gmail.com",
    up: "vaishali@upi"

}
let userTwo = { ...userOne }; 

// let userTwo = userOne;
let userThree = userOne;

userTwo.email = "two@gmail.com"
userThree.email = "three@gmail.com"
userOne.email = "One@gmail.com"
userThree.email = "Threetwo@gmail.com"


console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne.email);
console.log(userThree.email);



