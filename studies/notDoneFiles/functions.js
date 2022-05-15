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
////////    First we must ___? Next we can execute 
        ///////     (or two other words for executing a
        ///////     function?) a function by?


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

                 
// 4. Assigning Functions to a Variable
        /* 
        a. 
        */
/////    How do we assign a function to a variable?
                var x = "Assigned to a Variable"     
                const vari = function(v){
                        console.log(v)
                }
                vari(x); 
                        
        
// 5. Specify Input/Output Functions
        /*  
        a.
        */
        ////    Functions can OPTIONALLY take inputs, and
        ////    OPTIONALLY return a single value. How do 
        ////    we specify inputs, and how do we specify outputs?
        
        



// 6. Scope
        /* 
        a.
        */
        ////    Scope: Functions can see and modify variables in 
        ////    parent or global scopes. The inverse is NOT true.



// 7. Closure
        /* 
        a.
        */
        ////    Closures: Functions form closures around the data 
        ////    they house. If an object returned from the 
        ////    Function and is held in memory somewhere (referenced), 
        ////    that closure stays ALIVE, and data can continue to exist 
        ////    in these closures! (See: our meeting-room app for an 
        ////    example!) (ALSO, see: Understanding JavaScript 
        ////    Closures with Ease)