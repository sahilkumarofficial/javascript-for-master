const score = 400;
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1))

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++MATHS+++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-45));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
// 45
// 5
// 5
// 4
console.log(Math.min(4,5,7,3,8))
console.log(Math.max(34,22,45,234,78))
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10+1))

// 3
// 234
// 0.7047431470417933
// 3.158337852542247
// 10

const min = 10;
const max = 20;

// very very important  >>>>>>>>>>>>>>>>>>>>>
console.log(Math.floor(Math.random() * (max - min + 1))+ min )
// 17


