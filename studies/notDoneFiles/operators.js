
// 0. Operator:
  /* 
  
  */



// 1. Assignment Operators
  /* 
  =	x = y	x = y
  +=	x += y	x = x + y
  -=	x -= y	x = x - y
  *=	x *= y	x = x * y
  /=	x /= y	x = x / y
  %=	x %= y	x = x % y
  **=	x **= y	x = x ** y
  */


            
// 2. Arithmetic Operators
  /* 
  +
  -
  *
  **
  /
  %
  ++
  -- 
  */



// 3. Comparison Operators
  /* 
  ==	equal to
  ===	equal value and equal type
  !=	not equal
  !==	not equal value or not equal type
  >	greater than
  <	less than
  >=	greater than or equal to
  <=	less than or equal to
  ?	
  */


            
// 4. Logical Operators
  /* 
  &&	logical and
  ||	logical or
  !	logical not
  */


            
// 5. Unary Operators
  /* 
  +
  -
  ~
  !
  typeof
  */
////    Unary operators (!, typeOf, -)



// 6. Ternary Operators
  /* 
  a. Can be used in place of if..else statement
  ?
  :
  */           
// 7. Ternary operator (a ? b : c)
    function tern(isMember) { return (isMember ? 'foo' : 'bar');}
      console.log(tern(true));  // prints => foo
      console.log(tern(false)); // prints => bar
      console.log(tern(null));  // prints => bar 