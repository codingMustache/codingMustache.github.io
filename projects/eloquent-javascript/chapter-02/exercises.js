
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(i) {
  for (let string = '#'; string.length <= i; string += '#') {
    console.log(string);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(x, y) {
  for(let i = x; i <= y; i++){
    if ( i % 3 === 0 && i % 5 === 0){ 
      console.log( "fizzbuzz" ); } 
    else if ( i % 3 === 0){ 
      console.log( "fizz" ); } 
    else if ( i % 5 === 0){ 
      console.log( "buzz" ); } 
    else { 
      console.log(i);
     }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size){
  let space = ' ';  
  let str = '';
  for (let i = 1; i <= (size * size); i++) {
    str += space;
    if (i % size === 0) {
      str += '\n';
          if (size % 2 === 1) {
            space = (space === ' ')? '#': ' ';
          }
    } else {
      space = (space === ' ')? '#': ' ';
    }
  }
  console.log(str)
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
