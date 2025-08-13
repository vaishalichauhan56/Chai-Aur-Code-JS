// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Vaishali"
tinderUser.isLogedin = false

console.log(tinderUser);

const regularUser = {
    email: "vaishali@mail.com",
    fullname: {
        firstname: "Vaishali",
        LastName: "Chauhan"
    }
}
console.log(regularUser.fullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 4: "d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}

console.log(obj3);


console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLogedin'))

const course = {
    name: "Js in Hindi",
    price: "999",
    Instructor: "Vaishali"
}

const {courseInstru : instructor} = course

console.log(instructor);


[
    {},
    {},
    {}
]