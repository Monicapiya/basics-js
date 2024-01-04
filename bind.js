/*
The bind() method of Function instances creates a new function that, when called, calls this function with its 'this' keyword set to the provided value, and a given sequence of arguments preceding any provided when the new function is called.

syntax:

bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2, /* …, / argN)


*/

const module = {
  x: 42,
 getX: function () {
 return this.x;
 },
 };
 
 const unboundGetX = module.getX;
 
 const boundGetX = unboundGetX.bind(module);
 
 console.log(boundGetX());

 // output: 42
