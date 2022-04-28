// 0. Loops:
/*
  
*/

// 1. While Loops
/* 
 
*/
/////    Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
var i = 0;              // prints => 0
while(i < 3){           //           1   
  console.log(i);       //           2
  i++;                  //           3
}


// 2. For Loops
/* 

*/
////     Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
var nums = "";
for(let i = 0; i <= 3; i++)
{text += i + " "; }
console.log(text) // prints => 1 2 3

// 3. For-In Loops
/* 
 
*/          
////     Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
var x = "cat"       // prints =>    cat
for(var i in x){    //              cat
  console.log(x)    //              cat
}                   


// 4. Looping Over Array
/* 
 
*/
////  Loop over an Array, forwards and backwards  
var arr = ['this','is','a','for','loop']
var text = ""
for(let i = 0; i < arr.length; i++){
   text += arr[i] + " ";
}
console.log(text) // prints => this is a for loop


// 5. Looping Over Object
/* 
 
*/
////    Loop over an object
var obj = {1:'this', 2:'is', 3:'a', 4:'for-in', 5:'loop'}
var text = ""
for(var key in obj){
   text += obj[key] + " ";
}
console.log(text) // prints => this is a for-in loop