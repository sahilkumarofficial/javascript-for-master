// array
const myArr = [0,1,2,3,5,true, 'sahil']
myArr.push(45)
myArr.push('gulu')
myArr.pop()
console.log(myArr)


let yourArr = [48,948,47,89,487,92]
yourArr.unshift(87)
yourArr.shift()
console.log(yourArr)
console.log(yourArr.includes(67));
console.log(yourArr.includes(48));
console.log(yourArr.indexOf(948))

const newArr = yourArr.join()
console.log(yourArr)
console.log(newArr)

// slice , splice 
console.log('A' ,yourArr)  //A [ 48, 948, 47, 89, 487, 92 ]
const myn1 = yourArr.slice(1,3)
console.log(myn1); //[ 948, 47 ]
console.log('B', yourArr)  //B [ 48, 948, 47, 89, 487, 92 ]

const myn2 = yourArr.splice(1,3)
console.log(myn2)  //[ 948, 47, 89 ]
console.log(yourArr)  //[ 48, 487, 92 ]

const marvel_heros = ["thor", "ironman", 'spiderman'];
const dc_heros = ["superman", 'flash', 'batman'];
const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);


const allnewheros = [...marvel_heros,...dc_heros]
console.log(allnewheros)

const another_arry = [1,2,3,[4,5,6],7,7,[4,5,[3,4,7]]];
const real_another_array = another_arry.flat(Infinity);
console.log(real_another_array)


console.log(Array.isArray("Sahil"));
console.log(Array.from('sahil'));
 

let score1 = 100;
let score2 = 200;
let score3 = 300;
let score4 = 400;

console.log(Array.of(score1, score2,score3,score4))



