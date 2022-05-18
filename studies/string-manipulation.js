// 0. String Manipulation:
    /* 
    Sting manipulation can be done in 2 ways, using operators or built in 
        methods through javascript. Using an operator can either the '+'
        operator to concat a string or using a letter or character after
        a backslash can manipulate a string. The syntax for running a method
        starts with a '.' and followed by the name of the method. Some of the
        methods take in arguments doing differnt things. 
    */

           
// 1. Manipulate Strings With Operators
    /*
    a. Using '+' or '+=' can change the string concatenating to the
        original string.
    b. The '\' can be a very useful tool to escape the literal quotes.
    c. The \n and make a break line.
    d. Entering \t will add a tab.
    e. A carriage return will print over the first part of the string with what
         is after \r.
    */
     /*a*/  var str1 = "Hello"
            var str2 = "World"
            str1 += " " + str2
            console.log(str1)         // prints => "Hello World"
        
     /*b*/  str3 = "\"qoutes\" and a \\\ .";
            console.log(str3)        // prints => "qoutes" and a \.
    
    /*c*/   str4 = "This is a \n line break"// prints => This is a 
            console.log(str4)               //           line break
    
    /*d*/   str5 = "\t tab over"
            console.log(str5)       // prints =>      tab over

    /*e*/    str6 = "This string has \r return";
            console.log(str6)       // prints =>  returnring has


// 2. Manipulate Strings With Methods
        var str = "This is the example"

    /*
    2-1) .slice()
        a. This method can slice an array or string in specified places
        b. The 1st parameter is where the method starts
        c. The 2nd parameter is where it ends not given will go to end of variable
        d. Using negative numbers in the parameter will count from the end
        */
        var sliced = str.slice(1, 14)
        console.log(sliced)     // prints => 'his is the ex'

    /*
    2-2) .substr()
        a. The first arguement is required, that is the index where the string begins
        b. The 2nd argument will print till that index including that index
        c. The 2nd argument will count from the 1st argument
        */
        var subbed = str.substr(1, 14);
        console.log(subbed); // prints => 'his is the exa'
        var subbed1 = str.substr(0, 14);
        console.log(subbed1) // prints => This is the ex

    /*
    2-3) .substring()
        a. Works similarly to slice
        b. Handles negative numbers as zero
        */
        var subStringed = str.substring(1, 14);
        console.log(subStringed); // prints => 'his is the ex'

    /*
    2-4) .replace()
        a. Require 2 prameters the 1st is the character it is looking to replace
            the 2nd is the character to replace the 1st.
        */
        var rep = str.replace("t", "u");
        console.log(rep); // prints => This is uhe example

    /*
    2-5) .toUpperCase() .toLowerCasse()
        a. They both upper case or lower case the whole string.
        b. The method takes no parameters.
        */
        var up = str.toUpperCase();
        console.log(up)             // prints => THIS IS THE EXAMPLE
        var low = str.toLowerCase();
        console.log(low)            // prints => this is the example
    /*
    2-6) .concat()
        a. Can take in many parameters to be joined to the str it is being 
        concatanated to.
        b. Can take in direct strings or variables.
        */
        var dis = 'right here!'
        console.log(str.concat(", ",dis)) // prints => This is the example, right here!
    /*
    2-7) .trim()
        a. Removes the white space before and after the string.
        b. Takes no parameters.
        */
        var space = "   hello     "
        var trimmed = space.trim()
        console.log(trimmed)        // prints => hello
        /*
    2-8) .split()
        a. Method splits a string into an array.
        b. The parameter is where it is broken into the array.
        */
        var split = str.split(" ")
        console.log(split)          // prints => ['This', 'is', 'the', 'example']