for (let i = 0; i <= 5; i++) {
    const elem = i;
    if (elem == 5) {
        console.log("50 is the best number");

    }
    console.log(elem);
}
for (let i = 0; i <= 2; i++) {
    console.log(`outer loop ${i}`);
    for (let j = 0; j <= 2; j++) {
        // console.log(`inner loop ${j} inner loop ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

let myArray = ["Vaishali", "Nishant", "Vaisshant", "Shunu", "Munu"]
for (let i = 0; i <= myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// break and continue
for (let i = 0; i <= 20; i++) {
    if (i == 8) {
        console.log(`${i} skipped`);
        continue;
    }
        console.log(`${i}`);

}