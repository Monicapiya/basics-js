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


/*

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function(temperature){
  let max = temperature[0];
  let min = temperature[0];
  for(let i = 0; i < temperature.length; i++) {

    const curTemp = temperature[i];
    if(typeof curTemp !== 'number') continue;

    if(curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp;
  }
  console.log(max,min );
  return max - min;
}

const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);



// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays


//const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
//const temperatures2 = [3, -2, -9, -11, 'error', 9, 34, 17, 15, 14, 40, 5];
//const temperature = temperatures1.concat(temperatures2);

const calcTempAmplitudeNew = function(){

  // const temperature = temp1.concat(temp2);

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [3, -2, -9, -11, 'error', 9, 34, 17, 15, 14, 40, 5];
 const temperature = temperatures1.concat(temperatures2);

  let max = temperature[0];
  let min = temperature[0];
  for(let i = 0; i < temperature.length; i++) {

    const curTemp = temperature[i];
    if(typeof curTemp !== 'number') continue;

    if(curTemp > max) max = curTemp;
    if(curTemp < min) min = curTemp;
  }
  console.log(max,min );
  return max - min;
}

const amplitudeNew = calcTempAmplitudeNew();

console.log(amplitudeNew);

//Array.forEach() 👇

/* 
Syntax 👇
array.forEach(callbackFn(currentValue, index, array){
  //write the code here
});

The forEach() method takes a callback function as an argument. This callback function is executed for each element in the array and has access to three parameters:

currentValue: The current element being processed in the array.
index (optional): The index of the current element being processed.
array (optional): The array that forEach() was called upon

*/

//  1: Printing each element of an array

//  1: Printing each element of an array

let fruits = ['Apple', 'Orange', 'Grape'];

// array.forEach(callbackFn(currentValue, index, array){
  //write the code here
// });

fruits.forEach((element) =>{
              console.log(element);
              });

      //Output 'Apple'
           //'Orange'
           //'Grape'

//  2: Modifying each element of an array double

let num = [1, 2, 3, 4, 5];

// array.forEach(callbackFn(currentValue, index, array){
  //write the code here
// });

num.forEach((number) => {console.log(number * 2)});

//  3: Accessing the index of each element

let alphas = ['a', 'b', 'c', 'd'];

// array.forEach(callbackFn(currentValue, index, array){
  //write the code here
// });

alphas.forEach((element, index) => {
  console.log(`Element at ${index} is ${element}`);
})
