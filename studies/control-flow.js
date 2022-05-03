
// 0. Control Flow:
/* 
 Control flow is the order that computer executes statements in a script. 
 When code it ran from from line to line from top down. This excludes hoisting 
 that is explained in another part. The way the program executes which is not 
 only from top down but includes that the way conditionals are executed.
*/



// 1. If
/* 
The if statement runs a condition that if is true will run. In the simple examples 
below show that is 2 is greater than 1 the code in the curly braces will execute.
The second example shows an untrue or false statement. Since 1 is not greater than
2 the line of code will not execute. 
*/
if(1 < 2) {console.log("This is true")};      //prints => This is true

if(1 > 2) {console.log("This is not true")};  // prints =>


// 2. Else-if
/* 
 When chaining if statment you can use if-else. This will still only execute if it the
 conditional in the parenthesis is true, with no default run statement. It will not 
 execute anything if either of the statement returns false. If any of the conditionals
 are true it will only run the 1st one to be true. Else-if can be chained with other 
 Else-if statement unlke Else or If.
*/
if (1 > 2) {
    console.log('This will not run');
} else if (1 < 2) {
    console.log('This will run if this is true');
}                                            // prints => "This will run if this is true"


// 3. Else
/* 
 An else statement will run if none of the if or the if-else conditionals are true. Else
 can only be only be put at the end of an Else-if or an If. There is no conditional writen
 for the else statement. As in the example since the conditional is not true the the Else 
 will run.
*/
if (1 > 2) {
    console.log('This will not run');
} else {
    console.log('This will run');
}                                            // prints => "This will run"

// 4. Switch
/* 
 A switch works a bit diffently than the if else. Rather the conditional statement being in 
 the parenthesis the parenthesis holds an expression that is compared to each case. When the 
 cases are equal to each other it will execute the code in the case till the break is iniated.
 If break is not iniated it will run all the code from ran statement all the way down till the 
 break. If not nothing in the expression is true it will run only what is in the defualt. 
*/
var cnt = 3
switch (cnt){
    case 1:
        console.log('This will')
        break;
    case 2:
        console.log('not print')
        break;
    case 3:
        console.log('Here')
        break;
    default:
        console.log('Not this')
}                                       // prints => 'Here'