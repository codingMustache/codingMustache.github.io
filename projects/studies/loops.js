// 0. Loops:
  /*
    Loops are blocks of code to be repeated to do a specific task. 
    Each kind of loop can be used for a specific kinf of task some
    loop over objects and some over arrays and some just to interate
    over a specfic amount of times.
  */


// 1. While Loops
  /* 
  a. Will iterate until the conditional returns false.
  b. To make sure you do not write an infinte loop make sure the
    conditional will change to eventually return false.
  */
    var i = 0;              // prints => 0
    while(i < 3){           //           1
      console.log(i);       //           2
      i++;                  //           3
    }


// 2. For Loops
  /* 
  a. Contains 3 parts the initial exppression, the conditional and the incremental
  b. The intial expression is ran once and then as the conditional is flase it runs
  the statement within the loop then running the incremental expression.
  c. Usually used to loop over arrays.  
  */
    var nums = "";
    for(let i = 0; i <= 3; i++){
      text += i + " "; 
    }
    console.log(text) // prints => 1 2 3


// 3. For-In Loops
  /* 
  a. For in loops run for an interative times in variable
  b. The syntax starts with a declared variable followed by the variable to be 
  interated over
  c. Can be used for any variable that has an index
  */          
////     Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
    var x = "cat"         // prints =>    cat 0
    for(let i in x){      //              cat 1
      console.log(x, i)   //              cat 2
    }
    var arr = [1,2,3]        // prints => 1
    for(let i in arr){      //            2
      console.log(arr[i])   //            3
    }                   
                   

// 4. Looping Over Array
  /* 
  a. As it can be done with a for in loop common practice is using a for loop
  b. Using the .length method is key to looping over the array 
  */
    var arr = ['this','is','a','for','loop']
    var text = ""
    for(let i = 0; i < arr.length; i++){
      text += arr[i] + " ";
    }
    console.log(text)   // prints -> this is a for loop
    // The inverse of this would be:
    for(let i = arr.length-1; i >= 0; i--){
      text += arr[i] + " ";
    }
    console.log(text)   // prints -> loop for a is this


// 5. Looping Over Object
  /* 
  a. The best way to loop over an obejct is using the a for in loop
  b. The interating vairable will be the keys to the objects to grab 
  the values you must use dot or bracket notation. 
  */
      var obj = {1:'this', 2:'is', 3:'a', 4:'for-in', 5:'loop'}
      var text = ""
      for(var key in obj){
        text += obj[key] + " ";
      }
      console.log(text) // prints => this is a for-in loop