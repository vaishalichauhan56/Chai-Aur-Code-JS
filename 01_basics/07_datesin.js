let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

let createDate = new Date(2025, 5 , 25)
// console.log(createDate.toDateString());

console.log(createDate.toLocaleDateString('default', {weekday:'long', timeZone:'UTC'}));


