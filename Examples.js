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

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/


// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

const data1 = [17, 21, 23];
const data2 = [12, -5, 5, 0, 4];
console.log( `... ${data1[0]}°C ... ${data1[1]}°C ... ${data1[2]}°C ...` );

const printForecast = function(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++){
    str += `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log('...' + str);
};

printForecast(data1);


/*

isPalindromeReverse(), checks if a given string is a palindrome by reversing the string and comparing it to the original string. Here's how it works:

The isPalindromeReverse() function takes a string, str, as input.

Inside the function:

str.split('') splits the string into an array of individual characters.
Array.reverse() reverses the order of elements in the array.
Array.join('') concatenates the reversed array back into a string.
const reverseStr stores the reversed string obtained in the previous step.

The function checks if str is equal to reverseStr using the === equality operator. If they are equal, it means the string is the same when read forwards and backwards, and the function returns true. Otherwise, it returns false.

Here's an example:

function isPalindromeReverse(str) {
  const reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

console.log(isPalindromeReverse('radar')); // Output: true
In this example, the string 'radar' is passed to the isPalindromeReverse() function. The function converts the string to an array ['r', 'a', 'd', 'a', 'r'], reverses it to ['r', 'a', 'd', 'a', 'r'], and then joins it back to obtain the string `'radar


'. The function then checks if 'radar'is equal to'radar', which is true. Therefore, the output is true`


Method 2: Using Array.every()

function isPalindromeEvery(str) {
  return str.split('').every((char, index) => char === str[str.length - index - 1]);
}

console.log(isPalindromeEvery('radar')); // Output: true
Method 3: Using Two Pointers

function isPalindromePointers(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindromePointers('radar')); // Output: true
Method 4: Using Recursion

function isPalindromeRecursive(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  const subStr = str.slice(1, str.length - 1);
  return isPalindromeRecursive(subStr);
}

console.log(isPalindromeRecursive('radar')); // Output: true
Method 5: Using Regular Expression and String.replace()

function isPalindromeRegex(str) {
  const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reverseStr = alphanumericStr.split('').reverse().join('');
  return alphanumericStr === reverseStr;
}

console.log(isPalindromeRegex('radar')); // Output: true


*/

// Array.reduce()

/*
  The reduce method accepts two arguments: a callback and an initial value (arr.reduce(callback, initialValue), the callback takes 4 arguments, accumulator, current value, current index, and initial value. In simple words, this method reduces the array to return one value.

  Syntax: 
array.reduce( function(total, currentValue, currentIndex, arr), 
initialValue )

*/

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum);

/*
  Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):

*/

function maskify(CC) {
  if(CC.length <= 4) {
    return CC;
  }
  
  //used slice mthod to extrect all the chars expect ast 4. and replaced with # using regular expression 
  const maskedChar = CC.slice(0, -4).replace(/./g, '#');
  const lastFourChars = CC.slice(-4);
  
  return maskedChar + lastFourChars;
}

console.log(maskify('4556364607935616'));


// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.


function uppercase(str) {
  // Split the input string into an array of words
  let array1 = str.split(' ');

  // Initialize an empty array to store the modified words
  let newarray1 = [];

  // Iterate through each word in the array
  for (let x = 0; x < array1.length; x++) {
    // Push the word with its first letter capitalized and the rest of the letters unchanged
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }

  // Join the modified words into a single string, separated by spaces
  return newarray1.join(' ');
}

// Log the result of calling uppercase with the input string "the quick brown fox" to the console
console.log(uppercase("the quick brown fox")); 

//// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

function find_longest_word(str)
{
  let array1 = str.match(/\w[a-z]{0,}/gi);
  let result = array1[0];

  for(let x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function vowel_count(str1)
{
  let vowel_list = 'aeiouAEIOU';
  let vcount = 0;
  
  for(let x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));