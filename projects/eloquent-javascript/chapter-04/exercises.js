////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  var arr = []
  if(step === undefined){
    step = 1
  }  
  if ( step <= 0 || start + step >= end){
    return arr;
  }
  while(start <= end){
    arr.push(start)
    start+= step
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  result = array.reduce(function(x,y){
    return x + y
  }, 0)
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  var array = [];
  for(let i = 0; i < arr.length; i++){
    array.unshift(arr[i]);
  }
 return array
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  var n = 0;
  for (var i = 0; i < array.length / 2; i++) {
    n = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = n;
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
    if (!array.length) {
      return {};
  }
  let list = {
      value: array[0]
  };
  if (array.length == 1) {
      list.rest = null;
      return list;
  }
  list.rest = arrayToList(array.slice(1));
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, arr=[]){
  if (list === null) {
    return arr;
  }
  arr.push(list.value);
  return listToArray(list.rest, arr);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  if (list !== null && !Object.keys(list).length) {
      return {value: element, rest: null}
  }
  return {value: element,rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, value) {
  for(var node = list; node; node = node.rest) {
    if (value === 0) {
      return node.value;
    } else if (node.rest === null) {
      return undefined;
    } else {
      return nth(list.rest, value - 1);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  if(typeof x !== 'object' || typeof y !== 'object'){
    return x === y; 
  }  
  let xKey = Object.keys(x);
  let yKey = Object.keys(y);
  if(xKey.length !== yKey.length){
    return false;
  }
  for(let i = 0; i < xKey.length; i++){
    if(!yKey.includes(xKey[i]) || !deepEqual(x[xKey[i]], y[yKey[i]])){
      return false;
    }
  }
  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
