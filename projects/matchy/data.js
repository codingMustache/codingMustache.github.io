/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal  = {};
animal.species = 'cat';
animal['name'] = 'Jimmy';
animal.noises = [];

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'Meow';
noises.push('Nyan');
noises.unshift('Purrr');
noises.splice(1, 0, 'Hissss');
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises
animal.noises.push('miau');
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *    There are 3 ways to access properties in an object:
 *        (1)Through dot property notation accessor
 *        (2)Square Bracket property notation accessor
 *        (3)Object Destructuring
 * 2. What are the different ways of accessing elements on arrays?
 *     The 2 ways to access an element in an array is through 
 *     bracket notation and destructuring
 * *******************************************************************
 */


/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
var dog = { species: 'dog', name: 'Jerry', noises: ['woof', 'bark', 'grrrr', 'brrrr'] }
var pig = { species: 'pig', name: 'James', noises: ['snore', 'fart', 'snort', 'qoink'] }
animals.push(duck);
animals.push(dog);
animals.push(pig);
console.log(animals)
;//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var friends = []; // I choose array because you can populate it with any data type
function getRandom(animals){
  return Math.floor(Math.random() * animals.length);
}
animals[getRandom(animals)]['friends'] = friends;
/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}