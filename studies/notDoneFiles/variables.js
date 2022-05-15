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
    a.
    */
        var foo
        console.log(foo) // prints => undefined


// 2. Asignment
    /*
    a.
    */
        foo = 'bar';
        console.log(foo);    // prints => bar


// 3. Re-assignment
    /*
    a.
    */
        var bar  = 'foo';
        console.log(bar);    // prints => foo
        bar = 'FooFoo';
        console.log(bar);    // prints => FooFoo


// 4. Var vs Let vs Const
    /* 
    a.
    */
        var vari = "This is var"
        let letbe = "This is let"
        const PERM = 'This is CONST'


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