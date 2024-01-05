/*
 Constructor is a special method of a class. It is used for creating and initializing an object of that class.

 Class is created using the 'class' keyword

 How do you call introduce method of class?
class Person {
    constructor(name) {
      this.name = name;
    }  
    introduce() {
      console.log(`Hello, my name is ${this.name}`);
    }  
}  
const alice = new Person('Alice');

ans:  alice. introduce() is the correct way to call introduce method of class Person.

*/

// Declration 
class Rectangle {
  constructor(height, width) {
  this.height = height;
  this.width = width;
  }
  }
  
  //Expression; the class is anonymnous but assgined to a variable
  
  const Rectangle =class {
  constructor(height, width) {
  this.height = height;
  this.eidth = width;
  }};
  
  //expression; the alss has its own name
  
  const Rectangle = class Rectangle2 {
  constructor(height, width) {
  this.height = height;
  this.width = width;
  }
  }

  