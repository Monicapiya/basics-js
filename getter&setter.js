/*
Getter is used to allowing access to a property that returns a dynamically computed value.

set syntax binds an object property to a function to be called when there is an attempt to set that property.
Setter can be deleted using delete keyword
Getter must have 0 parameters because it is meant to return some value.
*/

const obj = {
  log: ["example", "test"],
  get latest() {
    if (this.log.length === 0) return undefined;
    return this.log[this.log.length - 1];
  },
};
console.log(obj.latest); 

// "test"

class Person {
  constructor(name, age){
    this._name = name;
    this._age = age;
  }
  
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age(){
    return this._age;
  }

  set age(newAge) {
    if(newAge >= 0){
      this._age = newAge;
    } else {
      console.log('Age cannot be Negative');
    }
  }

}

let person = new Person('Pia', 25);
console.log(person.name);


person.name = "Alice";
person.age = -30;  // Output: Age cannot be negative.
console.log(person.name);  // Output: Alice
console.log(person.age);   // Output: 25
