// 0. Variables
/**
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
 */



// 1. Declaration
/**
 * 
 * 
 * 
 */
var foo
console.log(foo) // prints => undefined



// 2. Asignment
/**
 * 
 */
foo = 'bar'
console.log(foo) // prints => bar



// 3. Re-assignment
/**
 * 
 */
var bar  = 'foo';
console.log(bar)    // prints => foo
bar = 'FooFoo'
console.log(bar)    // prints => FooFoo


// 4. Var vs Let vs Const
/** 
 * 
 * 
*/
var vari = "This is var"
let letbe = "This is let"
const PERM = 'This is CONST'

// 5. Hoisting
/**
 * 
 */