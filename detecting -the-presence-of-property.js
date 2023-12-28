/*
When accessing a property or a method from an object in a function or in a situation where the shape of the objects is not guaranteed, it becomes important to implement checks to ensure properties being accessed exist and if not, then their absence is carefully handled so as not to produce errors.
 
If you observe the output of this exercise, you’ll see an error message that reads ‘rect.area is not a function’. Open the main.js file and observe the code. We have an array of two objects representing rectangles, one of which has a built-in method named area() which we’re trying to access to produce the area of the rectangle.
 
Since one of the objects doesn’t offer a built-in area() method, the code throws an error which we’re capturing using a try/catch block. An ideal situation would’ve been to offer an alternative solution so that area computation still occurs and that is precisely what we’ll do.

*/


const rectangles = [
  {
    id: 'Rectangle - 01',
    width: 129.2,
    height: 80.9,
  },
  {
    id: 'Rectangle - 02',
    width: 342,
    height: 120,
    area() {
      return this.width * this.height;
    },
  },
];


const calcArea = function () {
    return this.width * this.height;
  };
  


  rectangles.forEach((rect) =>
  console.log(
   `${rect.id} : ${
      rect.hasOwnProperty('area') ? rect.area() : calcArea.call(rect)
   }`
 )
);

/*
Output:

Rectangle - 01 : 10452.28
Rectangle - 02 : 41040


*/