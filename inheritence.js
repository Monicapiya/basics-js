/*
Many objects share properties and methods.
Use the extends keyword to allow for inheritance.
ES5 provided a standard way to work with prototypal inheritance by using the Object.create() method.

Note that now you should use the newer ES6 'class' and 'extends' keywords to implement inheritance.

By default, the JavaScript engine provides you with a built-in 'Object()' function and an anonymous object that can be referenced by the 'Object.prototype'

The Object.create() method creates a new object and uses an existing object as a prototype of the new object:

Object.create(proto, [propertiesObject])

The call() method is a predefined JavaScript method.It can be used to invoke (call) a method with an owner object as an argument (parameter).

*/

let person = {
  name: "Pia",
  greet: function () {
    return "Hi! I am " + this.name;
  },
};

let teacher = {
  teach: function (subject) {
    return "I can teach" + subject;
  },
};

teacher.__proto__ = person; // teacher object to access all methods and properties of the person object

console.log(teacher.name);
console.log(teacher.greet());

const persona = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person1 = {
  firstName: "Pia",
  lastName: "Jaiswal",
};

const person2 = {
  firstName: "Mahi",
  lastName: "Khurana",
};

persona.fullName.call(person2);

// output: 'Mahi Khurana'

function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log("Walking on " + this.legs + " legs");
};

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function () {
  console.log(" flying");
};

let pigeon = new Bird(2);

pigeon.walk();
pigeon.fly();

/*
Animal {
  __proto__: { walk: ƒ (), constructor: ƒ Animal() }
}
ƒ Animal()
'Walking on 2 legs'
' flying'

*/

// Below is the simplified version of above code using the 'extends' and 'super' keywords. 👇

class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log("Walking on " + this.legs + "legs");
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }

  fly() {
    console.log("flying");
  }
}

let bird = new Bird(2);
bird.walk();
bird.fly();

/*
'Walking on 2legs'
'flying'

*/

class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log("Walking on " + this.legs + "legs");
  }
}

class Birds extends Animal {
  constructor(legs, color) {
    super(legs);
    this.color = color;
  }
  fly() {
    console.log("flying");
  }
  getColor() {
    return this.color;
  }
}

let pegion = new Birds(2, "white");
console.log(pegion.getColor());

// output: 'white'
