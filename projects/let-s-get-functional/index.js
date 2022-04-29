// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<codingMustache.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(element) {
        if (element.gender === 'male') {
            return true;
        } else {
            return false;
        }
        });
    return males.length;
};

var femaleCount = function(array){
    let numFemales = _.reduce (array, function(accumulator, current, index, collection) {
        if (current.gender === 'female') {
            accumulator += 1;
        }
    return accumulator;
    }, 0)
    return numFemales;
};

var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current, index, collection) {    
        if (current.age > accumulator.age) {
            accumulator = current;
        }
            return accumulator;
        }) 
    return oldest.name;
}

var youngestCustomer = function(array){
    let young = _.reduce(array, function(total, curr){
        if(curr.age < total.age){
            total = curr;
        }
        return total;
    });
    return young.name
};

var averageBalance = function(array){
    var all = _.map(array, function(element){
        return Number(element.balance.replace(/[^0-9.-]+/g,""));
    })
    var toat = _.reduce(all, function(x, y){
        return x + y}, 0)
  var avg = toat/all.length
  return avg;
}

var firstLetterCount = function(array, letter){
    let firstLetter = _.filter(array, function(element) {
        return element.name[0].toUpperCase() === letter.toUpperCase()
      })
      return firstLetter.length
};

var friendFirstLetterCount = function(array, customer, leter){

};

var friendsCount = function(array, names){
    var FC = _.filter(array, function(element){
        if(names === element.name){
          for(var key in element.friends){
            return element.friends[key].name
          }
        }
    })
    return FC
}

var topThreeTags = function(array){

};

var genderCount = function(){

};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
