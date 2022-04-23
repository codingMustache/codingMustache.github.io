
            //**************************************//
            //                                      //
            //              Data Types              //
            //                                      //
            //**************************************//


/*
Primitive/Simple or Complex/Object data types are 2 types
of data types. A way to programmatically tell the differnce
of what type of data type you are using is using typeOf. An 
example of this looks like:
*/

        //~~~~~Simple/Primitive Data-types~~~~~\\
/*
Primitive datatypes are plain values that can be used to
program a website.Simple datatypes are all immutable, 
which means when asigned varibles are static and cannot 
be changed if done so new memory will be allocated for 
such varible. They are copied by value and are neither
a property nor a method. Instead you you can use them in
property, method, variable, or function. 
*/

console.log(typeof 'This is a string');
// This will print: string
console.log(typeof 3);
// This will print: number
console.log(typeof true);
// This will print: boolean
console.log(typeof undefined);
// This will print: undefined
console.log(typeof NaN);
// This will print: number
console.log(typeof null);
// This will print: object, 
//an exception where the null 
//datatype returns as an object 
//but null is a simple datatype




        //~~~~~Complex Data-types~~~~~\\
/*
Complex date types are are always copied by reference. 
*/
console.log(typeof Infinity, typeof -Infinity)
// This will print: number number
// As it prints number infinity and
// negative infinity is a global
// scope object. 
var array = ['This', 'Is', 'An', 'Array'];
console.log(typeof array);
// This will print: object
var object = {1:'This', 2:'is', 3:'an', 4:'object'};
console.log(typeof object);
// This will print: object
function aFunction(){return "this is a function";}
console.log(typeof aFunction());
// This will print: function


        //~~~~~Strings~~~~~\\
/*
ipsom lorem
*\



        //~~~~~Numbers~~~~~\\
/*
ipsom lorem
*\



        //~~~~~Boolean~~~~~\\
/*
ipsom lorem
*\



        //~~~~~Undefined~~~~~\\
/*
ipsom lorem
*\



        //~~~~~NaN~~~~~\\
/*
ipsom lorem
*\



        //~~~~~Null~~~~~\\
/*
ipsom lorem
*\



        //~~~~~Array~~~~~\\
/*
ipsom lorem
*\



        //~~~~~Object~~~~~\\
/*
ipsom lorem
*\



        //~~~~~Functions~~~~~\\
/*
ipsom lorem
*\



        //~~~~~Infinity and -Infinity~~~~~\\
/*
ipsom lorem
*\



        //~~~~~Copied by Reference Vs Copied by Value~~~~~\\
/*
ipsom lorem
*\


