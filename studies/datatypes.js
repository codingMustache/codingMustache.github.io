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
        console.log(typeof 3);          // prints => number
        console.log(typeof true);       // prints =>  boolean
        console.log(typeof undefined);  // prints => undefined
        console.log(typeof NaN);        // prints => number
        console.log(typeof null);       // prints => object
            /* Where the null datatype returns as an object but null
            is a simple datatype. */   
        console.log(typeof 12n);        // prints => bigint


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
    a. Is the absence of value
    b. Treated as falsy
    */
        var y = null;
        console.log(y);             // print => null

// 9. Array
    /* 
    a. An array is a collection of data under one variable name
    b. Can hold different data types including simple and complex datatypes
    c. Each intance is counted through index starting at 0 
    */
        var arr = [1, 2, 3, 4];
        // index   0  1  2  3
        console.log(Array.isArray(arr));      // prints => True

// 10. BigInt
    /* 
    a. Are numbers that are too large to be represented by the number datatype
    b. Is created by adding a "n" to the end of a integer
    c. Can not use built in Math method and can not be mixed with Number values
    */
        var bInt = 1n;
        console.log(typeof num);              // prints => bigint


// 11. Object
    /* 
    a. Holds a set of data types one being a key the other a value
    b. Can bare complex or simple datatypes
    c. Accessing properties are done by calling the object and either
        using dot notation (obj.a) or bracket notation (obj['a']).
    */
        var obj = {
        // V This is a key
            a: 1,
            // V This is a value
            b: 2
        }
        console.log(typeof obj)                // prints => object

// 12. Functions
    /* 
    a. A bloock of code designed to do a task
    b. The function alone will do nothing unless invoked
    c. Parameters can be passed into funciton in an inclosed into paraentheses
    */
        function func(){
            console.log('This is a function')
        }
        func() // <-invocation             // prints => 'This is a function'


// 13. Infinity and -Infinity
    /* 
    a. As it prints number infinity and negative infinity is a global 
        scope object.
    b. Positive infinity is larger than any positive number and likewise 
        with negative.
    */
        console.log(typeof Infinity, typeof -Infinity)  //prints => number number
        var num = 144;
        console.log(num**num)               // prints => Infinty




// 14. Copied by Reference Vs Copied by Value
    /* 
    a. Primitive datatypes are copied by value
    b. Complex datatypes are copied by refernce
    c. Copied value is a copy of the asigned variable 
    d. Copying by refernce is like a pointer to the oirginal values 
    e. Changing a value copied by refeernce will also affect the original variable
    */
        var a = 3
        var b = a // < b is now asigned 3
        b +=3
        console.log(b) // prints => 6
        console.log(a) // prints a unchanged => 3

        var x = {a: 1}
        var y = x   // <= here its copied by reference
        y.a = 3 // <= changes the key with value of 1 to 3 
        console.log(y) // prints => {a:3}
        console.log(x) // printing the original variable x => {a:3}