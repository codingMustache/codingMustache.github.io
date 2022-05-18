// 0. Variables
    /**
    * 0. To hold things in memory during the life-cycle of a program, we can use
        variables. Variables are named identifiers that can point to values of a
        particular type, like a Number, String, Boolean, Array, Object or another
        data-type.  Variables are called so because once created, we can CHANGE
        the value (and type of value) to which they point.
    */

// 1. Declaration
    /*
    a. Declare is initiating a vairable
    b. A variable can be declared without asigning it anything
    */
        var foo
        console.log(foo) // prints => undefined


// 2. Asignment
    /*
    a. A variable can be asigned to any datatype 
    b. Asignment is a declaration followed by an equal sign and the datatype 
        wanting to be asigned
    */
        foo = 'bar';
        console.log(foo);    // prints => bar


// 3. Re-assignment
    /*
    a. Is a declaring a variable a new value
    b. Can be use to change the original variable
    */
        var bar  = 'foo';
        console.log(bar);    // prints => foo
        bar = 'FooFoo';
        console.log(bar);    // prints => FooFoo


// 4. Var vs Let vs Const
    /* 
    a. var
i. Is the original keyword for initiating a variable. 
ii. Is a globally or function scoped variable
iii. Declerations are hoisted and processed before any code is executed
    b. let and const
i. The big differnce from let and const are that const can not be changed once declared
ii. Does not get hoisted and is limited to their scope
iii. For a for loop let is a good practice to use becsue it can be blocked scoped 
    and used again
    */
    var vari = "This is var"
    let letbe = "This is let"
    const PERM = 'This is CONST'
    if ( 1 > 0) {
        console.log(vari)   // prints -> "This is a var"
        console.log(letbe)  // prints -> This is a let
        console.log(PERM)   // prints ->  This is CONST
      var variIn = 'I'
      let letBeIn = 'am'
      const PERMiN = "scoped"
    }
    console.log(variIn)     // prints -> I
    console.log(letBeIn)    // Refernce Error
    console.log(PERMiN)     // Refernce Error


// 5. Hoisting
    /*
    a. Hoisting brings things to be read by the interpreter 1st
    b. Only hoists declarations, not initializations
    c. Variables defined with let and const are not hoisted
    */
        console.log(x);         // prints => undefined
        x = 12;
        console.log(x);         // prints => 12
        var x;