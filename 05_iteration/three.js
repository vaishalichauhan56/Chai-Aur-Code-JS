const greet = "Hello Wold!"

for(const greeting of greet ){
    console.log(`${greeting}`);    
}

// Maps - get unique values

const map = new Map();
map.set("IN","India")
map.set("Fr","France")
map.set("USA","United State of America")

console.log(map);

for (const [key,value] of map) {
    console.log(`${key} : ${value}`);    
}


