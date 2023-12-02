
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
