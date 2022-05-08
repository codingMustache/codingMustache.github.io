// 0. String Manipulation:
    /* 
    
    */

           
// 1. Manipulate Strings With Operators
    /*
    a.   
    */
        var str1 = "Hello"
        var str2 = "World"
        var fullstr = str1 + " " + str2
        console.log(fullstr)        // prints => "Hello World"


// 2. Manipulate Strings With Methods
        var str = "This is the example"
    /* 
    2-1) .length
        a. This will print the length of the variable
        b. Followed by the "." after the variable
        c. Does not require a "()" after inialized 
        */
        console.log(str.length) // prints => 19

    /*
    2-2) .slice()
        a. This method can slice an array or string in specified places
        b. The 1st parameter is where the method starts
        c. The 2nd parameter is where it ends not given will go to end of variable
        d. Using negative numbers in the parameter will count from the end
        */
        var sliced = str.slice(1, 14)
        console.log(sliced)     // prints => 'his is the ex'

    /*
    2-3) .substr()
        a.
        */
        var subbed = str.substr(1, 14);
        console.log(subbed); // prints => 'his is the exa'

    /*
    2-4) .substring()
        a.
        */
        var subStringed = str.substring(1, 14);
        console.log(subStringed); // prints => 'his is the ex'

    /*
    2-5) .replace()
        a.
        */
        var rep = str.replace();
        console.log(rep);

    /*
    2-6) .toUpperCase() .toLowerCasse()
        a.
        */
        var up = str.toUpperCase();
        console.log(up)             // prints => THIS IS THE EXAMPLE
        var low = str.toLowerCase();
        console.log(low)            // prints => this is the example
    /*
    2-7) .concat()
        a.
        */
        var dis = 'right here!'
        console.log(str.concat(", ",dis)) // prints => This is the example, right here!
    /*
    2-8) .trim()
        a.
        */
        var space = "   hello     "
        var trimmed = space.trim()
        console.log(trimmed)        // prints => hello
        /*
    2-9) .split()
        a. Method splits a string into an array
        b.
        */
        var split = str.split(" ")
        console.log(split)          // prints => ['this', 'is', 'the', 'example']
