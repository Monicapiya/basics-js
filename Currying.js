/*
Curried functions allow you to partially apply a function ensuring that only one argument is fulfilled at a time. This makes it easy to generate partially fulfilled functions. The key thing to note here being that curried functions will accept one argument at a time and will keep producing functions, each accepting exactly one argument until all arguments are ingested and the core of the function executed.

Currying is the process of transforming a function with multiple arguments and post sequence of nesting functions.

IIFE is the function expression that automatically invokes after completion of its definition .



*/


function curry(fn) { // curry(fn) does transforms curry
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
} 
function sum(a, b) {
  return a + b;
}
let currySum = curry(sum);
console.log(currySum(10)(20)); 

/*
Output:

30

*/

const prepCurry = (fn) =>
function curry(...arguments) {
return arguments.length === fn.length
? fn(...arguments)
:(...newArguments) => curry(...arguments, ...newArguments);
};


const multiplyAll = function (a, b, c, d) {
  return(a * b * c * d);
  };
  
  const multiplyAllCurry = prepCurry(multiplyAll);



  // examples

  const distance = function(start){
    // we have a closed scope here, but we'll return a function that
    //  can access it - effectively creating a "closure".
    return function(end){
      // now, in this function, we have everything we need. we can do
      //  the calculation and return the result.
      return Math.sqrt( Math.pow(end.x-start.x, 2) + Math.pow(end.y-start.y, 2) );
    }
  }
  
  /*
Output:

10.816653826391969

*/

// below code is the shorten version of the above code using latest ES6 releases 👇

  const distancewithCurrying = 
        (start) => 
          (end) => Math.sqrt( Math.pow(end.x-start.x, 2) +
                              Math.pow(end.y-start.y, 2) );

console.log(distancewithCurrying({x:2, y:2})({x:11, y:8}));

/*
Output:

10.816653826391969

*/
