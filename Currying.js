/*
Curried functions allow you to partially apply a function ensuring that only one argument is fulfilled at a time. This makes it easy to generate partially fulfilled functions. The key thing to note here being that curried functions will accept one argument at a time and will keep producing functions, each accepting exactly one argument until all arguments are ingested and the core of the function executed.

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

