/*
To make fields in class private, we need to prefix it with #. Eg, #myPrivateField.


*/

class Circle {
  #radius;
  constructor(value) {
    this.#radius = value;
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
}

let circle = new Circle(10);
console.log(circle.area);

/*
Output:

314.1592653589793

*/
