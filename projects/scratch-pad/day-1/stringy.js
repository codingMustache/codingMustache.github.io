// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    return string.length;
    // .length returns the amount of indexes
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toLowerCase();
    // toLowerCase method returns a string that is lowercased
   
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    return string.toUpperCase();
     // toUpperCase method returns a string that is uppercased
    
     // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
       return string.toLowerCase().replace(/ /g, "-"); 
       // 1st method lower cases the passed value
       // 2nd method runs a gobal search (using regex g) for the " " and replaces it with "-"
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    string = string.toLowerCase();
    char = char.toLowerCase();
    // lowercases both string
    var arr = string.split('');
    //turns the passed string into an array
    if (arr[0] === char){
    // checks to see if 1st letter in array is equal to the passed value (char)
        return true;
    // if values are the same retrurn true
    } else {
        return false;
    // if values are not the same return false
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    string = string.toLowerCase();
    char = char.toLowerCase();
            // lowercases both string
    var arr = string.split('');
            //turns the passed string into an array
    if (arr[arr.length - 1] === char){
            // checks to see if last letter in array is equal to the passed value (char)
        return true;
            // if values are the same retrurn true
    } else {
        return false;
            // if values are not the same return false
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    return stringOne.concat(stringTwo);
            // using concat() method
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    return args.join("");
            //Use the Join method to concat the array and because default seperator is a ",", You have to use ""
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if (stringOne.length > stringTwo.length){
        return stringOne;
    } else {
        return stringTwo;
    } 
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var arr = [];                            // Initiate Array
    arr.push(stringOne);                     
    arr.push(stringTwo);                     // Pushes both Strings to arr
    arr.sort();                              // sorts arr
    if (arr[1] === arr[0]){                  // compares the 2 values in the array
        return 0;                            // is same return 0
    } else if (stringTwo === arr[0]){        // if the 1st value in the array is StringTwo return -1
        return 1
    } else {                                 // all other instances return 0
        return -1;
    }
    // YOUR CODE ABOVE HERE //
}
/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var arr = [];                       // Initiates Array
    arr.push(stringOne);                
    arr.push(stringTwo);                // Pushes strings to Array
    arr.sort();                         // Sorts Array
    if (arr[1] === arr[0]){             // Checks is values in array are the same
        return 0;
    } else if (stringOne === arr[0]){   // if StringOne is the 1st value in the array retrun -1
        return 1;
    } else {
        return -1;
    }
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
