
// 0. Operator:
  /* 
  Are symbols that operate on an operand. They can do a 
  large variety of operations and the basis of all variables.
  */



// 1. Assignment Operators
  /* 
  a. Can assign a variable to a datatype
  b. Can also can do short hand arithmetic operations 
  =	    x = y	    x = y
  +=	  x += y	  x = x + y
  -=	  x -= y	  x = x - y
  *=	  x *= y	  x = x * y
  /=	  x /= y	  x = x / y
  %=	  x %= y	  x = x % y
  **=	  x **= y	  x = x ** y
  */


            
// 2. Arithmetic Operators
  /* 
  a. Is used to do simple mathmatical computations
  +   Addition        1+1   -> 2
  -   Subtraction     1-1   -> 0
  *   Multiplication  2*3   -> 6
  **  Exponentiation  5**2  -> 25
  /   Division        10/2  -> 5
  %   Modulus         4%2   -> 0
  ++  Increment  x=1  ++x   -> 2
  --  Decrement  x=1  --x   -> 0
  */



// 3. Comparison Operators
  /* 
  Used in condtionals to compare to operands 
  ==	  equal to
  ===	  equal value and equal type
  !=	  not equal
  !==	  not equal value or not equal type
  >	    greater than
  <	    less than
  >=	  greater than or equal to
  <=	  less than or equal to
  */


            
// 4. Logical Operators
  /* 
  Used in conditionals for additional logocal operations
  &&	logical and
  ||	logical or
  !	  logical not
  */


            
// 5. Unary Operators
  /* 
  +        Converts operand into a number
  -        Converts operand into a number and negates it
  ~        Inverts all the bits in the operand and negates them
  !        Converts to booleans and negates it
  typeof   Returns a string of the datatype
  */




// 6. Ternary Operators
  /* 
  a. Can be used in place of if..else statement
  ? Returns if the conditional is true
  : is used in place of an else statement
  */           
// 7. Ternary operator (a ? b : c)
    function tern(isMember) { return (isMember ? 'foo' : 'bar');}
      console.log(tern(true));  // prints => foo
      console.log(tern(false)); // prints => bar
      console.log(tern(null));  // prints => bar 