// 1.What is the difference between var, let, and const? When would you use each?
// var used for global scope
// let used for block level scope
// const use for if assigne value wouldn't change
// 2.What happens if you compare [] == false or [] == ![] in JavaScript? Why?
// both are same. because blank array give a truth value and ! provide us false then it provide us not truthy value
// 3.How is memory handled in JavaScript? What’s the difference between stack and heap memory?
// whene code run memory consume in variable initialization. after that  function initialization and logic part.
// stack used for the value declaration and heap will consume key pair values and function logical part.
// 4.How does typeof null return "object" even though null is not an object?
// 
// 5.What’s the difference between == and === in JavaScript? Give an example.
// == use for the equal value. and === use for equal value with data type should be same.
// 6.Write a function to reverse a string without using .reverse().

// 
let newReve = (val) => {
  console.log("coming 1st val: ", val);

  let out = ""
  console.log("coming 1st val: ", val, "and 1st out val: ", out);

  for (let i = val.length - 1; i >= 0; i--) {
    console.log("coming loop 1st val: ", val, "and 1st out val: ", out);

    out += val[i]
    console.log("coming loop 2nd val: ", val, "and 2nd out val: ", out);

  }
  console.log("out of loop 1st val: ", val, "and 1st out val: ", out);

  return out;
}

console.log(newReve("vaishali"));

// 

// let swapRev = (val) => {
//     let char = val.split("");
//     console.log("split char 1st:", char);
//     let left = 0;
//     let right = char.length - 1
//     console.log("split char after check right:", right);


//     while (left < right) {
//         const temp = char[left];
//         console.log("split char after while loop temp val:", temp);

//         char[left] = char[right]
//         console.log("while loop temp val after left right equal left:", char[left]);

//         char[right] = temp;
//         console.log("while loop temp val after left right equal right:", char[right]);

//         left++;
//         console.log("while loop temp val after left++:", left++);

//         right--;
//         console.log("while loop temp val after right++:", right++);

//     }

//     return char.join()

// }
// console.log(swapRev("Nishant"));

function reverseBySwapping(str) {
  const chars = str.split("");  // make an array of letters
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    const temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }
  return chars.join("");
}

// 7. Palldriome code. madam = true, hello = false

// console.log(reverseBySwapping("Nishant")); // 

function isPalindrome(val) {
  let str = val.split('').reverse().join('')
  return val == str

}

// console.log(isPalindrome("madam"));


const arr = [1, 2, 3, 4, 5];

const multiMap = (val) => {
  return val.map(Math.sqrt).filter(n => n > 10).reduce((sum, n) => sum + n, 0) + 10
}

console.log(multiMap(arr));








