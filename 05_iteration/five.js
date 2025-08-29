const coding = ['Js', 'Paython', 'java', 'ruby']
coding.forEach((randomName) => {
    console.log(randomName);
})
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        langName: "javascript",
        fileName: "js"
    },
    {
        langName: "Ruby",
        fileName: "rb"
    },
    {
        langName: "Paython",
        fileName: "py"
    },
]

myCoding.forEach((item, arr) => {
    console.log(item.langName, arr);
})

