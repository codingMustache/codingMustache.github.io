// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i <= array.length; i++) { // Loops through Array's length
    console.log(array[i]);                  // Prints value in Array
  };

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

  for (var i = array.length - 1; i >= 0; i--){    // Starts at end of Array and works backwards
    console.log(array[i]);                        // Prints the index of the Array
  };
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var arr = [];                             // Create Array
    for(var key in object){                 // Loop through Object
      arr.push(key)                         // Push key into array
    }
  return arr;                               // returns array
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){        // Loops over Keys in Object
    console.log(key)              // Prints Key
  };
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var arr = [];                   // Iniate an array  
    for(var key in object){       // Loop through object
      arr.push(object[key])       // push object values to array
    };
return arr;                       // return Arr
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for(var key in object){     //loops keys in Object
    console.log(object[key])  //prints values of object
  };
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var count = 0;              // Intiates Count  
  for (var key in object){    // Loops through Objects 
    count++;                  // for each key add 1 to count
  };
  return count;               // return count
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var arr = [];                                   // Iniates array
  for(var key in object){                         // loops through Object
    arr.push(object[key])                         // Pushes Values into Array
  }
  for (var i = arr.length - 1; i >= 0; i--){      // Starts loop at end Array
    console.log(arr[i])                           // Prints values in Array
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
