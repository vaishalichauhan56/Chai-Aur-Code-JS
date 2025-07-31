const namE = "vaishali";

console.log(`Hello, My name is ${namE}`);

const name2 = new String("     Vaishali  - chauhan     "); // same as above declartion but on that case we get string length
console.log(`${name2}`);
console.log(name2[1]);
console.log(namE[1]);
console.log(namE.toUpperCase());
console.log(namE.indexOf('l'));
console.log(namE.charAt(2));

const subString = namE.substring(1,7);
console.log(subString);
const subSlice = namE.slice(-8,3);
console.log(subSlice);
console.log(name2.trim());

const url = "https://vaishali%20chauhan.com"

console.log(url.replace('%20','-'));

console.log(url.includes('vaishali'));

console.log(name2.split(' '));
