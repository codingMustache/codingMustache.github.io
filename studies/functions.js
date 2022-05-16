// 0. Functions: 
        /* 
        Are blockes of code that when invoked can be executed as many
        times as invoked. All functions are first class objects, as 
        they have properties and methods. Functions can take passed in
        variables called arguments that can be used to execute a task
        within the function.  
        */


// 1. How Functions Execute
        /* 
        When a funciton is created, alone it does nothing, but once 
        invoked a function will run from from first line of the 
        funciton downward. With the exception of block/function 
        hoisting within the function. 
        */


// 2. Parameters vs Passed Arguments
        /* 
        a. Parameter is the thing that gets passed within the funciton.
        b. The Argument is what get passed when the function is called.
        c. In the emample below the y is the parameter and x or "Hello 
                World" is the arguement.
        */
                let x = "Hello Workd"
                function func(y){       // <---- Paramter    
                        console.log(y);
                } 
                func(x)                 //<---Argument
        
                
// 3. Named Functions
        /* 
        a. The syntax to declare a named funciton starts with the function
                keyword, because of this the word function is a reserved 
                word only for functions
        b. The comes the name of the function. Usually made named in camelCase
        c. Following the name of the function comes the parenthesis that hold 
                the passed argument. 
        d. Finally the curly braces hold the funciton body, which has the block 
                of code to be executed when the function is called.

        */
                function named(p){ // Na
                        // The function body
                 }

// 4. Arrow Function
        /*
        a. Is a shorthand of traditional functions
        b. Should not be used used as methods
        c. Do not have thier own binding to this, arguements and super
        d. Can not be used as Constructors 
        e. Can use implcit return by removing curly braces
       
                var arrow = function () => {
                        console.log('Arrow function')};
                arrow() // prints -> Arrow function
                var arr1 = x => x + 1
                arr1(1) // prints -> 2 
       */ 
// 5. Anonymous Function
        /*
        a. A anonymous funciton is a functino with no name associated with it.
        b. It can not be accessed after its creattion
        c. If asigned to a variable is the only way to invoke an anonymous 
                funciton more than once.
        d. Can have multiple arguements but only one expression. 
        */
        (function (){ console.log("I am ANON")})(); // prints -> I am ANON
                var paraAnonFunc = "anon";
                var anon = function(y){
                        console.log(y)
                }
                anon(paraAnonFunc) // prints -> anon

        
// 7. Assigning Functions to a Variable
        /* 
        a. Functions can be assigned as variables with the var let and const keywords
        b. When const is used the function name can not be reasigned.
        c. Invoking a named variable is similar to a named fucntion, calling it and 
                passing any arguments into the parenthesis.
        */
/////    How do we assign a function to a variable?
                var arg = "Asigned variable"
                var assignedVariable = function (v) {
                        console.log(v);
                }
                assignedVariable(arg); 
                        
        
// 8. Specify Input/Output Functions
        /*  
        a. Reading/writing documentation is key to understanding what kind of inputs
                a function handles or output it returns.
        b. Writing good comments that shows the kind of data to be output by the funcitons
                will lead to a better understanding of how a function handles data
        */


// 9. Scope
        /* 
        a. Function Scope
                i. Is the scope within the function
                ii. Variebles within functions are not effected by outter ones
                and vice-versa
        */    
        function scope(){
                let msg = "I"           // nothing within the funciton
                var msg1 = "am"         // can be accesed outside the function
                const msg2 = "scope"    // except what is returned from the function
        }
//        console.log(msg)  // prints -> ReferenceError
//        console.log(msg1) // prints -> ReferenceError
//        console.log(msg2) // prints -> ReferenceError
        
        let msg = "outer"
        function scope1(){
                let msg = "Indside";    // Because of scope the inner variable
                console.log(msg);       // msg is not effecting the outer one
        }
        scope1() // prints -> Inside
        console.log(msg) // //prints -> outer

       /*
        b. Block Scope
                i. Refers to scope within a block of code in loops, as for and while
                ii. The var key word is not held within these contraints
                iii. Let and Const keywords are not accessable outside of block scope 
        */
       var var4 = "we" 
       let var5 = "Can"
       const var6 = "Reach"
        for(let i = 0; i < 1; i++){
                console.log(var4, var5, var6) // prints -> weCanReach
                var var1 = "hello"
                let  var2 = "Nope"
                const var3 = "No way"
        }
        console.log(var1) // prints -> hello
//        console.log(var2) // prints-> ReferenceError
//        console.log(var3) // prints-> ReferenceError

        /*
        c. Lexical Scope
                i. A function can see and modify a varible in its parent or global
                scope but not the other way.
                ii. As nested as a function may bet it will look outward till a 
                variable definition
        */
       function outer(){
               let planet = "mercury"
               function inner(){
                       let planet = "venus"
                       function blackHole(){
                                let planet = "earth"
                                console.log(planet)
                       }
                       blackHole()
               }
               inner()
       }
       outer() // prints -> Earth
 

// 10. Closure
        /* 
        a. Is the combination of a function enclused with reference to the
                the lexical scope.
        b. Closure gives you access to the outer scoped funciton from the inner
        c. If an object is returned from a funciton and it is refernced that
                closure stays in memory.
        d. Even after a funtion has returned the parameter is can still be held in memory
        */
        function multiply(x) {
                return function(y) {
                        return x * y;
                };
        }
        var multiplyFive = multiply(5); // passes 5 into x
        var mutiplyTen = multiply(10);  // passes 10 into x
        console.log(multiplyFive(2));   // prints -> 10
        console.log(multiplyFive(10));  // prints -> 50
        console.log(mutiplyTen(20));    // prints -> 200
        console.log(mutiplyTen(6))      // prints -> 60