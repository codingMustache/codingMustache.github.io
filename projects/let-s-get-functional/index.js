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

var friendFirstLetterCount = function(array, customer, letter){
    var z = 0;
    let namez = _.filter(array, function(element) {
      return element.name === customer
    })
    _.map(namez[0].friends, function(e){
      if(e.name[0].toUpperCase() === letter.toUpperCase()){
        z++
      }
    })      
    return z
};

var friendsCount = function(array, pName){
    var result = [];
    var friendI = [];
    let namez = _.map(array, function(e){
      return e.friends
    })
    let arr = _.map(namez, function(e){
      return e 
    })
    for(var i = 0; i < arr.length; i++){
      for(var j = 0; j < arr[i].length; j++){
        if(arr[i][j].name === pName){
          friendI.push(i);
        }
      }
    }
    for(var h = 0; h < friendI.length; h++){
      let ind = friendI[h]
      result.push(array[ind].name)
    }
    return result;
}

var topThreeTags = function(array) {
    var myArray = [];
    var topTags = [];
    
    
    var tags = _.pluck(array, "tags");
    
    var allTags = _.reduce(tags, function(acc, currTag) {
        return acc.concat(currTag);
    }).sort();
    
    var total = allTags.reduce(function(count, tag) {
        count[tag] ? count[tag] = count[tag] + 1 : count[tag] = 1;
        return count;
    }, {});
    
   for(var key in total){
       myArray.push([key, total[key]]);
   }
   var top = myArray.sort(function(acc, currTag) {
       return currTag[1] - acc[1];
   }).slice(0, 3);
   
   
   _.filter(top, function(topTagArr) {
       return topTagArr[0] ? topTags.push(topTagArr[0]) : null;
   });
   return topTags;
};

var genderCount = function(array){
    var genCountObj = _.reduce(array, function(resultObj, customerObj) {
        if(resultObj[customerObj.gender]) {
            resultObj[customerObj.gender] += 1;
        } else {
            resultObj[customerObj.gender] = 1;
        }
        return resultObj
    },{});
    return genCountObj;
  }

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
