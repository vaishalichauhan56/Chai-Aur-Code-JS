const numB = [5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numB.forEach((i) => {
    // console.log(i + 10);
})

const numBB = numB.map((key) => (key + 10)
)
console.log(numBB);

const numMap = numB.map((item) => item * 10).map((item) => item + 1).filter((item) => (item >= 40))
console.log(numMap);

const reduce = numB.reduce((cv, av) => cv + av,0)
console.log(reduce);