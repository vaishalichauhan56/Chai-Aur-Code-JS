const marve_heros = ["Spiderman","Thor", "Ironman"]
const dc_heros = ["Batman", "Flash", "Superman"]

// marve_heros.push(dc_heros)
// console.log(marve_heros);
// console.log(marve_heros[3][1]);
const all_heros = marve_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [marve_heros, dc_heros]
console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6,[7,8]]]

const real_another = another_array.flat(Infinity)
console.log(real_another);
console.log(Array.isArray("Vaishali"));
console.log(Array.from("Vaishali"));
console.log(Array.from({name:"Vaishali"}));

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2, score3));


