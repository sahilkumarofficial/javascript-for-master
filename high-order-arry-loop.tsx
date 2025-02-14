// uses of for of loop
const arr =[1,2,3,4,5];
for(const num of arr){
   // console.log(num);
    
}

// print each char of hello world!
const greeting = 'hello world!'
for (const greet of greeting){
   // console.log(`char of greeting is ${greet}`);
    
}

// using of map in arr
const map = new Map();
map.set('IN','India')
map.set('USA','united states of america')
map.set('FR','France')
map.set('PK','Pakistan')
//console.log(map);

// get key and value
for(const[key,value]of map){
 //   console.log(key,':-', value);
    
}

// NOTE :-  for of loop is not worked with object so you can use 
// only for in loop
const myobject = {
    js: 'jacascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for(const key in myobject){
  //  console.log(key);
    
}
for(const key in myobject){
   // console.log(myobject[key]);
    
}


// using key and value together
for(const key in myobject){
//console.log(`${key} shortcut is for ${myobject[key]}`);
   
}

const coding = ['js','ruby','java','python','cpp']
coding.forEach(function(bal){
   // console.log(bal);
    
})

// using arrow function in foreach loop
const codingg = ['js','ruby','java','python','cpp']
codingg.forEach((item)=>{
  //  console.log(item);
    
})

// uses of print me 

const codding= ['js','ruby','java','python','cpp'];
function printme(item){
   // console.log(item);
}
codding.forEach(printme)

codding.forEach((item,index,arr)=>{
   // console.log(item, index,arr);
    
})

const mycoding =
{
    languageName : 'javascript',
    languagefileName: 'js'
},
{
    languageName : 'python',
    languagefileName: 'py'
},



