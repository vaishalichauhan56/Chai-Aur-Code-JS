// Immediate Invoked function Expression (IIFE)


(function chai(){
    console.log(`Data Connected`);
    
})();
// wrap function to bracket for the stop pollute global scope variables and end with semincolon

((name) => {console.log(`${name}Db connected two`);
})("Vaishali")