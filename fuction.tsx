const jsuser = {
    name : "sahil",
    "fullname" : "sahil kumar",
    age : 19,
    location : "jaipur",
    greeting: 'sakij'
}
console.log(jsuser["fullname"]);
console.log(jsuser.age);
console.log(jsuser.location);
console.log(jsuser["age"]);


// How to use symbol and key in object
const mysyst = Symbol("key");
const mysymb = {
    [mysyst] : "387fhg"
}
console.log(mysymb[mysyst]);
console.log(typeof mysymb[mysyst]
);

// how to change value in object
const tsxuser = {
    name : "sahil",
    "fullname" : "sahil kumar",
    age : 19,
    location : "jaipur"
}

tsxuser.age = 30;
console.log(tsxuser["age"]);

//  how freeze value of object
Object.freeze(tsxuser) 
tsxuser.age = 33;
console.log(tsxuser["age"]);

// how to add function in object

const person = {
    name: "Alice",
    age: 25,
    greet: function () {
      return `Hello, my name is ${this.name}and age is ${this.age}`;
    }
  };
  
  console.log(person.greet()); // Output: "Hello, my name is Alice"

  //  How to find keys, value, entires and has own properties of an object.

  console.log(Object.keys(person));
  console.log(Object.values(person));
  console.log(Object.entries(person));
  console.log(person.hasOwnProperty('greet'));
  

  const person2 = { name: "Alice", age: 25 };

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("gender")); // false

  

  





 