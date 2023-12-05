//Array.map() 👇
/* 
The Array.map() method is used to create a new array by applying a function to each element of an existing array. It takes a callback function as an argument and executes that function on each element of the array. The result of the function is then stored in a new array, which is returned by the map() method.
array.map(callback(currentValue, index, array), thisArg)
*/

// 1. Doubling the values in an array
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); 

// Output: [2, 4, 6, 8, 10]

//  Converting Fahrenheit temperatures to Celsius:

const fahrenheitTemps = [32, 68, 86, 104];
const celsiusTemps = fahrenheitTemps.map(temp => (temp - 32) * (5 / 9));
console.log(celsiusTemps); 

// Output: [0, 20, 30, 40]

// Extracting property values from an array of objects

const students = [
  { name: 'Alice', age: 20 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 18 }
];
const studentNames = students.map(student => student.name);
console.log(studentNames); 

// Output: ['Alice', 'Bob', 'Charlie']

// Mapping an array of strings to their lengths

const words = ['apple', 'banana', 'cherry'];
const wordLengths = words.map(word => word.length);
console.log(wordLengths); 

// Output: [5, 6, 6]

// Transforming an array of numbers to an array of their square roots:

const numbers1 = [4, 9, 16, 25];
const sqrtNumbers = numbers1.map(num => Math.sqrt(num));
console.log(sqrtNumbers); 

// Output: [2, 3, 4, 5]