const myArray = [0,1,2,3,4]
console.log(myArray[2]);

const myArray2 = new Array(9,2,4,12,56)
myArray2.push(78)
myArray2.unshift(8)
console.log(myArray2.includes(9));
console.log(myArray2.indexOf(3));

// Slice, Splice

console.log("A", myArray);
const myar = myArray.slice(1,3);
console.log(myar);
console.log("B", myar);
const myar2 = myArray.splice(1,3)
console.log(myar2);


