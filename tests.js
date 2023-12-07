
let country = 'India';
let population = 140.76;

let isIsland = country;

let language;


isIsland = true;

console.log(typeof true);


console.log(typeof isIsland);

console.log(typeof country);

console.log(typeof population);

console.log(typeof language);



/*
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens


let language = 'Telugu';

console.log(language);

const day = 'Day and night';

console.log(day);

language = 'Tamil';

console.log(language);

 */


/*
Write a function that returns the square of a number
Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.

*/

function findSquare(num){
  return num * num
}

console.log(findSquare(5));

/*
Write a function to convert Celsius to Fahrenheit
Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`

formula C to F 👇

°F = °C × (9/5) + 32
*/

let Celsius = 52;

function calFahrenheit() {
  return Celsius * (9/5) + 32;
}

console.log(calFahrenheit());


/*
 Write a function to find the area of a given Rectangle
Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.
*/

function rectangleArea(a, b){
  return `area of recangle is ${a * b}`
}

console.log(rectangleArea(23,45));

/*
Write a function to find the area and perimeter of a Circle
Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.

formula = Area of a circle = πr. The perimeter of a circle = 2πr
*/

  function circleValues(radiusValue) {
    return `Perimeter: ${2*Math.PI*radiusValue}, Area: ${Math.PI*radiusValue*radiusValue}`;
  }

  console.log(circleValues(35));

/*
  Count number of Vowels in String
Function `countVowel()` returns the number of vowels in input string. Learn more about JavaScript String methods from javatpoint.com/javascript-string.
*/

function countVowel(words) {
  let count = 0;
  words=words.toLowerCase();
  for(let i=0;i<words.length;i++){
    if(words.charAt(i)=="a"||words.charAt(i)=="e"||words.charAt(i)=="i"||
    words.charAt(i)=="o"||words.charAt(i)=="u"){
       count++; //Increment vowel count
    }
  }
  return count;
}

console.log(countVowel(Mahi));


 // Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let side1 = 5;
let side2 = 6;
let side3 = 7;
let s = side1+side2+side3 /2;
const area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

console.log(area);


/*
Question 1
Prompt: Write a JavaScript function that filters out strings from an array. For example, given ['hello', 5, 'world', 10], it should return [5, 10].


*/

const execuleWords = ['hello', 5, 'world', 10];
function onlyNumbers(words) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (typeof words[i] !== 'string') {
      result.push(words[i]);
    }
  }
  return result;
}

console.log(onlyNumbers(execuleWords));


/*
Question 2
Prompt: Create a function that returns the sum of all numbers in an array, ignoring non-numeric values. For example, ['1', 2, 'three', 4] should return 6.
*/

const totalNum = ['1', 2, 'three', 4];
function sumNumbers(NUMBER) {
  let sum = 0;
  for (let i = 0; i < NUMBER.length; i++) {
    if (typeof NUMBER[i] === 'number') {
      sum += NUMBER[i];
    }
  }
  return sum;
}

console.log(sumNumbers(totalNum))


/*
Question 3
Write a JavaScript function to calculate the average age of all female persons in an array of objects. Example array: [{name: 'Alice', age: 30, gender: 'female'}, {name: 'Bob', age: 25, gender: 'male'}].

*/

const totalPeople = [{name: 'Alice', age: 30, gender: 'female'}, 
                  {name: 'Bob', age: 25, gender: 'male'},
                 {name: 'Jane', age: 20, gender: 'female'}, 
                  {name: 'Mike', age: 22, gender: 'male'}, 
                  {name: 'Lisa', age: 24, gender: 'female'},
                  {name: 'Emma', age: 35, gender: 'female'}, 
                  {name: 'John', age: 40, gender: 'male'},
                 ];
function calAvgAge(people) {
  let femalePersons = [];
  people.forEach(person => {
    if (person.gender === 'female') {
      femalePersons.push(person);
    }
  });
  let sum = femalePersons.reduce((total, person) => total + person.age, 0);
  return sum / femalePersons.length;
}
console.log(calAvgAge(totalPeople));

/*
 Question 4
Prompt: Create a function that counts the number of elements in an array that are greater than 10. For instance, [3, 11, 20] should return 2.

*/

/* 
const numbers = [3,11,20];

function totalNum(){
  let greaterNum = [];
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > numbers.length) {
      greaterNum.push(numbers[i]);
      
    }
  }
   return greaterNum;
};



console.log(totalNum(numbers));

*/

const numbers = [3,11,20];

function totalNum(){
  let greaterNum = [];
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] > numbers.length) {
        greaterNum++;
    }
  }
   return greaterNum;
};



console.log(totalNum(numbers));

//  Write a function that finds the longest string in an array of strings. For example, ['short', 'longer', 'longest'] should return ////'longest'.

const data = ['short', 'longer', 'longest'];

function lengthOfData(array){
  let longString = '';
  for (let i = 0; i < array.length; i++){
    if(array[i].length > longString.length){
      longString = array[i];
    }
  }
  return longString;
};

console.log(lengthOfData(data));

//Create a function to calculate the factorial of a number using recursion. For instance, the factorial of 5 (denoted as 5!) is 120.

function factCal(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factCal(number - 1);
  }
}
console.log(factCal(5));


// Write a JavaScript function to find the smallest number in an array of numbers. For example, [2, 3, 1, 4] should return 1.

const numbers1 = [2,3,1,4];
const smallestNum = Math.min(...numbers1);
console.log(smallestNum);