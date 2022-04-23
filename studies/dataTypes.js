// 0. Data-Types:
 /*
a. Primitive/Simple or Complex/Object are 2 class
    of data types.
b. There are 8 kinds of data types, each can be evaluated
    with the typeof operator.
 */



// 1. Simple/Primitive Data-types
 /*  
a. Primitive datatypes are plain values that can be used to
    program a website.
b. Simple datatypes are all immutable, which means when asigned 
    varibles are static and cannot be changed if done so new memory 
    will be allocated for such varible.
c. They are copied by value and are neither
    a property nor a method. Instead you can use them in property, 
    method, variable, or function. 
 */

console.log(typeof 'Foobar');   // prints => string
    
console.log(typeof 3);  // prints => number
    
console.log(typeof true);   // prints =>  boolean
    
console.log(typeof undefined);  // prints => undefined
    
console.log(typeof NaN);    // prints => number
    
console.log(typeof null);   // prints => object
/* Where the null datatype returns as an object
but null is a simple datatype. */   
                                                
console.log(typeof 12n);    // prints => bigint



// 2. Complex Data-types 
/* 
a. Complex date types are are always copied by reference. 
b. They hold a collection, being any datatype and a variety 
    of them, values within the datatype. 
 */

var arr = ['This', 'Is', 'An', 'Array'];
var obj = {1:'This', 2:'is', 3:'an', 4:'object'};
console.log(typeof obj, typeof arr);         // print => object object
// Array will prints object it is in fact an array.

function aFunction(){return "this is a function";}
console.log(typeof aFunction());    // print => function



// 3. Strings
/* 
a.Stirings are  
*/
var foo = 'bar';
console.log(foo); //prints => string

// 4. Numbers
/*  
a.
*/
var foo = 123;


// 5. Boolean
/*   
a.
*/



// 6. Undefined 
/* 
a.
*/



// 7. NaN
/* 
a. 
*/



// 8. Null
/* 
a. 
*/



// 9. Array
/* 
a. 
*/



// 10. BigInt
/* 
a. 
*/



// 11. Object
/* 
 
*/



// 12. Functions
/* 
 
*/



// 13. Infinity and -Infinity
/* 
a. As it prints number infinity and negative infinity is a global 
    scope object.
*/
console.log(typeof Infinity, typeof -Infinity)  //prints => number number
 /*

 */  




// 14. Copied by Reference Vs Copied by Value
/* 
 
*/
