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
/* Where the null datatype returns as an object but null
 is a simple datatype. */   
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
console.log(typeof function myfunc(){});    // print => function



// 3. Strings
/* 
a. Strings are textual variable types.
b. Can still contain numerical values but can not apply mathmatical
    operations to iteams in a string
c. The characters are indexed starting at 0 and go on from there
d. Strings are incapsulated in qoutes either " " or ' '
*/
var foo = 'bar';
console.log(foo);   // prints => string
console.log(foo[1]) // prints => a
foo = "234";
console.log(foo);   // prints => 123



// 4. Numbers
/*  
a. Holds numerical positive or negative values
b. Can be asigned or reasign with mathmatical operators
c. Integers can be whole numbers or fractions 
*/
var foo = 1;
console.log(foo);    // prints => 1
var foo = 1 + 1.5;
console.log(foo);    // prints => 2.5



// 5. Boolean
/*   
a. Is a binary comparrison datatype
b. Everything with a value will return 'true'
c. Everything without a value will return 'false'
d. Is used for comparison operations
e. Compasioning 2 object even with the same key and value will be false
*/
console.log(1>2);   // prints => false
console.log(1<2);   // prints => true
var foo = {foo: bar };
var bar = {foo: bar };
console.log(foo == bar);  //prints => false
var foo;
console.log(foo === undefined); //prints => true



// 6. Undefined 
/* 
a. Is an empty value
b. The defualt value if an initiated variable
c. If the variable is not declared the value undefined will be given
*/
var foo;
console.log(foo);   // prints => undefined
console.log(foo === undefined); //prints => true



// 7. NaN
/* 
a. NaN stands for Not a Number
b. It is number that is not a legal number
c,
*/
var x = NaN
console.log(typeof x)       //prints => Number


// 8. Null
/* 
a. 
*/



// 9. Array
/* 
a. 
*/
var arr = [1, 2, 3, 4]
// index   0  1  2  3
console.log(Array.isArray(arr))      // prints => True

// 10. BigInt
/* 
a. 
*/
var bInt = 1n;
console.log(typeof num)     // prints => bigint


// 11. Object
/* 
 
*/
var obj = {
    a: 1,
    b: 2
}


// 12. Functions
/* 
 
*/
function func(){
    console.log('This is a function')
}
func()              // prints => 'This is a function'


// 13. Infinity and -Infinity
/* 
a. As it prints number infinity and negative infinity is a global 
    scope object.
*/
console.log(typeof Infinity, typeof -Infinity)  //prints => number number
var num = 144;
console.log(num**num) // prints => Infinty




// 14. Copied by Reference Vs Copied by Value
/* 
 
*/
