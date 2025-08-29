const myObj = {
    Js : 'javasript',
    Rb:'Ruby',
    swift:'swift by apple'
}

for (const key in myObj) {
    // console.log(key, 'of' , myObj[key]);
}

const inArray = ["js","paython","Vue"]
for (const [key] in inArray) {
//    console.log(inArray[key]);   
}

const map = new Map();
map.set("IN","India")
map.set("Fr","France")
map.set("USA","United State of America")

for (const key in map) {
  console.log(key);
  
}