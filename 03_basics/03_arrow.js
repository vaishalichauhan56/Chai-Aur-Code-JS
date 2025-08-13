const user = {
    username: "Vaishali",
    price: 599,
    welcomeMessage: function () {
        console.log(`${this.username}, Welcome to Website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Vaishali"
// user.welcomeMessage()

function chai() {
    console.log(this);

}
// chai();

const newAdd = (num1, num2) => num1 + num2  

const nameRet = (num1,num2) => ({username:"Vaishali"})
console.log(nameRet(6,8));

