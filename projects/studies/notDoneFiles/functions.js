// 0. Functions:
        /* 
        
        */



// 1. How Functions Execute
        /* 
        
        */
////////    First we must ___? Next we can execute 
        ///////     (or two other words for executing a
        ///////     function?) a function by?


// 2. Parameters vs Passed Arguments
        /* 
        a.
        */
/////   What’s the difference between a function’s parameters and 
        /////   arguments PASSED to a function?
                function func(x){x} // <---- Paramter    
                func(x) //<---Argument
                        
// 3. Named Functions
        /* 
        a.
        */
/////    What’s the syntax for a NAMED function?
                var x = "This is a Named Variable";
                function named(p){
                        console.log(p);
                }
                named(x);


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