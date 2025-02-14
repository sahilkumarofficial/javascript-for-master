//console.log('sahil');
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
     for(let j=1; j<= 10;j++){
       // console.log(i+ '*' +j+ '=' +i*j)
     }
    
}

// print number in loop 

for (let n=0; n<10; n++){
   const element =n;
  // console.log(element)
}

// print counting number and choose one of them which is your best number
for (let n=0; n<10; n++){
   const element =n;
   if(n==5){
    //  console.log("5 is best number")
      
   }
//   console.log(element)
}
// print counting number and choose one of them which is your best number and after that number break the counting
for (let n=0; n<10; n++){
   const element =n;
   if(n==5){
    //  console.log("5 is best number")
      break;
   }
 //  console.log(element)
}

// give the example of nested loop in for-loop
for(let i=0; i<=10; i++){
  // console.log(`outer loop value is :- ${i}`);
   for(let j=0; j<=10; j++){
   //   console.log(`inner loop value is :- ${j} of outer loop ${i}`);
      
   }
}


// write a code using for-loop to print 1 to 10 table

for(let i=1; i<=10; i++){
   //console.log(`table of ${i}`);
   for(let j=1; j<=10; j++){
    //  console.log(i+ '*'+j+ '='+i*j);
      
   }
   
}

//print array value using for-loop
let myArrr =['flash', 'superman','batman','wonder-women'];
for(let index =0; index<myArrr.length; index++){
   const element = myArrr[index];
 //  console.log(element);
   
}

// print counting number and choose one of them which is your best number and after that number countinue the counting
for (let n=0; n<10; n++){
   const element =n;
   if(n==5){
      console.log("5 is best number")
      continue;
   }
  console.log(element)
}
   


