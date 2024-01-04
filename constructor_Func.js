/*
The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues as eval(). However, unlike eval (which may have access to the local scope), the Function constructor creates functions which execute in the global scope only.

To create an object from a constructor function, we use the new keyword.


*/


const sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 6));

/*
Output:8

*/


function Person () {
  this.name = 'John',
  this.age = 23
}

// create an object
const person = new Person();

console.log(person);

/*
Output:

Person {
  name: 'John',
  age: 23,
  __proto__: { constructor: ƒ Person() }
}

*/


function Person () {
  this.name = 'John',
  this.age = 23,

   this.greet = function () {
      console.log('hello');
  }
}

// create objects
const person1 = new Person();
const person2 = new Person();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John

/*
Output:

'John'
'John

*/