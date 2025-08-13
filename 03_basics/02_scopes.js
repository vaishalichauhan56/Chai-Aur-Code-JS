

if (true) {
    let a = 10
    const b = 20
    var c = 30
}
// console.log(a);
// console.log(b);
// console.log(c);


// for (i = 1; i < array.length; i++) {
//     const elm = array[i]
// }

function one() {
    const userName = "Vaishali"
    function two() {
        const websitE = "google.com"
        console.log(userName);
    }
    console.log(websitE);
    // two()
}
// one()

if (true) {
    const userName = "Vaishali"
    if (userName === "Vaishali") {
        const website = "google.com"
        console.log(userName + website);

    }
    // console.log(website);

}
console.log(addOn(5))

function addOn(num) {
    return num + 1
}
addTwo(5)

const addTwo = (num) => {
    return num + 2
}